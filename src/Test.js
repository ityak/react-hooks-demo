import React, { useReducer, useState, useEffect } from 'react';
import * as reacts from 'react';
// import useFetch from './hooks/useFetch';

function countReducer(reduxState, action) {
  switch (action.type) {
    case 'reset':
      return { count: 0 };
    case 'increment':
      return { count: reduxState.count + 1 };
    case 'decrement':
      return { count: reduxState.count - 1 };
    default:
      return reduxState;
  }
}
console.log(reacts.createContext());
export default function Counter(props) {
  const [state, setAge] = useState({ age: 18, size: 1 });
  const [reduxState, dispatch] = useReducer(countReducer, { count: 0 });
  // const [isLoading, response, error] = useFetch('http://baidu.com',[111])

  useEffect(() => {
    console.log('组件加载后....');
    return () => {
      console.log(props.swtich);
      console.log('组件卸载....');
    };
  }, [state.age, props]);

  return (
    <div>
      当前数字为: {reduxState.count} , 当前age为: {state.age}, 当前size为:{' '}
      {state.size}
      <hr />
      <button onClick={() => dispatch({ type: 'reset' })}>重置</button>
      <button onClick={() => dispatch({ type: 'increment' })}>增加</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>减少</button>
      <button onClick={() => setAge({ ...state, age: state.age + 1 })}>
        增加age
      </button>
      <button onClick={() => setAge({ ...state, size: state.size + 1 })}>
        增加size
      </button>
    </div>
  );
}
