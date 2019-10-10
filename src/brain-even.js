import readlineSync from 'readline-sync';
import greetUser from './index';

export default () => {
  const MAX_NUMBER = 100;
  const MIN_NUMBER = 1;
  const COUNT = 3;

  greetUser();
  const askName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${askName}!\n`);

  const play = (max, min, count) => {
    if (count === 0) {
      console.log(`Congratulations, ${askName}`);
      return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    const isEven = (number) => number % 2 === 0;
    const trueAnswer = isEven(randomNumber) ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const askAnswerUser = readlineSync.question('Your answer: ');

    if (trueAnswer === askAnswerUser) {
      console.log('Correct!');
      play(MAX_NUMBER, MIN_NUMBER, count - 1);
    } else {
      console.log(`'${askAnswerUser}' is wrong answer ;(. Correct answer was '${trueAnswer}')`);
      console.log(`Let's try again, ${askName}`);
    }
  };

  play(MAX_NUMBER, MIN_NUMBER, COUNT);
};
