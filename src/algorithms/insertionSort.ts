import sleep from '../functions/sleep';
import setAllToBlue from '../functions/setAllToBlue';
import reload from '../functions/reload';
import updateCompares from '../functions/updateCompares';

import { SortingFunction } from '../types';

const insertionSort = async ({
  howMany, arr, setArr, speedRef, barsRef, comparesRef,
}: SortingFunction): Promise<void> => {
  let indexOfPreviousCounter = 0;

  for (let i = 1; i < howMany; i++) {
    const currentBars = Array.from(barsRef!.current!.children) as HTMLDivElement[];
    for (let index = 0; index < i; index++) {
      currentBars[index].style.backgroundColor = 'orange';
    }
    await sleep(speedRef);
    await sleep(speedRef);
    currentBars[i].style.backgroundColor = 'yellow';

    if (arr[i].value <= arr[0].value) {
      await sleep(speedRef);
      updateCompares(comparesRef);
      arr.unshift(arr.splice(i, 1)[0]);
      for (let index = 0; index < i; index++) {
        currentBars[index].style.backgroundColor = 'red';
      }
      indexOfPreviousCounter = 0;
    } else {
      let flag = true;
      await sleep(speedRef);
      for (let j = 1; j < i; j++) {
        updateCompares(comparesRef);
        updateCompares(comparesRef);

        if (arr[i].value > arr[j - 1].value && arr[i].value <= arr[j].value) {
          indexOfPreviousCounter = j;
          for (let index = 0; index < j; index++) {
            currentBars[index].style.backgroundColor = 'green';
          }
          flag = false;
          arr.splice(j, 0, arr.splice(i, 1)[0]);
          for (let index = j; index < i; index++) {
            currentBars[index].style.backgroundColor = 'red';
          }
          await sleep(speedRef);
          break;
        }
      }
      if (flag) {
        for (let index = 0; index < i + 1; index++) {
          currentBars[index].style.backgroundColor = 'green';
        }
        indexOfPreviousCounter = i;
      }
    }
    setArr([...arr]);
    await sleep(speedRef);
    await sleep(speedRef);
    if (indexOfPreviousCounter! !== i && indexOfPreviousCounter !== howMany) {
      currentBars[i].style.backgroundColor = 'red';
    }
  }
  await sleep(speedRef);
  setAllToBlue(barsRef);
  reload();
};

export default insertionSort;
