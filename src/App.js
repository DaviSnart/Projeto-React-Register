
/*se quiser posso colocar o css dentro react(js) criando um arquivo styles.css
e importando ele com o import './styles.css'

No css react a gente quando vai usar uma classe não escremos class="nome-da-classe"
mas escrevemos className="nome-da-classe" e daí já posso colocar a estilização no css com o nome da classe.

*/


//JSX misturar html com js
//O react retorn código html dentro do java script
//Se eu quiser colocar código javascript dentro do html com react
//Posso o usar as {} e colocar algo de js dentro que certamente vai
//codificar que é código js

import React from "react";

import {
  Container,
  Image,
  H1,
  ContainerItens,
  InputLabel,
  Input,
  Button
} from "./styles";


function App() {
  return (
    <Container>

      <Image />

      <ContainerItens>
        <H1>Opan, fala tu</H1>

          <InputLabel>Nome</InputLabel>
            <Input placeholder="Nome"></Input>

          <InputLabel>Idade</InputLabel>
            <Input placeholder="Idade"></Input>

            <Button>Cadastrar</Button>

      </ContainerItens>

    </Container>
  );
}

export default App