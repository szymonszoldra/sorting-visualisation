import setColor from '../functions/setColor';
import sleep from '../functions/sleep';
import setAllToBlue from '../functions/setAllToBlue';
import reload from '../functions/reload';
import updateCompares from '../functions/updateCompares';

import { SortingFunctionProps } from '../types';

const bubbleSort = async ({
  howMany, arr, setArr, speedRef, barsRef, comparesRef,
}: SortingFunctionProps): Promise<void> => {
  let counter = 1;
  for (let i = 0; i < howMany; i++) {
    counter = 0;
    for (let j = 0; j < howMany - 1 - i; j++) {
      const newArr = arr;
      await sleep(speedRef);

      const currentBars = Array.from(barsRef!.current!.children) as HTMLDivElement[];
      setAllToBlue(barsRef);

      setColor(currentBars[j], currentBars[j + 1], 'yellow');
      updateCompares(comparesRef);
      await sleep(speedRef);

      if (newArr[j].value > newArr[j + 1].value) {
        setColor(currentBars[j], currentBars[j + 1], 'green');
        await sleep(speedRef);

        const temp = newArr[j].value;
        newArr[j].value = newArr[j + 1].value;
        newArr[j + 1].value = temp;
        counter++;
      } else {
        setColor(currentBars[j], currentBars[j + 1], 'red');
      }
      setArr([...newArr]);
    }
    if (!counter) {
      break;
    }
  }
  setAllToBlue(barsRef);
  reload();
};

export default bubbleSort;
