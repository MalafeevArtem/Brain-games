import randomNumber from '../randomNumber';
import play from '..';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const createProgression = (start, step, length) => {
  const iteration = (count, progression) => {
    if (count === length) {
      return progression;
    }

    progression.push(start + step * count);

    return iteration(count + 1, progression);
  };

  return iteration(0, []);
};

const getGameData = () => {
  const missingElementIndex = randomNumber(1, progressionLength - 1);
  const step = randomNumber(2, 25);
  const start = randomNumber(2, 11);
  const progression = createProgression(start, step, progressionLength);
  const trueAnswer = progression[missingElementIndex];
  const question = progression.map((value, index) => (index === missingElementIndex ? '..' : value)).join(' ');
  const data = [String(trueAnswer), question];

  return data;
};

export default () => play(description, getGameData);
