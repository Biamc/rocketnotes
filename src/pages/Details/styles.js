import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas: 
  "header"
  "content";

  > main{
    grid-area: content;
    overflow-y: scroll;// quando o conteudo nao caber na vertical, entao deve aparecer umapbarra na vertical p scrolar
    padding: 6.4rem 0;
  }
`
//dentro dessa constante, eu estou armazenando dentro dela um elemento html <div>, para colocar uma estilização basta colocar o conteundo dentro do ``

export const Links = styled.ul`
  list-style: none;
  > li{
    margin-top: 1.2rem;
    > a {
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }
`

export const Content = styled.div`
  max-width: 55rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: end;
  }

  > h1 {
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.7rem;
    color: ${({theme}) => theme.COLORS.WHITE};
    margin-top: 6.4rem;
    margin-bottom: 1.6rem;
  }

  > p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;
    display: flex;
    align-items: center;
    text-align: justify;

    color: ${({theme}) => theme.COLORS.WHITE};

    margin-bottom: 5.4rem;
  }
`

