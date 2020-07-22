import React from 'react';
import { HeaderContainer, ButtonContainer } from './Header.styles';

const Header = () => (
   <HeaderContainer>
      <ButtonContainer>Reset!</ButtonContainer>
      <ButtonContainer>Bubble Sort</ButtonContainer>
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
);

export default Header;
