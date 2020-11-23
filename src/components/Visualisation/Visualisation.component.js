import React, { useState, useEffect, useContext, useRef } from 'react';

import AppContext from '../../context/AppContext';
import { VisualisationContainer, SingleBar } from './Visualisation.styles';

import generateArray from '../../functions/generateArray';

import bubbleSort from '../../algorithms/bubbleSort';
import selectionSort from '../../algorithms/selectionSort';
import insertionSort from '../../algorithms/insertionSort';
import mergeSortContainer from '../../algorithms/mergeSort';
import coctailSort from '../../algorithms/coctailSort';

const Visualisation = () => {
  const [arr, setArr] = useState(generateArray(30));
  const {speedRef, comparesRef, buttons} = useContext(AppContext);
  const barsRef = useRef(null);
  const eventHandler = (e) => {
    const params = {howMany: 30, arr, setArr, speedRef, barsRef, comparesRef};

    switch (e.target.id) {
      case 'bubble':
        bubbleSort(params);
        break;
        case 'selection':
        selectionSort(params);
        break;
        case 'insertion':
          insertionSort(params);
          break;
        case 'merge':
          alert(
               'Right now it only sorts the array, still need to figure out how to implement visualisation'
          );
          mergeSortContainer(arr, setArr);
          break;
        case 'coctail':
          coctailSort(params);
          break;
        default:
          break;
      }
      buttons.forEach((btn) => {
        btn.current.removeEventListener('click', eventHandler);
        btn.current.disabled = true;
      });
  };

  useEffect(() => {
    buttons
       .forEach((btn) => btn.current.addEventListener('click', eventHandler));
  }, []);

  return (
    <VisualisationContainer ref={barsRef}>
      {arr.map((item, index) => (
        <SingleBar
          key={index}
          className='singleBar'
          height={Math.floor(item / 12)}
        >
          {item}
        </SingleBar>
        ))}
    </VisualisationContainer>
  );
};

export default Visualisation;
