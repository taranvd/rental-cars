// CarList.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdverts } from '../../redux/selectors';
import CarCard from '../CarCard/CarCard';
import { List, LoadButton } from './CarList.styled';
import { fetchAdvert } from '../../redux/operations';

const CarList = () => {
  const dispatch = useDispatch();
  const catalog = useSelector(getAdverts);
  const itemsPerPage = 12;
  const [loadedItems, setLoadedItems] = useState(itemsPerPage);

  useEffect(() => {
    dispatch(fetchAdvert({ limit: loadedItems }));
  }, [dispatch, loadedItems]);

  const handleLoadMore = () => {
    setLoadedItems(loadedItems + itemsPerPage);
  };

  return (
    <div>
      <List>
        {catalog.slice(0, loadedItems).map((car, index) => (
          <li key={`${car.id}=${index}`}>
            <CarCard car={car} />
          </li>
        ))}
      </List>

      {loadedItems < catalog.length && (
        <div style={{ display: 'flex', marginBottom: '50px' }}>
          <LoadButton onClick={handleLoadMore}>Load More</LoadButton>
        </div>
      )}
    </div>
  );
};

export default CarList;
