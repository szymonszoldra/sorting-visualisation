// something like sleep() function in other languages

import { InputRef } from '../types';

interface props {
  current: InputRef
}

const sleep = async ({ current }: props): Promise<void> => {
  const delay = Number(current?.value);
  return new Promise((resolve) => setTimeout(resolve, delay));
};

export default sleep;
