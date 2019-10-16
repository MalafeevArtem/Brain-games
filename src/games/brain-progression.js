import readlineSync from 'readline-sync';
import randomNumber from '../randomNumber';
import play from '..';

const REGULATIONS = 'What number is missing in the progression?';
const PROGRS_LENGTH = 10;

const createProgression = (start, step) => {
  const prog = [];

  const iteration = (count) => {
    if (count === PROGRS_LENGTH) {
      return prog;
    }
    prog.push(start + step * count);
    return iteration(count + 1);
  };

  return iteration(0);
};

const createQuestion = (progressions, pass) => {
  let question = '';

  for (let index = 0; index < PROGRS_LENGTH; index += 1) {
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

export default () => play(REGULATIONS, gameData);
