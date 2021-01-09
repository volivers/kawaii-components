import React, { useState , useEffect } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = (props) => {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) =>  prevCount + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default Counter;