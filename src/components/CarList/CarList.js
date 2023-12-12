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
  const filter = useSelector(state => state.carFilter.filters);

  const filteredCatalog = catalog.filter(car => {
    if (!filter) return true;

    if (filter.carBrand && car.make !== filter.carBrand) {
      return false;
    }

    if (filter.price) {
      const carPrice = parseInt(car.rentalPrice.replace('$', ''), 10);
      if (carPrice > filter.price) {
        return false;
      }
    }

    return true;
  });

  useEffect(() => {
    dispatch(fetchAdvert({ limit: loadedItems }));
  }, [dispatch, loadedItems]);

  const handleLoadMore = () => {
    setLoadedItems(loadedItems + itemsPerPage);
  };

  return (
    <div>
      <List>
        {filteredCatalog.slice(0, loadedItems).map((car, index) => (
          <li key={`${car.id}=${index}`}>
            <CarCard car={car} />
          </li>
        ))}
      </List>

      {loadedItems < filteredCatalog.length && (
        <div style={{ display: 'flex', marginBottom: '50px' }}>
          <LoadButton onClick={handleLoadMore}>Load More</LoadButton>
        </div>
      )}
    </div>
  );
};

export default CarList;
