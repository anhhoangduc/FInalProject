import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [state, setState] = useState({
    student :['Huyen', 'Hoa', 'Hung', 'Long'],
    count: 0
  });

  const previousElement= async () =>{
    await setState({
      ...state,
      count: state.count - 1
    });
    if(state.count <= 0)
      setState({
        ...state,
        count: 0
      })
  };
  const nextElement= async () =>{
    await setState({
      ...state,
      count: state.count + 1
    });
    if(state.count >=3)
      setState({
        ...state,
        count: 3
      })
  };
  return (
    <div className="App">
      <p>学生一覧： [Huyen, Hoa, Hung, Long]</p>
      <p>位置：{state.count + 1}</p>
      <p>名前：{state.student[state.count]}</p>
      <button onClick={() => nextElement()}>次に</button>
      <button onClick={() => previousElement()}>前に</button>
    </div>
  );
}

export default App;
