import readlineSync from 'readline-sync';

export default (regulations, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(regulations);
  const askName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${askName}!\n`);
  const COUNT = 3;

  const iteration = (count) => {
    const data = gameData();

    if (count === 0) {
      console.log(`Congratulations, ${askName}`);
      return;
    }

    console.log(`Question: ${data[1]}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === data[0]) {
      console.log('Correct!');
      iteration(count - 1);
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${data[0]}')`);
      console.log(`Let's try again, ${askName}`);
    }
  };

  iteration(COUNT);
};
