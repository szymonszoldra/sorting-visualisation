import React, { useState, useEffect } from 'react';
import { VisualisationContainer, SingleBar } from './Visualisation.styles';

const generateArray = (howMany) => {
   const arr = [];

   for (let i = 0; i < howMany; i++) {
      arr.push(Math.floor(Math.random() * 1100) + 100);
   }
   return arr;
};

const Visualisation = ({ algorithm }) => {
   const [arr, setArr] = useState(generateArray(30));

   const bubbleSortTemp = async (howMany, delay) => {
      for (let i = 0; i < howMany; i++) {
         for (let j = 0; j < howMany - 1; j++) {
            const newArr = arr;
            console.log(newArr);
            //something like sleep() function in other languages
            await new Promise((resolve) => setTimeout(resolve, delay));

            const currentBars = [...document.querySelectorAll('.singleBar')];
            currentBars.forEach(
               (bar) => (bar.style.backgroundColor = 'royalblue')
            );

            currentBars[j].style.backgroundColor = 'yellow';
            currentBars[j + 1].style.backgroundColor = 'yellow';

            await new Promise((resolve) => setTimeout(resolve, delay));
            console.log(newArr[j], newArr[j + 1], newArr[j] > newArr[j + 1]);

            if (newArr[j] > newArr[j + 1]) {
               currentBars[j].style.backgroundColor = 'green';
               currentBars[j + 1].style.backgroundColor = 'green';
               const temp = newArr[j];
               newArr[j] = newArr[j + 1];
               newArr[j + 1] = temp;
            } else {
               currentBars[j].style.backgroundColor = 'red';
               currentBars[j + 1].style.backgroundColor = 'red';
            }

            await setArr([...newArr]);
         }
      }
   };

   useEffect(() => {
      switch (algorithm) {
         case 'bubble':
            bubbleSortTemp(30, 10);
            break;
         default:
            break;
      }
   }, [algorithm]);

   return (
      <VisualisationContainer>
         {arr.map((item, index) => (
            <SingleBar
               key={index}
               className='singleBar'
               height={Math.floor(item / 12)}
            />
         ))}
      </VisualisationContainer>
   );
};

export default Visualisation;
