export const splitAddressProperties = address => {
  const parts = address.split(',');
  const city = parts[parts.length - 2];
  const country = parts[parts.length - 1];
  return {
    city: city,
    country: country,
  };
};
