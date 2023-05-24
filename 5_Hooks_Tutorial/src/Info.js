import React from "react";

import useInputs from "./useInputs";

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
 
    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    });
  const { name, nickname } = state;
  
 

  return (
    <>
    <div>
      <input type="text" name="name" value={name}  onChange={onChange} />
      <input type="text" name="nickname" value={nickname} onChange={onChange} />
    </div>
    <div>
    <b>이름: </b> {name}
    </div>
    <div>
    <b>닉네임: </b> {nickname}
    </div>
    </>
  );
};

export default Info;
