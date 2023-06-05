import {useState} from 'react'//é um gancho(hook)
//é um estado 

import {FiLogIn, FiMail, FiLock} from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom";

import {api} from '../../sevices/api'


import { Container, Form, Background } from './styles';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';

export function SignUp (){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSignUp (){
    if(!name || !email || !password){
      return alert ('É necessário preencher todos os campos')
    }

    api.post('/users', {name, email, password})
    .then(() => {
      alert('Usuário cadastrado com sucesso')
      navigate('/')
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      } else{
        alert('Não foi possível cadastra o usuário')
      }
    })
  }

  return(
    <Container>
      <Background/>
      <Form>
      <h1>Rocket Notes</h1>
        <p>
          Aplicação para salvar e gerenciar seus links úteis.
        </p>

        <h2>Crie sua conta</h2>
        <Input  placeholder="Nome"
        type="text"
        ico={FiLogIn}
        onChange={event => setName(event.target.value)}
        />
        <Input  placeholder="E-mail" 
        type="text"
        ico ={FiMail}
        onChange={event => setEmail(event.target.value)}
        />
        <Input  placeholder="Senha" 
        type="password"
        ico ={FiLock}
        onChange={event => setPassword(event.target.value)}
        />

        <Button title="Cadastrar"
        onClick= {handleSignUp}/>
        <Link to="/"> <ButtonText title="Voltar para o Login" isActive/></Link>
      </Form>
      
    </Container>
  )
}