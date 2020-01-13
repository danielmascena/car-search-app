import React, { FunctionComponent } from 'react';

const Label: FunctionComponent<{ text: string; idFor?: string }> = ({
  text = '',
  idFor
}) => (
  <label style={{ marginLeft: '2px' }} id={idFor}>
    {text}
  </label>
);

export default Label;
