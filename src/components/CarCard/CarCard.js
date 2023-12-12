import { useState } from 'react';

import { splitAddressProperties } from 'utils/splitAddressProperties';
import {
  Desc,
  Image,
  ModalButton,
  StyledButton,
  StyledHeart,
  Title,
  Footer,
  ModalImage,
  StyledModal,
  ModalDesc,
  ModalDescr,
  ModalSubtitle,
  ModalTextElement,
  ModalNumberElement,
  ModalDescFunc,
} from './CarCard.styled';
import { truncateFunctionality } from 'utils/truncateFunctionality';
import { Modal } from 'rsuite';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from '../../redux/favoriteSlice';

const CarCard = ({ car, onRemoveFromFavorites }) => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);

  const isFavorite = favorites.some(favoriteCar => favoriteCar.id === car.id);

  const {
    img,
    model,
    make,
    year,
    rentalPrice,
    address,
    type,
    id,
    rentalCompany,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
    mileage,
  } = car;
  const { city, country } = splitAddressProperties(address);
  const conditions = rentalConditions.split('\n');
  const minAge = conditions[0].split(':');

  return (
    <>
      <div style={{ position: 'relative' }}>
        <StyledHeart
          width={18}
          height={18}
          active={active}
          activeColor="rgba(52, 112, 255, 1)"
          inactiveColor="#fff"
          strokeWidth={60}
          onClick={() => {
            setActive(!active);
            if (!isFavorite) {
              dispatch(addToFavorites(car));
            } else {
              onRemoveFromFavorites();
            }
          }}
        />
        <Image
          src={img}
          alt={model}
          style={{ width: '274px', height: '268px', objectFit: 'cover' }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Title>
          {make} <span style={{ color: '#3470FF' }}>{model}</span>, {year}
        </Title>
        <Title> {rentalPrice}</Title>
      </div>
      <div style={{ maxHeight: '40px', maxWidth: '270px' }}>
        <Desc>
          {city} | {country} | {rentalCompany} | {type} | {model} | {id} |{' '}
          {truncateFunctionality(functionalities[0])}
        </Desc>
      </div>
      <StyledButton type="button" onClick={handleOpen}>
        Learn more
      </StyledButton>

      <StyledModal open={open} onClose={handleClose} size={551}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <ModalImage src={img} alt="" />
          </div>
          <Title>
            {make} <span style={{ color: '#3470FF' }}>{model}</span>, {year}
          </Title>
          <ModalDesc>
            {city} | {country} | {type} | id:{id} | Year: {year} | {''}
            Type:{type}
          </ModalDesc>
          <ModalDesc>
            Fuel Consumption:{fuelConsumption} | Engine Size:
            {engineSize}
          </ModalDesc>
          <ModalDescr>{description}</ModalDescr>

          <div style={{ marginBottom: '24px' }}>
            <ModalSubtitle>Accessories and functionalities:</ModalSubtitle>
            <ModalDescFunc>{functionalities.join(' | ')}</ModalDescFunc>
            <ModalDescFunc>{accessories.join(' | ')}</ModalDescFunc>
          </div>

          <div>
            <ModalSubtitle> Rental Conditions: </ModalSubtitle>
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '3px',
                  marginBottom: '8px',
                }}
              >
                <ModalTextElement>
                  {minAge[0]}:{' '}
                  <ModalNumberElement>{minAge[1]}</ModalNumberElement>
                </ModalTextElement>

                <ModalTextElement>{conditions[1]}</ModalTextElement>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '3px',
                }}
              >
                <ModalTextElement>{conditions[2]}</ModalTextElement>
                <ModalTextElement>
                  Milleage:{' '}
                  <ModalNumberElement>
                    {mileage.toLocaleString('en-US')}
                  </ModalNumberElement>
                </ModalTextElement>
                <ModalTextElement>
                  Price:
                  <ModalNumberElement>{rentalPrice}</ModalNumberElement>
                </ModalTextElement>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Footer>
          <ModalButton onClick={handleClose} appearance="primary">
            Rental Car
          </ModalButton>
        </Footer>
      </StyledModal>
    </>
  );
};

export default CarCard;
