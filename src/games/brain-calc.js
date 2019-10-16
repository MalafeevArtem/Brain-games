import randomNumber from '../randomNumber';
import play from '..';

const regulations = 'What is the result of the expression?';
const operator = ['+', '-', '*'];

const valueСalculation = (operand1, operand2, operation) => {
  switch (operation) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    default:
      return operand1 * operand2;
  }
};

const gameData = () => {
  const operand1 = randomNumber(0, 100);
  const operand2 = randomNumber(0, 100);
  const operation = randomNumber(0, operator.length - 1);
  const operationSign = operator[operation];
  const trueAnswer = valueСalculation(operand1, operand2, operationSign);
  const question = `${operand1} ${operationSign} ${operand2}`;
  const data = [String(trueAnswer), question];

  return data;
};

export default () => play(regulations, gameData);
