import styled from "styled-components";

export const Button = styled.button`
text-decoration: none;
    font-size: 18px;
    color: #fff;
    background: ${props => props.isBack ? 'transparent' : '#000000CC'};
    margin-top:100px;
    width: 342px;
    height: 74px;
    left: 35px;
    gap: 0px;
    border-radius: 14px 14px 14px 14px;
    opacity: 0px;
    border: ${props => props.isBack ? '1px solid #fff' : 'none'}; 
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;


    &:hover {
        opacity: 0.8;
    }
    &:active{
        opacity: 0.55;
    }

    img{transform:${props => props.isBack ? 'rotateY(180deg)' : ''};
    }


`;


// @media (max-width: 1800px){
//     height: 100vh;
// }