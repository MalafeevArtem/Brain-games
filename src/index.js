import readlineSync from 'readline-sync';

export default (regulations, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(regulations);
  const askName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${askName}!\n`);
  const COUNT = 2;

  const iteration = (count) => {
    const DATA = gameData();

    if (count === 0) {
      console.log('Correct!');
      console.log(`Congratulations, ${askName}`);
      return;
    }

    if (DATA[0] === DATA[1]) {
      console.log('Correct!');
      console.log(count);
      iteration(count - 1);
    } else {
      console.log(`'${DATA[1]}' is wrong answer ;(. Correct answer was '${DATA[0]}')`);
      console.log(`Let's try again, ${askName}`);
    }
  };

  iteration(COUNT);
};


