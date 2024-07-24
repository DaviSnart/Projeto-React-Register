import styled from "styled-components";

export const ContainerItens = styled.div`
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    border-radius: 61px 61px 61px 61px;
    opacity: 0px;

    background:
    linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6)0.84%, 
    rgba(255, 255, 255, 0.6).85%,
    rgba(255, 255, 255, 0.15) 100%);

    padding: 50px 36px;

    ${props => props.isBlur && `
    backdrop-filter: blur(45px);
    min-height: 100vh;
    `}
`;