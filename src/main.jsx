import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'; // o theme provider vai prover um tema geral para toda a aplicação
import GlobalStyle  from './styles/global.js';
import theme from'./styles/theme'
import { Routes } from './routes';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Routes/>
    </ThemeProvider>
    
  </React.StrictMode>,
)
/*
seleciona dentro do documento um elemento chamado 'root', e renderiza/insere(render) elementos que fazem parte da pagina, fazendo a aplicação ser bem perfomatioca
*/