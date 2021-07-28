import { ArrElement } from '../types';

const swap = (item1: ArrElement, item2: ArrElement): void => {
  const temp = item1.value;
  item1.value = item2.value;
  item2.value = temp;
};

export default swap;
