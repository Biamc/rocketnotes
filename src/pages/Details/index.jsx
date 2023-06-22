/* quando quizer utilizar o fragment

import {Fragment} from 'react'

pode utilizar no return, tanto o <> </>, quanto <fragment> </fragment>
*/
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import {api} from '../../sevices/api'

import {Container, Links, Content} from './styles'
import { Header } from '../../components/Header';
import { Button } from '../../components/Button'
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tags';

export function Details (){

  const [data, setData] = useState(null)
  
  const params = useParams()

  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  async function handleRemove(){
    const confirm = window.confirm('Deseja remover a nota?')

    if(confirm){
      await api.delete(`/notes/${params.id}`)
      navigate('/')
    }
  }

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/notes/${params.id}`)

      setData(response.data)
    }
    fetchNotes()
    
  }, [])
 
  return(
    <Container>
      <Header/>
      {
        data && 
        <main>
          <Content>
            <ButtonText title="Excluir a Nota"
            onClick={handleRemove}/>
            <h1>
              {data.title}
            </h1>
            <p>
              {data.description}
            </p>

            {
              data.links &&
              <Section title="Links úteis">
              <Links>
                {
                  data.links.map(link => (
                    <li key={String(link.id)}>
                      <a target='blank'
                      href={link.url}>
                        {link.url}
                      </a>
                    </li>
                  ))
                  
                }
              
                
                
              </Links>
            </Section>
            }
            {
              data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                    <Tag 
                    key={String(tag.id)}
                    title={tag.name}
                    />

                  ))
                }
                
                
                
              </Section>
            }
            
           
            <Button 
                title='Voltar'
                onClick={handleBack}/>
          </Content>
        </main>
      } 
    
      
    </Container>
    
 )
}
/* 
1 - crie uma função com o mesmo nome da interface seja, o mesmonome do arquivo. todo componente deve começar com a letra maiuscula.
2 - toda interface dev ter um return onde vai estar o conteudo da interface
3 - 

 /* em propriedades boleanas, basta colocar onome da propriedade, nao é necessário colocar true/false */
