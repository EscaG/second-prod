import React, { useState } from 'react';
import classes from './Counter.module.scss';


export function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(value => value + 1);
  }

  return (
    <div className={classes.counter}>
      <h1>{count}</h1>
      <button className={classes.button} onClick={increment}>increment</button>
    </div>
  );
}

