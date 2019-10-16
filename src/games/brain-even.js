import readlineSync from 'readline-sync';
import randomNumber from '../randomNumber';
import play from '..';

const REGULATIONS = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameData = () => {
  const question = randomNumber(0, 100);
  const isEven = (number) => number % 2 === 0;
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  console.log(`Question: ${number}`);
  const askAnswerUser = readlineSync.question('Your answer: ');

  const data = [trueAnswer, askAnswerUser];

  return data;
};

export default () => play(REGULATIONS, gameData);
