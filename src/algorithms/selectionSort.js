import setColor from '../functions/setColor';
import sleep from '../functions/sleep';
import setAllToBlue from '../functions/setAllToBlue';
import reload from '../functions/reload';
import updateCompares from '../functions/updateCompares';



const selectionSort = async ({howMany, arr, setArr, speedRef, barsRef, comparesRef}) => {
  for (let i = 0; i < howMany; i++) {
    let currentSmallest = i;
    const newArr = arr;
    for (let j = i + 1; j < howMany; j++) {
      await sleep(speedRef);

      const currentBars = [...barsRef.current.children];
      setAllToBlue(barsRef);

      setColor(currentBars[currentSmallest], currentBars[j], 'yellow');
      updateCompares(comparesRef);
      await sleep(speedRef);

      if (newArr[currentSmallest] > newArr[j]) {
        setColor(currentBars[currentSmallest], currentBars[j], 'green');
        currentSmallest = j;
      } else {
        setColor(currentBars[currentSmallest], currentBars[j], 'red');
      }

      setArr([...newArr]);
    }


    const currentBars = [...barsRef.current.children];

    if (newArr[currentSmallest] !== newArr[i]) {
      setAllToBlue(barsRef);
      setColor(currentBars[currentSmallest], currentBars[i], 'orange');
      updateCompares(comparesRef);
      await sleep(speedRef);
      const temp = newArr[currentSmallest];
      newArr[currentSmallest] = newArr[i];
      newArr[i] = temp;
      setArr([...newArr]);
    } else {
      currentBars[currentSmallest].style.backgroundColor = 'orange';
      updateCompares(comparesRef);
      await sleep(speedRef);
      await sleep(speedRef);
    }

  }
  setAllToBlue(barsRef);
  reload();
}

export default selectionSort;