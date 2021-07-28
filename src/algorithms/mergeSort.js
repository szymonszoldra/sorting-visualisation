import reload from '../functions/reload';

const mergeSortContainer = (arr, setArr) => {
  const newArr = arr;

  const merge = (left, right) => {
    const result = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result.concat([...left]).concat([...right]);
  };

  const mergeSort = (newArrArg) => {
    if (newArrArg.length <= 1) {
      return newArrArg;
    }
    const { length } = newArrArg;
    const middle = Math.floor(length / 2);
    const left = newArrArg.slice(0, middle);
    const right = newArrArg.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  };

  setArr(mergeSort(newArr));
  reload();
};

export default mergeSortContainer;
