import styled from 'styled-components';
import { Input, InputGroup } from 'rsuite';

export const RangeInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledInputGroup = styled(InputGroup)`
  border: none !important;
  outline: none !important;
`;

export const StyledInput = styled(Input)`
  max-width: 160px;
  border-radius: ${({ first }) =>
    first ? '14px 0px 0px 14px' : '0px 14px 14px 0px'} !important;
  padding: 14px 24px !important;
  background-color: #f7f7fb;
  cursor: pointer;
  font-size: 18px;
  color: #121417;
  &::placeholder {
    color: ${({ isFirst }) => (isFirst ? '#121417' : '#000')};
  }
`;

export const Divider = styled.div`
  width: 2px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.1);
`;
