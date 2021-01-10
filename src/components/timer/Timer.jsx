import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Timer.css';

const Timer = (props) => {
  
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(setTime(new Date()), 1000);

    // Effect Cleanup Function
    return () => clearInterval(intervalId);
  }, [time]);

  return (
    <h1>{time.toLocaleTimeString()}</h1>
  );
}

export default Timer;
