import React, { FunctionComponent } from 'react';

const Logo: FunctionComponent<{ extraStyle?: object; logoId?: string }> = ({
  extraStyle,
  logoId
}) => (
  <img
    src="/images/logo.png"
    id={logoId}
    data-testid={logoId}
    style={extraStyle}
    alt="Fake Car Company"
  />
);

export default Logo;
