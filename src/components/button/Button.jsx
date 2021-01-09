import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ color, size, className }) => {

  const styles = {
    color,
    // fontSize: Button.sizes[size],
    className: Button.classNames[className]
  };

  return (
    <button className={className} style={styles}>
      Click me
    </button>
  );
}

Button.propTypes = {
  /**
   * Hex color
   */
  color: PropTypes.string,
  /**
   * Width size
   * */
  size: PropTypes.string,
  // size: PropTypes.oneOf(['small', 'normal', 'large']),
  className: PropTypes.oneOf(['primary', 'secondary'])
};

Button.defaultProps = {
  color: '#333',
  size: '20px',
  className: 'primary'
};

// Button.sizes = {
//   small: '10px',
//   normal: '14px',
//   large: '18px'
// };

Button.classNames = {
  primary: 'primary',
  secondary: 'secondary'
};

export default Button;