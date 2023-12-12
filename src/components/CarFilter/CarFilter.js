import { useState } from 'react';
import InputMileage from 'components/InputMileage/InputMileage';
import {
  DropdownLabel,
  DropdownStyled,
  FormStyled,
  StyledButton,
} from './CarFilter.styled';
import { resetFilter, setFilter } from '../../redux/carFilterSlice';
import makes from '../../data/makes.json';
import { Dropdown } from 'rsuite';

import 'rsuite/dist/rsuite.min.css';
import { useDispatch } from 'react-redux';
const filterBrand = makes.map(make => ({
  brand: make,
}));

const priceOptions = Array.from({ length: 10 }, (_, index) => (index + 1) * 10);

const CarFilter = () => {
  const [carBrand, setCarBrand] = useState('');
  const [price, setPrice] = useState('');
  const [mileage, setMileage] = useState({ from: 0, to: 0 });
  const [dropdownFromTitle, setDropdownFromTitle] = useState('Enter the text');
  const [dropdownToTitle, setDropdownToTitle] = useState('To $');
  const dispatch = useDispatch();

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

    const filters = {
      carBrand,
      price,
      mileage,
    };

    dispatch(setFilter(filters));
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
            activeKey={filterBrand}
          >
            {filterBrand.map((make, index) => (
              <Dropdown.Item key={index} eventKey={make.brand}>
                {make.brand}
              </Dropdown.Item>
            ))}
          </DropdownStyled>
        </div>

        <div>
          <DropdownLabel>Price/ 1 hour</DropdownLabel>
          <DropdownStyled
            title={dropdownToTitle}
            size="lg"
            onSelect={handlePriceChange}
            activeKey={priceOptions}
          >
            {priceOptions.map((option, index) => (
              <Dropdown.Item key={index} eventKey={option}>
                {`$${option}`}
              </Dropdown.Item>
            ))}
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
