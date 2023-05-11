import  {Container}  from './styles.js';

export function Button({title, loading = false, ...rest}){
  return (
    <Container 
      type="button"
      disable={loading}
      {...rest}
      > 
        {loading ?'Carregando...' : title}
        {/* if intenario = se loading for true então coloque 'Carregando', se for false coloque o conteúdo de title 
        
        o ... rest operator serve para caso a tag tenha diversar propriedades e não seja necessário colocalas como parametros na função, o operator serve como uma estratégia  p colocar as propriedades necessárias e em seguida coloque o rest operator
        
        loading = false , serve na hipotese de não ter essa informação na tag, vc deve considera-la falsa. Serve tbem para definir um padrão para uma propiedade opcional*/}
    </Container>
  )
}

// para acessar a propriedade de um button vctem duas opções:

// export function Button(props){
//   return (
//     <Container type="button">
//      {props.title}
//     </Container>
//   )
// }// a acessa propriedades, depois acessa o title

// export function Button({title}){
//   return (
//     <Container type="button">
//      {title}
//     </Container>
//   )
// }// forma desestruturada