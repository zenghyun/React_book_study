import React, {useMemo, useState, useCallback, useRef} from 'react';
 
const getAverage = numbers => {
    console.log('평균값 계산 중');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((pre, cur) => pre + cur);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setlist] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

const onChange = useCallback(e => {
    setNumber(e.target.value);
}, []);

const onInsert =  useCallback(e => {
    const nextList = list.concat(parseInt(number));
    setlist(nextList);
    setNumber('');
    inputEl.current.focus();
}, [list,number]);

const avg = useMemo(() => getAverage(list),[list]);
    return (
        <>
        <br />
         <input value={number} onChange={onChange} ref={inputEl} />
         <button onClick={onInsert}>등록</button>
         <ul>
            {list.map((value,index) => (
                <li key={index}>{value}</li>
            ))}
         </ul>
         <div>
            <p>평균값: {avg}</p>
         </div>
        </>
    );
};

export default Average;