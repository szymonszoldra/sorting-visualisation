import React from 'react';

import { AppContainer } from './App.styles';
import Header from '../Header/Header.component';
import Visualisation from '../Visualisation/Visualisation.component';

const App = () => (
   <AppContainer>
      <Header />
      <Visualisation />
   </AppContainer>
);

export default App;
