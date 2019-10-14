import readlineSync from 'readline-sync';
import randomNumber from '../randomNumber';
import play from '..';

const REGULATION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (operand) => {
  for (let index = 2; index < operand; index += 1) {
    if (operand % index === 0) return false;
  }
  return operand > 1;
};

const gameData = () => {
  const operand = randomNumber(1, 100);
  const prime = isPrime(operand);
  const trueAnswer = (prime === true) ? 'yes' : 'no';
  console.log(`Question ${operand}`);
  const askAnswerUser = readlineSync.question('Your answer: ');
  const data = [trueAnswer, askAnswerUser];

  return data;
};

export default () => play(REGULATION, gameData);
