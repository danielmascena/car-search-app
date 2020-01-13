// Default Select.
import React, { useState, useRef, FunctionComponent } from 'react';
import { wordCapitalize } from '../helpers';
import './Select.css';

interface SelectProps {
  options: string[];
  labelOption: string;
  labelByIds?: string;
}

const Select: FunctionComponent = ({
  options = [],
  onChange,
  labelOption,
  labelByIds
}) => {
  const [selected, setSelected] = useState<number>(0);
  //const selectRef = useRef();
  const handleSelectClick = (event: React.ClickEvent<HTMLDivElement>) => {
    event.target.classList.toggle('open');
  };
  const handleOptionClick = (event: React.ClickEvent<HTMLDivElement>) => {
    const option = event.target;
    const index = Number.parseInt(option.dataset.value, 10);
    const value = options[index];
    setSelected(index);
    //onChange(index > 0 ? value : null);
    onChange(index);
    //TODO: change for useRef
    const parent = option.parentElement;
    parent.classList.toggle('open');
    parent.setAttribute('data-label', wordCapitalize(value));
    //selectRef.current.classList.toggle('open');
    //selectRef.current.setAttribute('data-label', wordCapitalize(value));
  };
  const optList = [];
  for (let i = 0; i < options.length; i++) {
    const isSelected = selected === i;
    optList.push(
      <div
        className={`list-item ${isSelected ? 'active' : ''}`}
        onClick={handleOptionClick}
        role="option"
        key={i}
        data-value={i}
        aria-selected={isSelected}
      >
        {wordCapitalize(options[i])}
      </div>
    );
  }
  return (
    <div
      className="custom-select"
      data-label={labelOption}
      onClick={handleSelectClick}
      role="listbox"
      aria-labelledby={labelByIds}
      //ref={selectRef}
    >
      {optList}
    </div>
  );
};

export default Select;
