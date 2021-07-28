import setColor from '../functions/setColor';
import sleep from '../functions/sleep';
import setAllToBlue from '../functions/setAllToBlue';
import reload from '../functions/reload';
import updateCompares from '../functions/updateCompares';

import { SortingFunctionProps } from '../types';

const coctailSort = async ({
  howMany, arr, setArr, speedRef, barsRef, comparesRef,
}: SortingFunctionProps): Promise<void> => {
  let bottom = 0;
  let top = howMany - 1;
  let hasChanged = true;

  while (hasChanged) {
    await sleep(speedRef);

    let newArr = arr;
    hasChanged = false;

    for (let i = bottom; i < top; i++) {
      const currentBars = Array.from(barsRef!.current!.children) as HTMLDivElement[];
      setAllToBlue(barsRef);
      setColor(currentBars[i], currentBars[i + 1], 'yellow');
      await sleep(speedRef);
      updateCompares(comparesRef);
      if (newArr[i] > newArr[i + 1]) {
        setColor(currentBars[i], currentBars[i + 1], 'green');
        await sleep(speedRef);
        const temp = newArr[i];
        newArr[i] = newArr[i + 1];
        newArr[i + 1] = temp;
        hasChanged = true;
        setArr([...newArr]);
        await sleep(speedRef);
      } else {
        setColor(currentBars[i], currentBars[i + 1], 'red');
        await sleep(speedRef);
      }
    }

    newArr = arr;
    top--;

    for (let i = top; i > bottom; i--) {
      const currentBars = Array.from(barsRef!.current!.children) as HTMLDivElement[];
      setAllToBlue(barsRef);
      setColor(currentBars[i], currentBars[i - 1], 'yellow');
      await sleep(speedRef);
      updateCompares(comparesRef);
      if (newArr[i] < newArr[i - 1]) {
        setColor(currentBars[i], currentBars[i - 1], 'green');
        await sleep(speedRef);
        const temp = newArr[i];
        newArr[i] = newArr[i - 1];
        newArr[i - 1] = temp;
        hasChanged = true;

        setArr([...newArr]);
        await sleep(speedRef);
      } else {
        setColor(currentBars[i], currentBars[i - 1], 'red');
        await sleep(speedRef);
      }
    }
    newArr = arr;
    bottom++;
  }
  setAllToBlue(barsRef);
  reload();
};

export default coctailSort;
