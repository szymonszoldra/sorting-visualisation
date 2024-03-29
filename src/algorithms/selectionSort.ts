import setColor from '../functions/setColor';
import sleep from '../functions/sleep';
import setAllToBlue from '../functions/setAllToBlue';
import reload from '../functions/reload';
import updateCompares from '../functions/updateCompares';
import swap from '../functions/swap';

import { SortingFunction } from '../types';

const selectionSort = async ({
  howMany, arr, setArr, speedRef, barsRef, comparesRef,
}: SortingFunction): Promise<void> => {
  for (let i = 0; i < howMany; i++) {
    let currentSmallest = i;
    for (let j = i + 1; j < howMany; j++) {
      await sleep(speedRef);
      const currentBars = Array.from(barsRef!.current!.children) as HTMLDivElement[];
      setAllToBlue(barsRef);
      setColor(currentBars[currentSmallest], currentBars[j], 'yellow');
      updateCompares(comparesRef);
      await sleep(speedRef);

      if (arr[currentSmallest].value > arr[j].value) {
        setColor(currentBars[currentSmallest], currentBars[j], 'green');
        currentSmallest = j;
      } else {
        setColor(currentBars[currentSmallest], currentBars[j], 'red');
      }
      setArr([...arr]);
    }

    const currentBars = Array.from(barsRef!.current!.children) as HTMLDivElement[];

    if (arr[currentSmallest].value !== arr[i].value) {
      setAllToBlue(barsRef);
      setColor(currentBars[currentSmallest], currentBars[i], 'orange');
      updateCompares(comparesRef);
      await sleep(speedRef);
      swap(arr[i], arr[currentSmallest]);
      setArr([...arr]);
    } else {
      currentBars[currentSmallest].style.backgroundColor = 'orange';
      updateCompares(comparesRef);
      await sleep(speedRef);
      await sleep(speedRef);
    }
  }
  setAllToBlue(barsRef);
  reload();
};

export default selectionSort;
