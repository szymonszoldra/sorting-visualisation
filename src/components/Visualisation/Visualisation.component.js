import React, { useState, useEffect } from 'react';
import { VisualisationContainer, SingleBar } from './Visualisation.styles';

import generateArray from '../../functions/generateArray';

import bubbleSort from '../../algorithms/bubbleSort';
import selectionSort from '../../algorithms/selectionSort';
import insertionSort from '../../algorithms/insertionSort';
import mergeSortContainer from '../../algorithms/mergeSort';

const Visualisation = () => {
   const [arr, setArr] = useState(generateArray(30));

   const eventHandler = (e) => {
      switch (e.target.id) {
         case 'bubble':
            bubbleSort(30, arr, setArr);
            break;
         case 'selection':
            selectionSort(30, arr, setArr);
            break;
         case 'insertion':
            insertionSort(30, arr, setArr);
            break;
         case 'merge':
            alert(
               'Right know it only sorts the array, still need to figure out how to implement visualisation'
            );
            mergeSortContainer(arr, setArr);
            break;
         default:
            break;
      }
      document
         .querySelectorAll('.btn')
         .forEach((btn) => btn.removeEventListener('click', eventHandler));
   };

   useEffect(() => {
      document
         .querySelectorAll('.btn')
         .forEach((btn) => btn.addEventListener('click', eventHandler));

      // document.querySelector('.selection-btn').addEventListener('click', () => {
      //    selectionSort(30, arr, setArr);
      //    console.log('selection!');
      // });

      // document.querySelector('.insertion-btn').addEventListener('click', () => {
      //    insertionSort(30, arr, setArr);
      //    console.log('insertion!');
      // });

      // document.querySelector('.merge-btn').addEventListener('click', () => {
      //    mergeSortContainer(arr, setArr);
      //    console.log('merge!');
      //    alert(
      //       'Right know it only sorts the array, still need to figure out how to implement visualisation'
      //    );
      // });

      // document.querySelector('.reset-btn').addEventListener('click', () => {
      //    setArr(generateArray(30));
      //    console.log('reset!');
      // });
   }, []);

   return (
      <VisualisationContainer>
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
