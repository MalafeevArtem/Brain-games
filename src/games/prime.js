import randomNumber from '../randomNumber';
import play from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (value) => {
  if (value < 2) {
    return false;
  }

  for (let index = 2; index <= value / 2; index += 1) {
    if (value % index === 0) return false;
  }
  return true;
};

const getGameData = () => {
  const question = randomNumber(1, 100);
  const trueAnswer = (isPrime(question)) ? 'yes' : 'no';
  const data = [trueAnswer, question];

  return data;
};

export default () => play(description, getGameData);
