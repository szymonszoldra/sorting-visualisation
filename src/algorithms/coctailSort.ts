import setColor from '../functions/setColor';
import sleep from '../functions/sleep';
import setAllToBlue from '../functions/setAllToBlue';
import reload from '../functions/reload';
import updateCompares from '../functions/updateCompares';
import swap from '../functions/swap';

import { SortingFunction } from '../types';

const coctailSort = async ({
  howMany, arr, setArr, speedRef, barsRef, comparesRef,
}: SortingFunction): Promise<void> => {
  let bottom = 0;
  let top = howMany - 1;
  let hasChanged = true;

  while (hasChanged) {
    await sleep(speedRef);
    hasChanged = false;

    for (let i = bottom; i < top; i++) {
      const currentBars = Array.from(barsRef!.current!.children) as HTMLDivElement[];
      setAllToBlue(barsRef);
      setColor(currentBars[i], currentBars[i + 1], 'yellow');
      await sleep(speedRef);
      updateCompares(comparesRef);
      if (arr[i].value > arr[i + 1].value) {
        setColor(currentBars[i], currentBars[i + 1], 'green');
        await sleep(speedRef);
        swap(arr[i], arr[i + 1]);
        hasChanged = true;
        setArr([...arr]);
        await sleep(speedRef);
      } else {
        setColor(currentBars[i], currentBars[i + 1], 'red');
        await sleep(speedRef);
      }
    }

    top--;

    for (let i = top; i > bottom; i--) {
      const currentBars = Array.from(barsRef!.current!.children) as HTMLDivElement[];
      setAllToBlue(barsRef);
      setColor(currentBars[i], currentBars[i - 1], 'yellow');
      await sleep(speedRef);
      updateCompares(comparesRef);
      if (arr[i].value < arr[i - 1].value) {
        setColor(currentBars[i], currentBars[i - 1], 'green');
        await sleep(speedRef);
        swap(arr[i], arr[i - 1]);
        hasChanged = true;

        setArr([...arr]);
        await sleep(speedRef);
      } else {
        setColor(currentBars[i], currentBars[i - 1], 'red');
        await sleep(speedRef);
      }
    }
    bottom++;
  }
  setAllToBlue(barsRef);
  reload();
};

export default coctailSort;
