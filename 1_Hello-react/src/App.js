import './App.css';
import { Component, Fragment } from 'react';

// function App() {
//   const name = '리액트'
//   const name2 = undefined;
//   const style = {
//     backgroundColor: 'black',
//     color: 'aqua',
//     fontSize: '48px',
//     fontWeight: 'bold',
//     padding: 16
//   }
//   return (
//     <Fragment>
//       {
//         name === '리액트' && 
//       <div style={style}>{name} 안녕~!!</div> 
//       }
//       <h2>리액트야 잘 작동하지?</h2> 
//       { name2 || '값이 undefined입니다.'}

//     </Fragment>
//   );
// }


class App extends Component {
  render() {
    const name = '리액트';
    return <div>{name}</div>;
  }
}
export default App;
