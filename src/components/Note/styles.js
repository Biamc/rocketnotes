import styled from 'styled-components'

export const Container = styled.button`
width: 100%;
background-color:${({theme}) => theme.COLORS.BACKGROUND_700};

font-family: 'Roboto Slab', serif;

border: none;
border-radius: 2.2rem;
padding: 2.2rem;
margin-bottom: 1.6rem;

>h1{
  flex: 1;
  text-align: left;
  
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.2rem;
  color: ${({theme}) => theme.COLORS.WHITE};

  margin-bottom: 2.9rem;
}

> footer{
  width: 100%;
  display: flex;
  margin-top: 2.4rem;
}
`