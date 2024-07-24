
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
import axios from "axios";

import React, { useState, useRef, } from "react";

import { useHistory } from "react-router-dom"; //hoje não é mais usado o useHistory, a versão agora é useNavigate

import People from "../../assets/people.jpg";

import Arrow from "../../assets/arrow.jpg";

import { H1 } from "../../components/Title/styles";

import { ContainerItens } from "../../components/ContainerItens/styles";

import { Button } from "../../components/Button/styles";


import {
  Container,
  Image,
  InputLabel,
  Input,
} from "./styles";
import { click } from "@testing-library/user-event/dist/click";


function App() {
  // const users = [];
  const [users, setUsers] = useState([]);
  const inputName = useRef() //use ref serve de maneira diferente do useState, porque ele vai
  const inputAGe = useRef() //  guardar o valor somente quando eu clicar no meu botão
  const history = useHistory()

  //os estados servem meio que para substituir algo 
  // const [name, setName] = useState([]);   //que a gente guarda numa constante normalmente
  // const [age, setAge] = useState([]);
  //<= essa paradinha aí serve pra poder
  //  modificar sem dar erro no código react, e também dentro colocamos um valor inicial que seria um array vazio

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAGe.current.value
    });
    console.log(newUser)
    setUsers([...users, newUser,]) //spread operator usa-se os três pontinhos "..."
    // esse cidadão faz com que peguemos os itens do ultimo array e coloque-os no novo criado após a função ser chamada

    history.push('/usuarios') // o history que agora é o navigate não precisa masi do .push

    // REACT HOOK => useEffect (efeito colateral)
  }
  


  return (
    <Container>

      <Image alt="image-people" src={People} />

      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAGe} placeholder="Idade"></Input>

        <Button onClick={addNewUser}>Cadastrar <img alt="arrow" src={Arrow} /> </Button>           {/* é assim quese linka rotas no react js */}
        {/* <ul>
          {users.map((user) => (
            <User key={user.id}> <p> {user.name} </p> <p> {user.age} </p>
              <button onClick={() => deleteUSer(user.id)}><img src={Trash} alt="button-trash"></img></button>
            </User>
          ))}
        </ul> */}


      </ContainerItens>


    </Container>
  );
}

export default App