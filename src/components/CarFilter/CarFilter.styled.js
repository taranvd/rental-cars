import styled from 'styled-components';
import { Dropdown, Button } from 'rsuite';

export const FormStyled = styled.form`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 18px;
  max-width: 859px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  padding: 0 15px;
  color: #121417;
`;

export const DropdownLabel = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.2;
  color: #8a8a89;
`;
export const DropdownStyled = styled(Dropdown)`
  .rs-dropdown-menu {
    width: 100%;
    max-height: 272px;
    padding: 5px 10px;
    border-radius: 14px;
    border: 1px solid rgba(18, 20, 23, 0.05);
    background: #fff;
    box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

    overflow-y: scroll;

    &::-webkit-scrollbar-thumb {
      background: rgba(18, 20, 23, 0.05);
    }
  }

  .rs-dropdown-item {
    font-size: 16px;
    line-height: 1.2;
    color: rgba(18, 20, 23, 0.2);
  }

  .rs-btn-lg {
    font-size: 18px;
    color: #121417;
    margin-bottom: 4px;
    border-radius: 14px;
    padding: 14px 18px;
  }

  .rs-dropdown-toggle.rs-btn-lg .rs-dropdown-toggle-caret {
    top: 14px;
  }

  .rs-dropdown-toggle.rs-btn-lg {
    padding-right: 100px !important;
  }
`;

export const StyledButton = styled(Button)`
  height: 52px !important;
  padding: 14px 44px;
  border-radius: 12px !important;
  background: #3470ff;
`;
