import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-family: 'Roboto Slab', serif;
    font-size: 62.5%;
  }

  body{
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${ ( {theme} ) => theme.COLORS.WHITE};
    
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;  
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`
// o ${}, deve utilizar dessa forma quando vc quer colocar dentro de um conteudo de texto, eu quero colocar oconteudode uma variável
//color: ${ (props) => props.theme.COLORS.WHITE}
//color: ${ ( {theme} ) => theme.COLORS.WHITE} = quando vc desestrutur o theme de propeties