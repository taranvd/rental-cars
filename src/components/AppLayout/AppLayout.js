import React from 'react';
import { Container, Header } from './AppLayout.styled';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <Container>
      Contaiener
      <Header></Header>
      <div>
        <Outlet />
      </div>
    </Container>
  );
};

export default AppLayout;
