import React, { useState, useEffect } from 'react';
import { VisualisationContainer, SingleBar } from './Visualisation.styles';

import generateArray from '../../functions/generateArray';

import bubbleSort from '../../algorithms/bubbleSort';
import selectionSort from '../../algorithms/selectionSort';
import insertionSort from '../../algorithms/insertionSort';

const Visualisation = () => {
   const [arr, setArr] = useState(generateArray(30));

   useEffect(() => {
      document.querySelector('.bubble-btn').addEventListener('click', () => {
         bubbleSort(30, arr, setArr);
         console.log('bubble!');
      });

      document.querySelector('.selection-btn').addEventListener('click', () => {
         selectionSort(30, arr, setArr);
         console.log('selection!');
      });

      document.querySelector('.insertion-btn').addEventListener('click', () => {
         insertionSort(30, arr, setArr);
         console.log('insertion!');
      });

      document.querySelector('.reset-btn').addEventListener('click', () => {
         setArr(generateArray(30));
         console.log('reset!');
      });
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
