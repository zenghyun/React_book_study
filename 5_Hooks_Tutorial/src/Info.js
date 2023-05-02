import React, {useState, useEffect, useReducer} from 'react';

const Info = () => {

    // const [form, setForm] = useState({
    //     name: '',
    //     nickname: '',
    //     });

    // const {name, nickname} = form;   

    // useEffect(() => {
    //     console.log('effect')
    //     return () => {
    //         console.log('cleanup');
    //         console.log(name);
    //     }
    // },[name]);

    // const onChange = e => {
    //     const newInfo = {
    //         ...form,
    //         [e.target.name]: e.target.value
    //     };
    //     setForm(newInfo);
    // };

    function reducer(state, action) {
        return {
            ...state,
            [action.name]: action.value
        };
    }
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });
   
    const {name, nickname} = state; 

    const onChange = e => {
        dispatch(e.target);
    };
    
    return (
        <>
        <div>
            <input type='text' value={name} name='name' onChange={onChange}></input>
            <input type='text' value={nickname} name='nickname' onChange={onChange}></input>
        </div>
        <div>
            <p>이름: <b>{name}</b></p>
            <p>닉네임: <b>{nickname}</b></p>
        </div>
        </>
    );
};

export default Info;