import { useState } from 'react';

import {FiArrowLeft, FiMail, FiLock, FiUser, FiCamera} from 'react-icons/fi'
import {useNavigate} from 'react-router-dom'

import {useAuth} from '../../hooks/auth'

import {api} from '../../sevices/api'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { Container, Avatar, Form } from './styles';

import {Input} from '../../components/Input'
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function Profile(){
  const {user, updateProfile} = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()

  function handleback(){
    navigate(-1)
  }

  async function handleUpdate(){
    const updated = {
      name, 
      email, 
      password: newPassword,
      old_password: oldPassword,
     }
    
     const userUpdated = Object.assign(user, updated)
     

     await updateProfile({user: userUpdated, avatarFile})
     navigate('/')
  }

  function handleChangeAvatar(event){
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }
  return(
    <Container>
      <header>
       <button
        type='button'
        onClick={handleback}>
        <FiArrowLeft/>
       </button>
          
      
      </header>
      <Form>
        <Avatar>
          <img src={avatar} 
          alt="Foto do Usuário" />
          
          <label htmlFor="avatar">
          <FiCamera/>
          
          <input 
          id="avatar" 
          type="file"
          onChange={handleChangeAvatar} />
        </label>
        </Avatar>
        
        <Input
        placeholder="Nome"
        type="text"
        ico={FiUser}
        value={name}
        onChange={event => setName(event.target.value)}
        />
        <Input
        placeholder="E-mail"
        type="text"
        ico={FiMail}
        value={email}
        onChange={event => setEmail(event.target.value)}
        />
        <Input
        placeholder="Senha atual"
        type="password"
        ico={FiLock}
        
        onChange={event => setOldPassword(event.target.value)}
        />
        <Input
        placeholder="Nova senha"
        type="password"
        ico={FiLock}
        
        onChange={event => setNewPassword(event.target.value)}
        />

        <Button title="Salvar" 
        onClick={handleUpdate}/>
      </Form>
    </Container>
    
  )
}