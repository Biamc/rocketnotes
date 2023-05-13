import {FiArrowLeft, FiMail, FiLock, FiUser, FiCamera} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import { Container, Form } from './styles';

import {Header} from '../../components/Header'
import {Input} from '../../components/Input'
import {TextArea} from '../../components/TextArea';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';

export function New(){
  return(
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">Voltar</Link>
          </header>
          <Input
          placeholder="Título"
          type="text"
          />
          <TextArea placeholder="Observações"/>
          
          <Section title="Links úteis"></Section>
            <NoteItem value="htpp://www.rocketseat.com.br"/>
            <NoteItem isNew placeholder="Novo Link"/>
          
          <Section title="Marcadores"></Section>
            <div className='tags'>
              <NoteItem value="React"/>
              <NoteItem isNew placeholder="Novo Marcador"/>
            </div>
          <Button title="Salvar"/>

        </Form>
      </main>
      
      
      
    </Container>
  )
}