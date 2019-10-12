export default () => {
  const MAX_NUMBER = 100;
  const MIN_NUMBER = 1;

  return Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER) + MIN_NUMBER);
};
