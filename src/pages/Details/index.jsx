/* quando quizer utilizar o fragment

import {Fragment} from 'react'

pode utilizar no return, tanto o <> </>, quanto <fragment> </fragment>
*/

import {Container, Links, Content} from './styles'
import { Header } from '../../components/Header';
import { Button } from '../../components/Button'
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tags';

export function Details (){
 
  return(
    <Container>
      <Header/>
      <main>
        <Content>
          <ButtonText title="Excluir a Nota"/>
          <h1>
            Introdução ao React
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          </p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="https://rocketseat.com.br">"https://rocketseat.com.br"</a>
              </li>
              <li>
                <a href="https://rocketseat.com.br">"https://rocketseat.com.br"</a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="Express"></Tag>
            <Tag title="Node.js"></Tag>
          </Section>
          <Button title='Voltar' />
        </Content>
      </main>
      
    </Container>
    
 )
}
/* 
1 - crie uma função com o mesmo nome da interface seja, o mesmonome do arquivo. todo componente deve começar com a letra maiuscula.
2 - toda interface dev ter um return onde vai estar o conteudo da interface
3 - 

 /* em propriedades boleanas, basta colocar onome da propriedade, nao é necessário colocar true/false */
