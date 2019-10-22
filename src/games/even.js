import randomNumber from '../randomNumber';
import play from '..';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const question = randomNumber(0, 100);
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  const data = [trueAnswer, question];

  return data;
};

export default () => play(description, getGameData);
