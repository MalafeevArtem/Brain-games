import randomNumber from '../randomNumber';
import play from '..';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const createProgression = (start, step) => {
  const progression = [];

  const iteration = (count) => {
    if (count === progressionLength) {
      return progression;
    }
    progression.push(start + step * count);
    return iteration(count + 1);
  };

  return iteration(0);
};

const gameData = () => {
  const missingValue = randomNumber(1, progressionLength - 1);
  const step = randomNumber(2, 25);
  const start = randomNumber(2, 11);
  const progressions = createProgression(start, step);
  const trueAnswer = progressions[missingValue];
  const question = progressions.map((value, index) => (index === missingValue ? '..' : value)).join(' ');
  const data = [String(trueAnswer), question];

  return data;
};

export default () => play(description, gameData);
