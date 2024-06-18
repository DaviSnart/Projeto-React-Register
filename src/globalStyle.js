import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
// posso exportar assim como está acima ou criando uma constante desta maneira:
// const globalStyle = creacrGlobalStyle ``
// e colocar o export default e o nome da constante que colocamos a extensão dentro

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


`;