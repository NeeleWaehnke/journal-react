import { createGlobalStyle } from 'styled-components';
import Quicksand from './assets/Quicksand/Quicksand-VariableFont_wght.ttf';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Quicksand';
    src: local('Quicksand'), url(${Quicksand}) format('truetype');}

body{
  background-color:#f9f4ec;
  width: 100%;
  margin: 0;
}

* {
  box-sizing: border-box;
  
  
}

#root {
  
  border: 1px solid black;
  width: 100%;
  background-color:#efdfdc;
  align-content: center;
  
}



`;

export default GlobalStyle;
