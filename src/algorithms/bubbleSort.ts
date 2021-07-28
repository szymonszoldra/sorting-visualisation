import setColor from '../functions/setColor';
import sleep from '../functions/sleep';
import setAllToBlue from '../functions/setAllToBlue';
import reload from '../functions/reload';
import updateCompares from '../functions/updateCompares';
import swap from '../functions/swap';

import { SortingFunction } from '../types';

const bubbleSort = async ({
  howMany, arr, setArr, speedRef, barsRef, comparesRef,
}: SortingFunction): Promise<void> => {
  for (let i = 0; i < howMany; i++) {
    let shouldStop = true;
    for (let j = 0; j < howMany - 1 - i; j++) {
      await sleep(speedRef);
      const currentBars = Array.from(barsRef!.current!.children) as HTMLDivElement[];
      setAllToBlue(barsRef);
      setColor(currentBars[j], currentBars[j + 1], 'yellow');
      updateCompares(comparesRef);
      await sleep(speedRef);

      if (arr[j].value > arr[j + 1].value) {
        setColor(currentBars[j], currentBars[j + 1], 'green');
        await sleep(speedRef);
        swap(arr[j], arr[j + 1]);
        shouldStop = false;
      } else {
        setColor(currentBars[j], currentBars[j + 1], 'red');
      }
      setArr([...arr]);
    }
    if (shouldStop) {
      break;
    }
  }
  setAllToBlue(barsRef);
  reload();
};

export default bubbleSort;
