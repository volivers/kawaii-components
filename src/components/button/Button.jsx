import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ color, size, className, disabled }) => {

  const styles = {
    color,
    fontSize: Button.sizes[size],
    className: Button.classNames[className],
    disabled
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
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  className: PropTypes.oneOf(['flat', 'outline']),
  /**
   * State
   */
  disabled: PropTypes.bool
};

Button.defaultProps = {
  color: '#fff',
  size: 'large',
  className: 'flat',
  disabled: false
};

Button.sizes = {
  small: '12px',
  normal: '18px',
  large: '24px'
};

Button.classNames = {
  flat: 'flat',
  outline: 'outline'
};

export default Button;