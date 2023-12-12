import CarCard from 'components/CarCard/CarCard';
import { List } from 'components/CarList/CarList.styled';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/favoriteSlice';

const FavoritePage = () => {
  const car = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    const initialFavorites =
      JSON.parse(localStorage.getItem('favorites')) || [];
    initialFavorites.forEach(car => {
      dispatch(addToFavorites(car));
    });
  }, [dispatch]);

  const handleRemoveFromFavorites = carId => {
    dispatch(removeFromFavorites(carId));
  };
  return (
    <>
      <List>
        {car.length > 0 ? (
          car.map((car, index) => (
            <li key={`${car.id}-${index}`}>
              <CarCard
                car={car}
                onRemoveFromFavorites={() => handleRemoveFromFavorites(car.id)}
              />
            </li>
          ))
        ) : (
          <div style={{ margin: 'auto' }}>
            <p> No favorite cars yet. Add some!</p>
          </div>
        )}
      </List>
    </>
  );
};

export default FavoritePage;
