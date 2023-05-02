import React from 'react';

import {useState} from 'react';
let replaceNumber = 0;

const MyComponent2 = (props) => {
    const [isNumber, setIsNumber] = useState(0);

    const numberHandler = () => {
        replaceNumber += 1; 
        setIsNumber(replaceNumber);
    }; 

    return (
        <>
         <button onClick={numberHandler}>버튼을 눌러보세요!</button>
         <p>현재 카운트: {isNumber}</p>   
        </>
    );
};

export default MyComponent2;