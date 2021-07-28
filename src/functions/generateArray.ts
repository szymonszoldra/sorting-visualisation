import { v4 as uuid } from 'uuid';

import { ArrElement } from '../types';

const generateArray = (howMany: number): Array<ArrElement> => {
  const arr = [];

  for (let i = 0; i < howMany; i++) {
    arr.push({
      value: Math.floor(Math.random() * 1100) + 100,
      id: uuid(),
    });
  }
  return arr;
};

export default generateArray;
