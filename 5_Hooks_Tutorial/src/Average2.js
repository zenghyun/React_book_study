import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (list) => {
  console.log("평균 값 계산중...");
  if (list.length === 0) return 0;
  const sum = list.reduce((pre, cur) => pre + cur);
  return sum / list.length;
};

const Average2 = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number, 10));
    setList(nextList);
    setNumber("");
    inputEl.current.focus();
  }, [list, number]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <>
      <div>
        <input type="number" onChange={onChange} value={number} ref={inputEl} />
        <button onClick={onInsert}>등록</button>
      </div>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균 값: {avg}</b>
      </div>
    </>
  );
};

export default Average2;
