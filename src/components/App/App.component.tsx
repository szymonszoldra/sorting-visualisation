import React, { useRef } from 'react';

import AppContext from '../../context/AppContext';

import Visualisation from '../Visualisation/Visualisation.component';

import {
  AppContainer,
  HeaderContainer,
  ButtonContainer,
  CompareContainer,
} from './App.styles';

import GlobalStyles from '../../global.styles';

const App = () => {
  const speedRef = useRef(null);
  const comparesRef = useRef(null);
  const bubbleButtonRef = useRef(null);
  const selectionButtonRef = useRef(null);
  const insertionButtonRef = useRef(null);
  const mergeButtonRef = useRef(null);
  const coctailButtonRef = useRef(null);

  const buttons = [bubbleButtonRef, selectionButtonRef, insertionButtonRef, mergeButtonRef, coctailButtonRef];

  return (
    <AppContext.Provider value={{
      speedRef,
      comparesRef,
      buttons,
    }}
    >
      <GlobalStyles />
      <AppContainer>
        <HeaderContainer>
          <ButtonContainer ref={bubbleButtonRef} id="bubble" className="bubble-btn btn">
            Bubble Sort
          </ButtonContainer>
          <ButtonContainer ref={selectionButtonRef} id="selection" className="selection-btn btn">
            Selection Sort
          </ButtonContainer>
          <ButtonContainer ref={insertionButtonRef} id="insertion" className="insertion-btn btn">
            Insertion Sort
          </ButtonContainer>
          <ButtonContainer ref={mergeButtonRef} id="merge" className="merge-btn btn">
            Merge Sort
          </ButtonContainer>
          <ButtonContainer ref={coctailButtonRef} id="coctail" className="coctail-btn btn">
            Coctail Sort
          </ButtonContainer>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="speed">Speed:</label>
          <input
            ref={speedRef}
            style={{ direction: 'rtl' }}
            id="speed"
            type="range"
            name="speed"
            min="10"
            max="1000"
            defaultValue="300"
          />
          <CompareContainer>
            Compares:
            <span ref={comparesRef} className="compares">0</span>
          </CompareContainer>
        </HeaderContainer>
        <Visualisation />
      </AppContainer>
    </AppContext.Provider>
  );
};

export default App;
