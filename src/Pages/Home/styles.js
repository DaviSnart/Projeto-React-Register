/*A outra maneira de como se pode estilizar os itens dentro aplicação react é
utilizando o styled components. Depois de baixá-lo é só criar um arquivo para
estilizar, no caso este é styles.js e dentro dele importo o styled from 'styled-
components e crio uma variável para cada item que for ser estilizado.'

Estilizar tudo - 

*/
import styled from 'styled-components'
import BackGround1 from '../../assets/background1.jpg'



//background-size serve para não deixar que a imagem ou algo se repita, mas que preencha todo o campo

export const Container = styled.div`
    display: flex;
//  justify-content: center; //alinhar na vertical
    flex-direction: column;
    align-items: center; //alinhar na horizontal
    gap: 30px;
    background:url("${BackGround1}");

    -webkit-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    /* background-repeat: no-repeat;
    background-attachment: fixed;
    /* background-size:cover; */
    /* background-size: 100% 100%; */


    height: 100%;
    min-height: 100vh

`;

export const Image = styled.img`
    margin-top: 40px;

`;


export const InputLabel = styled.p`
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.407px;
    text-align: left;
    color: #eee;
    margin-left: 25px;


`;

export const Input = styled.input`
    font-size: 24px;
    font-weight: 400;
    line-height: 28.13px;
    text-align: left;
    border: none;
    box-shadow: 0px 4px 4px 0px #00000040;
    background: rgba(255, 255, 255, 0.25);
    padding-bottom: 15px;
    padding-top: 15px;
    padding-left: 25px;
    border-radius: 14px;
    outline: none;
    color: #fff;
    margin-bottom: 34px;
`;

