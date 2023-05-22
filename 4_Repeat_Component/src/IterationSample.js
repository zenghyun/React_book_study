import React, { useState } from "react";

const IterationSample = () => {
  const [lists, setLists] = useState([
    {id: 1, title: '눈사람'},
    {id: 2, title: '바다'},
    {id: 3, title: '겨울'},
    {id: 4, title: '눈'},
  ]);

  const [text, setText] = useState('');
  const [id, setId] = useState(5);

  const onChange = e => {
    setText(e.target.value);
  }
  
  const onClick = () => {
    const newLists = lists.concat({id: id, title: text});
    setLists(newLists);
    setId(id + 1);
    setText('');
  };
  
  const onRemove = (id) => {
    const removeLists = lists.filter(list => list.id !== id);
    setLists(removeLists);
  };

  const list = lists.map( list => <li key={list.id} onDoubleClick={() => onRemove(list.id)}>{list.title}</li>);

  return (<>
    <input 
    type="text"
    onChange={onChange}
    value={text}
    />

    <button onClick={onClick}>확인</button>
    <ul>
      {list}
    </ul>
  </>);
};

export default IterationSample;
