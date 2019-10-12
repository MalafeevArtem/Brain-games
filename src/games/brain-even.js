import readlineSync from 'readline-sync';
import randomNumber from '../randomNumber';
import play from '..';

const REGULATIONS = 'Answer "yes" if the number is even, otherwise answer "no".';
const gameData = () => {
  const number = randomNumber();
  const isEven = (num) => num % 2 === 0;
  const trueAnswer = isEven(number) ? 'yes' : 'no';
  console.log(`Question: ${number}`);
  const askAnswerUser = readlineSync.question('Your answer: ');

  const DATA = [trueAnswer, askAnswerUser];

  return DATA;
};

export default () => play(REGULATIONS, gameData);
