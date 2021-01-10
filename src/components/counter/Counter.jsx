import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = (props) => {

  const [count, setCount] = useState(0);

  const handleAddClick = () => {
    setCount((prevCount) =>  prevCount + 1);
  };

  const handleRemoveClick = () => {
    if (count === 0) {
      return
    } else {
      setCount((prevCount) =>  prevCount - 1);
    }
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleAddClick}>+</button>
      <button onClick={handleRemoveClick}>-</button>
    </div>
  );
}

export default Counter;