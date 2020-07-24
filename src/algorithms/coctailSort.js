import setColor from '../functions/setColor';
import sleep from '../functions/sleep';
import setAllToBlue from '../functions/setAllToBlue';
import reload from '../functions/reload';
import updateCompares from '../functions/updateCompares';


const coctailSort = async (howMany, arr, setArr) => {
  let bottom = 0;
  let top = howMany - 1;
  let hasChanged = true;

  while (hasChanged) {
    await sleep();

    let newArr = arr;
    hasChanged = false;

    for (let i = bottom; i < top; i++) {
      const currentBars = [...document.querySelectorAll('.singleBar')];
      setAllToBlue();
      setColor(currentBars[i], currentBars[i + 1], 'yellow');
      await sleep();
      updateCompares();
      if (newArr[i] > newArr[i + 1]) {
        setColor(currentBars[i], currentBars[i + 1], 'green');
        await sleep();
        const temp = newArr[i];
        newArr[i] = newArr[i + 1];
        newArr[i + 1] = temp;
        hasChanged = true;
        setArr([...newArr]);
        await sleep();
      } else {
        setColor(currentBars[i], currentBars[i + 1], 'red');
        await sleep();
      }

    }

    newArr = arr;
    top--;

    for (let i = top; i > bottom; i--) {
      const currentBars = [...document.querySelectorAll('.singleBar')];
      setAllToBlue();
      setColor(currentBars[i], currentBars[i - 1], 'yellow');
      await sleep();
      updateCompares();
      if (newArr[i] < newArr[i - 1]) {
        setColor(currentBars[i], currentBars[i - 1], 'green');
        await sleep();
        const temp = newArr[i];
        newArr[i] = newArr[i - 1];
        newArr[i - 1] = temp;
        hasChanged = true;

        setArr([...newArr]);
        await sleep();
      } else {
        setColor(currentBars[i], currentBars[i - 1], 'red');
        await sleep();
      }
    }
    newArr = arr;
    bottom++;
  }
  setAllToBlue();
  reload();
}

export default coctailSort;