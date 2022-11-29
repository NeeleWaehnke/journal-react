import { createGlobalStyle } from 'styled-components';
import Quicksand from './assets/Quicksand/Quicksand-VariableFont_wght.ttf';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Quicksand';
    src: local('Quicksand'), url(${Quicksand}) format('truetype');}

body{
  background-color:#f9f4ec;
  
  margin: 0;
}

* {
  box-sizing: border-box;
  
  
}

#root {
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
  width: 80%;
  background-color:#efdfdc;
  align-content: center;
  
}



`;

export default GlobalStyle;
