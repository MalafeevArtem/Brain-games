import readlineSync from 'readline-sync';
import randomNumber from '../randomNumber';
import play from '..';

const REGULATIONS = 'What is the result of the expression?';

const randomOperation = () => {
  const number = randomNumber(0, 3);
  if (number === 0) {
    return '+';
  }
  if (number === 1) {
    return '-';
  }
  return '*';
};

const valueСalculation = (operand1, operand2, operation) => {
  if (operation === '+') {
    return operand1 + operand2;
  }
  if (operation === '-') {
    return operand1 - operand2;
  }
  return operand1 * operand2;
};

const gameData = () => {
  const operand1 = randomNumber(0, 100);
  const operand2 = randomNumber(0, 100);
  const operation = randomOperation();
  const trueAnswer = valueСalculation(operand1, operand2, operation);
  console.log(`Question: ${operand1} ${operation} ${operand2}`);
  const askAnswerUser = Number(readlineSync.question('Your answer: '));
  const data = [trueAnswer, askAnswerUser];

  return data;
};

export default () => play(REGULATIONS, gameData);
