import React from 'react';

import { AppContainer, HeaderContainer, ButtonContainer } from './App.styles';
import Visualisation from '../Visualisation/Visualisation.component';

const App = () => {
   return (
      <AppContainer>
         <HeaderContainer>
            {/* <ButtonContainer className='reset-btn'>Reset!</ButtonContainer> */}
            <ButtonContainer id='bubble' className='bubble-btn btn'>
               Bubble Sort
            </ButtonContainer>
            <ButtonContainer id='selection' className='selection-btn btn'>
               Selection Sort
            </ButtonContainer>

            <ButtonContainer id='insertion' className='insertion-btn btn'>
               Insertion Sort
            </ButtonContainer>
            <ButtonContainer id='merge' className='merge-btn btn'>
               Merge Sort
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
