import readlineSync from 'readline-sync';
import randomNumber from '../randomNumber';
import play from '..';

const REGULATIONS = 'Find the greatest common divisor of given numbers.';
const MIN = 0;
const MAX = 100;

const gameData = () => {
  const gcd = (operand1, operand2) => {
    if (!operand2) {
      return operand1;
    }

    return gcd(operand2, operand1 % operand2);
  };

  const operand1 = randomNumber(MIN, MAX);
  const operand2 = randomNumber(MIN, MAX);
  console.log(`Question: ${operand1} ${operand2}`);
  const trueAnswer = gcd(operand1, operand2);
  const askAnswerUser = Number(readlineSync.question('Your answer: '));
  const DATA = [trueAnswer, askAnswerUser];

  return DATA;
};

export default () => play(REGULATIONS, gameData);
