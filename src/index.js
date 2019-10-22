import readlineSync from 'readline-sync';

const attemptsCount = 3;

export default (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const askName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${askName}!\n`);

  const iteration = (count) => {
    const [trueAnswer, question] = getGameData();

    if (count === 0) {
      console.log(`Congratulations, ${askName}`);
      return;
    }

    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === trueAnswer) {
      console.log('Correct!');
      iteration(count - 1);
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}')`);
      console.log(`Let's try again, ${askName}`);
    }
  };

  iteration(attemptsCount);
};
