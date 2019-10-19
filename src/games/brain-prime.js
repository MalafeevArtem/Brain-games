import randomNumber from '../randomNumber';
import play from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (operand) => {
  if (operand < 2) {
    return false;
  }

  for (let index = 2; index < operand; index += 1) {
    if (operand % index === 0) return false;
  }
  return true;
};

const gameData = () => {
  const question = randomNumber(1, 100);
  const trueAnswer = (isPrime(question)) ? 'yes' : 'no';
  const data = [trueAnswer, question];

  return data;
};

export default () => play(description, gameData);
