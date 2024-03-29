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
  const speedRef = useRef<HTMLInputElement>(null);
  const comparesRef = useRef<HTMLSpanElement>(null);
  const bubbleButtonRef = useRef<HTMLButtonElement>(null);
  const selectionButtonRef = useRef<HTMLButtonElement>(null);
  const insertionButtonRef = useRef<HTMLButtonElement>(null);
  const coctailButtonRef = useRef<HTMLButtonElement>(null);

  const buttons = [bubbleButtonRef, selectionButtonRef, insertionButtonRef, coctailButtonRef];

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
