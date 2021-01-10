import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = (props) => {

  const [count, setCount] = useState(0);

  const handlePlusClick = () => {
    setCount((prevCount) =>  prevCount + 1);
  };

  const handleMinusClick = () => {
    if (count !== 0) {
      setCount((prevCount) =>  prevCount - 1);
    }
  };

  return (
    <div className="counter">
      <button onClick={handleMinusClick}>-</button>
      <p>{count}</p>
      <button onClick={handlePlusClick}>+</button>
    </div>
  );
}

export default Counter;