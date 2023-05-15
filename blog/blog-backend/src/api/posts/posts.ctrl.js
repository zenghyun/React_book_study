import Post from '../../models/post';

import mongoose from 'mongoose';
import Joi from '@hapi/joi';

const { ObjectId } = mongoose.Types;

export const getPostById = async (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400; // Bad request
    return;
  }
  try{
    const post = await Post.findById(id);
    // 포스트가 존재하지 않을 때
    if(!post) {
      ctx.status = 404; // Not Found
      return;
    }
    ctx.state.post = post;
    return next();
  } catch(e){
    ctx.throw(500, e);
  }
};

export const checkOwnPost = (ctx, next) => {
  const { user, post } = ctx.state; 
  if(post.user._id.toString() !== user._id) {
    ctx.status = 403;
    return; 
  }
  return next();
}
// let postId = 1; // id의 초깃값입니다.

// posts 배열 초기 데이터
// const posts = [
//   {
//     id: 1,
//     title: '제목',
//     body: '내용',
//   },
// ];

/* 포스트 작성
    POST /api/posts
    { 
        title: '제목', 
        body: '내용',
        tags: [ '태그1', '태그2' ]
    }
*/

export async function write(ctx) {
  // REST API의 Request Body는 ctx.request.body에서 조회할 수 있습니다.
  // const { title, body } = ctx.request.body;
  // postId += 1; // 기존 postId에 1을 더한다.
  // const post = { id: postId, title, body };
  // posts.push(post);
  // ctx.body = post;

  const schema = Joi.object().keys({
    // 객체가 다음 필드를 가지고 있음을 검증
    title: Joi.string().required(), // required()가 있으면 필수 항목임
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(), // 문자열로 이루어진 배열
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  const { title, body, tags } = ctx.request.body;
  // eslint-disable-next-line no-undef
  const post = new Post({
    title,
    body,
    tags,
    user: ctx.state.user,
  });
  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
}

/* 포스트 목록 조회
GET /api/posts?username=&tag=&page=  
*/

export const list = async (ctx) => {
  // query는 문자열이기 때문에 숫자로 변환해 주어야 한다.
  // 값이 주어지지 않았다면 1을 기본으로 사용한다.
  const page = parseInt(ctx.query.page || '1', 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }
  // ctx.body = posts;
  const { tag, username } = ctx.query; 
  // tag, username 값이 유효하면 객체 안에 넣고, 그렇지 않으면 넣지 않음 
  const query = 
  {
    ...(username? {'user.username': username} : {}),
    ...(tag? {tags: tag}: {}),
  }
  try {
    const posts = await Post.find(query)
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();
    const postCount = await Post.countDocuments(query).exec();
    ctx.set('Last-Page', Math.ceil(postCount / 10)); 
    ctx.body = posts. 
    map(post => ({
        ...post,
        body: post.body.length < 200 ? post.body: `${post.body.slice(0,200)}...`
    }));
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 특정 포스트 조회
GET /api/posts/:id 
 */

export const read = async (ctx) => {
  // const { id } = ctx.params;
  // 주어진 id 값으로 포스트를 찾는다.
  // 파라미터로 받아 온 값은 문자열 형식이므로 파라미터를 숫자로 변환하거나 비교할 p.id 값을 문자열로 변경한다.
  // const post = posts.find(p => p.id.toString() === id);
  // 포스트가 없으면 오류를 반환한다.
  // if(!post) {
  //     ctx.status = 404;
  //     ctx.body = {
  //         message: '포스트가 존재하지 않습니다.',
  //     };
  //     return;
  // }
  // ctx.body = post;
  // const { id } = ctx.params;
  // try {
  //   const post = await Post.findById(id).exec();
  //   if (!post) {
  //     ctx.status = 404; // Not Found
  //     return;
  //   }
    ctx.body = ctx.state.post;
  // } catch (e) {
    // ctx.throw(500, e);
  // }
};

/* 특정 포스트 제거
DELETE /api/posts/:id 
*/

export const remove = async (ctx) => {
  // const { id } = ctx.params;
  // 해당 id를 가진 post가 몇 번재인지 확인한다.
  // const index = posts.findIndex(p => p.id.toString() === id);
  // 포스트가 없으면 오류를 반환한다.
  // if (index === -1) {
  //     ctx.status = 404;
  //     ctx.body = {
  //         message: '포스트가 존재하지 않습니다.',
  //     };
  //     return;
  // }
  // idnex번째 아이템을 제거합니다.
  // posts.splice(index,1);
  // ctx.status = 204; // No Content
  const { id } = ctx.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204; // No Content ( 성공하기는 했지만 응답할 데이터는 없다. )
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 포스트 수정(교체)
PUT /api/posts/:id
{ title, body }
*/

// export const replace = ctx => {
// PUT 메서드는 전체 포스트 정보를 입력하여 데이터를 통째로 교체할 때 사용한다.
// const { id } = ctx.params;
// 해당 id를 가진 post가 몇 번째인지 확인한다.
// const index = posts.findIndex(p => p.id.toString() === id );
// 포스트가 없으면 오류를 반환한다.
// if(index === -1) {
// ctx.status = 404;
// ctx.body = {
//     message: '포스트가 존재하지 않습니다.',
// };
// return;
// }
// 전체 객체를 덮어 씌웁니다.
// 따라서 id를 제외한 기존 정보를 날리고, 객체를 새로 만듭니다.

// posts[index] = {
//     id,
//     ...ctx.request.body,
// };
// ctx.body = posts[index];
// };

/* 포스트 수정(특정 필드 변경)
PATCH /api/posts/:id 
{
    title: '수정',
    body: '수정 내용',
    tags: ['수정', '태그']
}
*/

export const update = async (ctx) => {
  // PATCH 메서드는 주어진 필드만 교체한다.
  // const { id } = ctx.params;
  // 해당 id를 가진 post가 몇번째인지 확인햔다.
  // const index = posts.findIndex(p => p.id.toString() === id);
  // 포스트가 없으면 오류를 반환한다.
  // if( index === -1 ) {
  //     ctx.status = 404;
  //     ctx.body = {
  //         message: '포스트가 존재하지 않습니다.',
  //     };
  //     return;
  // }
  // 기존 값에 정보를 덮어 씌웁니다.
  // posts[index] = {
  //     ...posts[index],
  //     ...ctx.request.body,
  // };
  // ctx.body = posts[index];

  const schema = Joi.object().keys({
    // write와 비슷한 schema지만 required()가 없습니다.
    title: Joi.string(), // required()가 있으면 필수 항목임
    body: Joi.string(),
    tags: Joi.array().items(Joi.string()), // 문자열로 이루어진 배열
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  const { id } = ctx.params;
  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true, // 이 값을 설정하면 업데이트된 데이터를 반환합니다.
      // false일 때는 업데이트 되기 전의 데이터를 반환합니다.
    }).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};
