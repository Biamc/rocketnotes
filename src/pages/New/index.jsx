import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { Container, Form } from './styles';

import {api} from '../../sevices/api'

import {Header} from '../../components/Header'
import {Input} from '../../components/Input'
import {TextArea} from '../../components/TextArea';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function New(){

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

function handleAddLink(){
  setLinks((previusState) =>[...previusState , newLink])
  //... previusState, é como se tivesse pegado todo o conteudo do estado anterior e tivesse despejado na nova lista, add o prox.link
  setNewLink('')
}

function handleRemoveLink(deleted){
  setLinks(previusState => previusState.filter(link => link !== deleted))

}

function handleAddTag(){
  setTags((previusState) => [...previusState, newTag])
  setNewTag('')
}
function handleRemoveTag(deleted){
  setTags(previusState => previusState.filter(tag => tag !== deleted))
}

async function handleNewNote (){
  if (!title){
    return alert('Digite o título da nota.')
  }
  if(newLink){
    return alert('Você deixou um link no campo para adicionar , mas não clicou em adcionar. Clique para adicionar')
  }
  if(newTag){
    return alert('Você deixou uma tag no campo para adicionar , mas não clicou em adcionar. Clique para adicionar')
  }
  await api.post('/notes', {
    title,
    description,
    links,
    tags
  })
  alert('Nota criada com sucesso')
  navigate(-1)
}

  return(
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <ButtonText
            title='Voltar'
            onClick={handleBack}/>
            
          </header>
          <Input
          placeholder="Título"
          type="text"
          value={title}
          onChange={event => setTitle(event.target.value)}
          />
          <TextArea 
          placeholder="Observações"
          value={description}
          onChange={event => setDescription(event.target.value)}
          />
          
          <Section title="Links úteis"></Section>
            {
              links.map((link, index) =>
                <NoteItem 
                key={String(index)}
                value={link}
              
                onClick={() => handleRemoveLink(link)}/>
              )}
            <NoteItem 
            isNew 
            placeholder="Novo Link"
            value={newLink}
            onChange={event => setNewLink(event.target.value)}
            onClick={handleAddLink}/>
          
          <Section title="Marcadores"></Section>
            <div className='tags'>
              {
                tags.map((tag, index) => 
                 <NoteItem 
                 key={String(index)}
                 placeholder="Novo Marcador"
                 value={tag}
                 
                 onClick={() => handleRemoveTag(tag)}/>
                )}
              <NoteItem 
              isNew 
              placeholder="Novo Marcador"
              value={newTag}
              onChange={event => setNewTag (event.target.value)}
              onClick={handleAddTag}/>
            </div>
          <Button 
          title="Salvar"
          onClick={handleNewNote}/>

        </Form>
      </main>
      
      
      
    </Container>
  )
}