import sleep from '../functions/sleep';
import setAllToBlue from '../functions/setAllToBlue';
import reload from '../functions/reload';
import updateCompares from '../functions/updateCompares';




const insertionSort = async ({howMany, arr, setArr, speedRef, barsRef, comparesRef}) => {
  let indexOfPreviousCounter;

  for (let i = 1; i < howMany; i++) {
    const newArr = arr;

    await sleep(speedRef);

    const currentBars = [...barsRef.current.children];

    for (let index = 0; index < i; index++) {
      currentBars[index].style.backgroundColor = 'orange';
    }
    await sleep(speedRef);

    currentBars[i].style.backgroundColor = 'yellow';

    if (newArr[i] <= newArr[0]) {
      updateCompares(comparesRef);
      newArr.unshift(newArr.splice(i, 1)[0]);
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

        if (newArr[i] > newArr[j - 1] && newArr[i] <= newArr[j]) {
          indexOfPreviousCounter = j;
          for (let index = 0; index < j; index++) {
            currentBars[index].style.backgroundColor = 'green';
          }
          flag = false;
          newArr.splice(j, 0, newArr.splice(i, 1)[0]);
          for (let index = j; index < i; index++) {
            currentBars[index].style.backgroundColor = 'red';
          }
          updateCompares(comparesRef);
          break;
        }
      }
      if (flag) {
        for (let index = 0; index < i; index++) {
          currentBars[index].style.backgroundColor = 'green';
        }
        indexOfPreviousCounter = i;
      }
    }
    await sleep(speedRef);
    setArr([...newArr]);
    currentBars[indexOfPreviousCounter].style.backgroundColor = 'yellow';
    if (indexOfPreviousCounter !== i) {
      currentBars[i].style.backgroundColor = 'red';

    }
  }
  await sleep(speedRef);
  setAllToBlue(barsRef);

  reload();
}

export default insertionSort;