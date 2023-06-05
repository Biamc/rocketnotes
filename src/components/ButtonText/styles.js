import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  color: ${({theme, isactive}) => isactive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
  border: none;
  font-family: 'Roboto Slab';
  
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.1rem;
 
`
