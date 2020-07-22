import React, { useState } from 'react';

import { AppContainer, HeaderContainer, ButtonContainer } from './App.styles';
import Visualisation from '../Visualisation/Visualisation.component';

const App = () => {
   const [algorithm, setAlgorithm] = useState('');

   return (
      <AppContainer>
         <HeaderContainer>
            <ButtonContainer>Reset!</ButtonContainer>
            <ButtonContainer onClick={() => setAlgorithm('bubble')}>
               Bubble Sort
            </ButtonContainer>
            <label htmlFor='spacing'>Speed:</label>
            <input
               id='speed'
               type='range'
               name='speed'
               min='1000'
               max='5000'
               defaultValue='1000'
            ></input>
         </HeaderContainer>
         <Visualisation algorithm={algorithm} />
      </AppContainer>
   );
};

export default App;
