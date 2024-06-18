/*A outra maneira de como se pode estilizar os itens dentro aplicação react é
utilizando o styled components. Depois de baixá-lo é só criar um arquivo para
estilizar, no caso este é styles.js e dentro dele importo o styled from 'styled-
components e crio uma variável para cada item que for ser estilizado.'

Estilizar tudo - 

*/
import styled from 'styled-components'
import BackGround1 from './assets/background1.jpg'



     //background-size serve para não deixar que a imagem ou algo se repita, mas que preencha todo o campo

export const Container = styled.div`
    background:url("${BackGround1}");
    background-size:cover;
`;

export const Image = styled.img`

`;

export const H1 = styled.h1`
    
`;

export const ContainerItens = styled.div`

`;

export const InputLabel = styled.p`

`;

export const Input = styled.input`

`;

export const Button = styled.button`

`;