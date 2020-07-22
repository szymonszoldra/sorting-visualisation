import React, { useState } from 'react';
import { VisualisationContainer, SingleBar } from './Visualisation.styles';

const generateArray = (howMany) => {
   const arr = [];

   for (let i = 0; i < howMany; i++) {
      arr.push(Math.floor(Math.random() * 1100) + 100);
   }
   return arr;
};

const Visualisation = () => {
   const [arr, setArr] = useState(generateArray(50));

   return (
      <VisualisationContainer>
         {arr.map((item) => (
            <SingleBar height={Math.floor(item / 12)} />
         ))}
      </VisualisationContainer>
   );
};

export default Visualisation;
