import setColor from '../functions/setColor';
import sleep from '../functions/sleep';
import setAllToBlue from '../functions/setAllToBlue';
import reload from '../functions/reload';


const selectionSort = async (howMany, arr, setArr) => {
  for (let i = 0; i < howMany; i++) {
    let currentSmallest = i;
    const newArr = arr;
    for (let j = i + 1; j < howMany; j++) {
      const delay = parseInt(document.querySelector('#speed').value);
      await sleep(delay);

      const currentBars = [...document.querySelectorAll('.singleBar')];
      setAllToBlue();

      setColor(currentBars[currentSmallest], currentBars[j], 'yellow');

      await sleep(delay);

      if (newArr[currentSmallest] > newArr[j]) {
        setColor(currentBars[currentSmallest], currentBars[j], 'green');
        currentSmallest = j;
      } else {
        setColor(currentBars[currentSmallest], currentBars[j], 'red');
      }

      setArr([...newArr]);
    }

    const delay = parseInt(document.querySelector('#speed').value);
    const currentBars = [...document.querySelectorAll('.singleBar')];

    if (newArr[currentSmallest] !== newArr[i]) {
      setAllToBlue();
      setColor(currentBars[currentSmallest], currentBars[i], 'orange');
      await sleep(delay);
      const temp = newArr[currentSmallest];
      newArr[currentSmallest] = newArr[i];
      newArr[i] = temp;
      setArr([...newArr]);
    } else {
      currentBars[currentSmallest].style.backgroundColor = 'orange';
      await sleep(delay * 2);
    }

  }
  setAllToBlue();
  reload();
}

export default selectionSort;