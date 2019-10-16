import randomNumber from '../randomNumber';
import play from '..';

const REGULATIONS = 'Find the greatest common divisor of given numbers.';

const gameData = () => {
  const gcd = (operand1, operand2) => {
    if (!operand2) {
      return operand1;
    }

    return gcd(operand2, operand1 % operand2);
  };

  const operand1 = randomNumber(0, 100);
  const operand2 = randomNumber(0, 100);
  const question = `${operand1} ${operand2}`;
  const trueAnswer = gcd(operand1, operand2);
  const data = [String(trueAnswer), question];

  return data;
};

export default () => play(REGULATIONS, gameData);
