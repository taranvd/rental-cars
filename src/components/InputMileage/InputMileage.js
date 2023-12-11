import React, { useState } from 'react';
import {
  RangeInputWrapper,
  StyledInputGroup,
  StyledInput,
  Divider,
} from './InputMileage.styled';

const InputMileage = ({ onChange }) => {
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');

  const handleFromChange = value => {
    setFromValue(value);
    onChange(value, toValue);
  };

  const handleToChange = value => {
    setToValue(value);
    onChange(fromValue, value);
  };

  return (
    <div>
      <RangeInputWrapper>
        <StyledInputGroup>
          <StyledInput
            id="from"
            value={fromValue}
            placeholder="From"
            onChange={handleFromChange}
            first="true"
          />
          <Divider />
          <StyledInput
            id="to"
            value={toValue}
            placeholder="To"
            onChange={handleToChange}
          />
        </StyledInputGroup>
      </RangeInputWrapper>
    </div>
  );
};

export default InputMileage;
