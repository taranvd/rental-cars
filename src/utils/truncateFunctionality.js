export const truncateFunctionality = functionality => {
  const words = functionality.split(' ');
  if (words.length > 3) {
    return words.slice(0, 3).join(' ');
  }
  return functionality;
};
