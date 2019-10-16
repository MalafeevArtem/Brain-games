import readlineSync from 'readline-sync';

export default (regulations, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(regulations);
  const askName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${askName}!\n`);
  const attemptsCount = 3;

  const iteration = (count) => {
    const [trueAnswer, question] = gameData();

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
