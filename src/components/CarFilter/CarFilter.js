import { useState } from 'react';
import {
  DropdownLabel,
  DropdownStyled,
  FormStyled,
  StyledButton,
} from './CarFilter.styled';
import { Dropdown } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

import InputMileage from 'components/InputMileage/InputMileage';

const CarFilter = () => {
  const [carBrand, setCarBrand] = useState('');
  const [price, setPrice] = useState('');
  const [mileage, setMileage] = useState({ from: null, to: null });
  const [dropdownFromTitle, setDropdownFromTitle] = useState('Enter the text');
  const [dropdownToTitle, setDropdownToTitle] = useState('To $');

  const handleCarBrandChange = value => {
    setCarBrand(value);
    setDropdownFromTitle(value);
  };

  const handlePriceChange = value => {
    setPrice(value);
    setDropdownToTitle(value);
  };

  const handleMileageChange = (from, to) => {
    setMileage({ from, to });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const formData = {
      carBrand,
      price,
      mileage,
    };

    console.log(formData); // або відправте дані на сервер, викличте функцію тощо.
  };

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <div>
          <DropdownLabel>Car brand</DropdownLabel>
          <DropdownStyled
            title={dropdownFromTitle}
            size="lg"
            onSelect={handleCarBrandChange}
            activeKey={carBrand}
          >
            <Dropdown.Item eventKey="New File">New File</Dropdown.Item>
            <Dropdown.Item eventKey="Download As...">
              Download As...
            </Dropdown.Item>
            <Dropdown.Item eventKey="Export PDF">Export PDF</Dropdown.Item>
            <Dropdown.Item eventKey="Export HTML">Export HTML</Dropdown.Item>
            <Dropdown.Item eventKey="Settings">Settings</Dropdown.Item>
            <Dropdown.Item eventKey="About">About</Dropdown.Item>
            <Dropdown.Item eventKey="About">About</Dropdown.Item>
            <Dropdown.Item eventKey="About">About</Dropdown.Item>
            <Dropdown.Item eventKey="About">About</Dropdown.Item>
            <Dropdown.Item eventKey="About">About</Dropdown.Item>
            <Dropdown.Item eventKey="About">About</Dropdown.Item>
          </DropdownStyled>
        </div>

        <div>
          <DropdownLabel>Price/ 1 hour</DropdownLabel>
          <DropdownStyled
            title={dropdownToTitle}
            size="lg"
            onSelect={handlePriceChange}
          >
            <Dropdown.Item eventKey="New File">New File</Dropdown.Item>
            <Dropdown.Item eventKey="Download As...">
              Download As...
            </Dropdown.Item>
            <Dropdown.Item eventKey="Export PDF">Export PDF</Dropdown.Item>
            <Dropdown.Item eventKey="Export HTML">Export HTML</Dropdown.Item>
            <Dropdown.Item eventKey="Settings">Settings</Dropdown.Item>
            <Dropdown.Item eventKey="About">About</Dropdown.Item>
          </DropdownStyled>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '18px' }}>
          <div>
            <DropdownLabel>Сar mileage / km</DropdownLabel>
            <InputMileage onChange={handleMileageChange} />
          </div>
          <StyledButton type="submit" appearance="primary">
            Search
          </StyledButton>
        </div>
      </FormStyled>
    </>
  );
};

export default CarFilter;
