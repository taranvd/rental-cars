import React, { useEffect } from 'react';
import { Container } from './AppLayout.styled';
import { Outlet } from 'react-router-dom';
import CarFilter from 'components/CarFilter/CarFilter';
import Header from 'components/Header/Header';
import { useDispatch } from 'react-redux';
import { fetchAdvert } from '../../redux/operations';

const AppLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdvert());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <CarFilter />

      <div>
        <Outlet />
      </div>
    </Container>
  );
};

export default AppLayout;
