import { useState } from 'react';
import '../Counter/counter.css'; 
import { CounterView } from './counterView';

export function Counter() {
  const [count, setCount] = useState(100)

  // function increment(message) {
  //   count = count + 1;
  //   console.log(count)

  //   return (() => {
  //     console.log(message)
  //   })
  // }

  function increment(inc) {
    setCount(count + inc)
  }

  return (
    <div className="container-counter">
      <CounterView counter={count} />
      <button onClick={() => increment(+1)}>
        Increment
      </button>
      <button onClick={() => increment(-1)}>
        Decrement
      </button>
    </div>
  )
}