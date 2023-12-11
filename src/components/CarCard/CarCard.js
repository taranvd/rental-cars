import { useState } from 'react';

import { splitAddressProperties } from 'utils/splitAddressProperties';
import {
  Desc,
  Image,
  StyledButton,
  StyledHeart,
  Title,
} from './CarCard.styled';
import { truncateFunctionality } from 'utils/truncateFunctionality';
import { Modal, Button, ButtonToolbar, Placeholder } from 'rsuite';

const CarCard = ({ car }) => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
  } = car;
  const { city, country } = splitAddressProperties(address);

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
          onClick={() => setActive(!active)}
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

      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Placeholder.Paragraph />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CarCard;
