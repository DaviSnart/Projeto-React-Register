import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/globalStyle.js';
import Routes from './routes';
//importando com o default eu coloco da maneira como está
// em cima, se não for por default eu coloco o nome entre as {}


ReactDOM.render(
    <>
        <Routes /> <GlobalStyle />
    </>,
    document.getElementById("root")
);

/*no react os componentes sempre tem que ficar dentro de outro componente Pai, senão não roda
por isso colocamos o nosso app e o nosso globalStyles dentro de uma div*/