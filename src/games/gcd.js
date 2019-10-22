import randomNumber from '../randomNumber';
import play from '..';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (operand1, operand2) => {
  if (!operand2) {
    return operand1;
  }

  return findGcd(operand2, operand1 % operand2);
};

const getGameData = () => {
  const operand1 = randomNumber(1, 100);
  const operand2 = randomNumber(1, 100);
  const question = `${operand1} ${operand2}`;
  const trueAnswer = findGcd(operand1, operand2);
  const data = [String(trueAnswer), question];

  return data;
};

export default () => play(description, getGameData);
