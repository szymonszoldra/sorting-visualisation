// something like sleep() function in other languages

import { InputRef } from '../types';

interface args {
  current: InputRef
}

const sleep = async ({ current }: args): Promise<void> => {
  const delay = Number(current?.value);
  return new Promise((resolve) => setTimeout(resolve, delay));
};

export default sleep;
