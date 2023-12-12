import React, { useEffect } from 'react';
import { Container } from './AppLayout.styled';
import { Outlet } from 'react-router-dom';
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

      <div>
        <Outlet />
      </div>
    </Container>
  );
};

export default AppLayout;
