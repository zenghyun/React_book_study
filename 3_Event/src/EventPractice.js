import React from "react";
import { useState } from "react";

const EventPractice = () => {
  //   const [name, setName] = useState("");
  //   const [id, setId] = useState("");

  //   const nameHandler = e => setName(e.target.value);
  //   const idHandler = e => setId(e.target.value);

  //   const onClick = () => {
  //     alert(`
  //         name : ${name},
  //         id: ${id}
  //     `);
  //     setName();
  //     setId();
  //   };
  const [form, setForm] = useState({
    username: "",
    userId: ""
  });

  const { username, userId } = form; 


  const onChange = e => {
    const nextForm = {
        ...form,
        [e.target.name]: e.target.value
    };
    console.log(nextForm);
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + " : " + userId);
    setForm({
        username: '',
        userId: ''
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      이벤트 연습
      <br />
      <label htmlFor="username">이름: </label>
      <input
        type="message"
        name="username"
        placeholder="이름"
        onChange={onChange}
      ></input>
      <br />
      <br />
      <label htmlFor="userId">ID: </label>
      <input
        type="message"
        name="userId"
        placeholder="Id"
        onChange={onChange}
        onKeyDown={onKeyPress}
      ></input>
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
