// A placeholder is used to reserve space for content that soon will appear in a layout.
import React, { FunctionComponent } from 'react';

export const Placeholder: FunctionComponent<{
  text: string;
  image?: HTMLButtonElement;
}> = ({ text = 'Placeholder', image }) => (
  <div>
    <p>text}</p>
    {image}
  </div>
);
