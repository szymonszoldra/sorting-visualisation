import React from 'react';

import { AppContainer, HeaderContainer, ButtonContainer } from './App.styles';
import Visualisation from '../Visualisation/Visualisation.component';

const App = () => {
   return (
      <AppContainer>
         <HeaderContainer>
            <ButtonContainer className='reset-btn'>Reset!</ButtonContainer>
            <ButtonContainer className='bubble-btn'>
               Bubble Sort
            </ButtonContainer>
            <ButtonContainer className='selection-btn'>
               Selection Sort
            </ButtonContainer>
            <label htmlFor='spacing'>Speed:</label>
            <input
               style={{ direction: 'rtl' }}
               id='speed'
               type='range'
               name='speed'
               min='10'
               max='1000'
               defaultValue='300'
            ></input>
         </HeaderContainer>
         <Visualisation />
      </AppContainer>
   );
};

export default App;
