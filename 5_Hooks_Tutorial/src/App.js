import {useState} from 'react';

import Counter from './Counter';
import Counter2 from './Counter2';
import Info from './Info';
import './App.css';
import Average from './Average';

function App() {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible(!visible);
  };
  return (
  <>
  <button onClick={onClick}>
    { visible ? '보이기' : '숨기기'}
  </button>
    <Counter />
    {!visible && <Info />} 
    <Counter2 />
    <Average />
  </>
  );
}

export default App;
