import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';
import GrandSonBox from './component/GrandSonBox';
//import { useState } from 'react';

function App() {

//  const [count, setCount] = useState(0);
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({type: "INCREMENT", payload:{num:5}})
//    setCount(count +1);
  }

  const decrease = () => {
    dispatch({type: "DECREMENT", payload:{num:2}})
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>증가!</button>
      <button onClick={decrease}>감소!</button>
      <Box />
      <GrandSonBox />
    </div>
  );
}

export default App;
