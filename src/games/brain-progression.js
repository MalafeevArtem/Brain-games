import randomNumber from '../randomNumber';
import play from '..';

const regulations = 'What number is missing in the progression?';
const progressionLength = 10;

const createProgression = (start, step) => {
  const progression = [];

  const iteration = (count) => {
    if (count === progressionLength) {
      return progression;
    }
    prog.push(start + step * count);
    return iteration(count + 1);
  };

  return iteration(0);
};

const createQuestion = (progressions, pass) => {
  let question = '';

  for (let index = 0; index < progressionLength; index += 1) {
    if (index !== pass) {
      question += `${progressions[index]} `;
    } else {
      question += '.. ';
    }
  }

  return question;
};

const gameData = () => {
  const pass = randomNumber(1, 10);
  const step = randomNumber(2, 25);
  const start = randomNumber(2, 11);
  const progressions = createProgression(start, step);
  const trueAnswer = progressions[pass];
  const skippingProgression = createQuestion(progressions, pass);
  const question = `${skippingProgression}`;
  const data = [String(trueAnswer), question];

  return data;
};

export default () => play(regulations, gameData);
