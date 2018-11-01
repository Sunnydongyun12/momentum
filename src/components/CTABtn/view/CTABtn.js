import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/CTABtn.css';
import { preventFocus } from 'lib/accessibilityUtils';

export const CTABtn = ({ className, onClick, children, ...rest }) => {
  const buttonClasses = classNames('CTABtn', className);

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      onMouseDown={preventFocus}
      {...rest}
    >
      {children}
    </button>
  );
};

CTABtn.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
};

export default CTABtn;
