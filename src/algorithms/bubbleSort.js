import setColor from '../functions/setColor';
import sleep from '../functions/sleep';
import setAllToBlue from '../functions/setAllToBlue';
import reload from '../functions/reload';
import updateCompares from '../functions/updateCompares';

const bubbleSort = async ({
  howMany, arr, setArr, speedRef, barsRef, comparesRef,
}) => {
  let counter = 1;
  for (let i = 0; i < howMany; i++) {
    counter = 0;
    for (let j = 0; j < howMany - 1 - i; j++) {
      const newArr = arr;
      await sleep(speedRef);

      const currentBars = [...barsRef.current.children];
      setAllToBlue(barsRef);

      setColor(currentBars[j], currentBars[j + 1], 'yellow');
      updateCompares(comparesRef);
      await sleep(speedRef);

      if (newArr[j] > newArr[j + 1]) {
        setColor(currentBars[j], currentBars[j + 1], 'green');
        await sleep(speedRef);

        const temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
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
