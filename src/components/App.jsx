import HomePage from 'pages/HomePage';
import AppLayout from './AppLayout/AppLayout';
import GlobalStyle from './GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import CatalogPage from 'pages/CatalogPage';
import FavoritePage from 'pages/FavoritePage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorite" element={<FavoritePage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
