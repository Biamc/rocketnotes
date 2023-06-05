import { useState, useEffect } from 'react';
import {api} from '../../sevices/api'
import {FiPlus} from 'react-icons/fi'

import {Container, Brand, Menu, Search, Content, NewNote} from './styles.js'

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import {Input} from '../../components/Input'
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';



export function Home(){
  
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [notes, setNotes] = useState([])
  
  function handleTagsSelecteds (tagName){

    const alreadySelected = tagsSelected.includes(tagName)
    
    if(alreadySelected){
      const filteredTags = tagsSelected.filter(tag => tag !== tagName)
      setTagsSelected(filteredTags)
    }else{

    setTagsSelected(prevState => [...prevState, tagName])
    }
  }
  useEffect(() => {
    async function fetchTags(){
      const response = await api.get('/tags')
      setTags(response.data)
    }
    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
      setNotes(response.data)
    }
    fetchNotes()
  }, [tagsSelected, search])


  return(
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header/>
      <Menu>
        <li >
          <ButtonText 
           title='Todos'
           onClick={() => handleTagsSelecteds('all')}
           isactive={tagsSelected.length === 0}
           />
        </li>
        {
          tags && tags.map(tag =>(
            <li key={String(tag.id)}>
              <ButtonText
              title={tag.name}
              onClick={() => handleTagsSelecteds(tag.name)}
              isactive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))
        }
        
        

        
        
      </Menu>
      <Search>
        <Input 
        placeholder="Pesquizar pelo título" 
        onChange={() => setSearch(e.target.value)}        
        />
      </Search>

      <Content>
        <Section title="Minhas Notas">
          {
            notes.map(note => (
            <Note
            key={String(note.id)}
            data={note}/>

            ))
        }
        </Section>
      </Content>
     
      <NewNote to="/new">
        <FiPlus/>
        Criar Nota
      </NewNote>
      
      
    </Container>
  )
}
// 