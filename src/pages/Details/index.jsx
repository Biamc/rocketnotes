/* quando quizer utilizar o fragment

import {Fragment} from 'react'

pode utilizar no return, tanto o <> </>, quanto <fragment> </fragment>
*/

import {Container} from './styles'

export function Details (){
 
  return(
    <Container>
      <body>
        <h1>Hello!</h1>
      </body>
      
    </Container>
    
 )
}
/* 
1 - crie uma função com o mesmo nome da interface seja, o mesmonome do arquivo. todo componente deve começar com a letra maiuscula.
2 - toda interface dev ter um return onde vai estar o conteudo da interface
3 - 
*/