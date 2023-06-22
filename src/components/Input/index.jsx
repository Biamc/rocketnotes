import {Container} from './styles';

export function Input({ico: Icon, ...rest}){
  return (
    <Container>
      {Icon && <Icon size={20}/>} 
      {/* se o icone existir, mostre ele */}
      <input {...rest} />
    </Container>
  )
}