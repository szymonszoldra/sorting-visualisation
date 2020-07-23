import sleep from '../functions/sleep';
import setAllToBlue from '../functions/setAllToBlue';
import reload from '../functions/reload';



const insertionSort = async (howMany, arr, setArr) => {
  let indexOfPreviousCounter;

  for (let i = 1; i < howMany; i++) {
    const newArr = arr;

    const delay = parseInt(document.querySelector('#speed').value);
    await sleep(delay);

    const currentBars = [...document.querySelectorAll('.singleBar')];

    for (let index = 0; index < i; index++) {
      currentBars[index].style.backgroundColor = 'orange';
    }
    await sleep(delay);

    currentBars[i].style.backgroundColor = 'yellow';

    if (newArr[i] <= newArr[0]) {

      newArr.unshift(newArr.splice(i, 1)[0]);
      for (let index = 0; index < i; index++) {
        currentBars[index].style.backgroundColor = 'red';
      }
      indexOfPreviousCounter = 0;

    } else {
      let flag = true;
      const delay = parseInt(document.querySelector('#speed').value);
      await sleep(delay);
      for (let j = 1; j < i; j++) {

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
        }

      }
      if (flag) {
        for (let index = 0; index < i; index++) {
          currentBars[index].style.backgroundColor = 'green';
        }
        indexOfPreviousCounter = i;
      }
    }
    await sleep(delay);
    setArr([...newArr]);
    currentBars[indexOfPreviousCounter].style.backgroundColor = 'yellow';
    if (indexOfPreviousCounter !== i) {
      currentBars[i].style.backgroundColor = 'red';

    }
  }
  const delay = parseInt(document.querySelector('#speed').value);
  await sleep(delay);
  setAllToBlue();

  reload();
}

export default insertionSort;