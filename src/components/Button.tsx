// A standard button.
import React, { FunctionComponent } from 'react';

import './Button.css';

interface ButtonProps {
  extraClass: string;
  isDisabled: boolean;
}
const Button: FunctionComponent = ({
  extraClass = '',
  children,
  click,
  isDisabled = false
}) => (
  <button
    className={`custom-button ${extraClass}`}
    onClick={click}
    disabled={isDisabled}
  >
    {children}
  </button>
);

export default Button;
