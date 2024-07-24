
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

import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import Avatar from "../../assets/avatar.jpg";

import Arrow from "../../assets/arrow.jpg";

import Trash from "../../assets/trash.jpg";

import H1 from "../../components/Title"

import ContainerItens from "../../components/ContainerItens";

import Button from "../../components/Button";

import {
  Container,
  Image,
  User
} from "./styles";
import { click } from "@testing-library/user-event/dist/click";


function Users() {
  // const users = [];
  const [users, setUsers] = useState([]);
  const history = useHistory() // o useHistory virou atualmente o useNavigate

  //os estados servem meio que para substituir algo 
  // const [name, setName] = useState([]);   //que a gente guarda numa constante normalmente
  // const [age, setAge] = useState([]);
  //<= essa paradinha aí serve pra poder
  //  modificar sem dar erro no código react, e também dentro colocamos um valor inicial que seria um array vazio

  useEffect(() => {
    async function fetchUsers() {
      const {data: newUser} = await axios.get("http://localhost:3001/users");

      setUsers(newUser);
    }

    fetchUsers()
  }, [])


  async function deleteUSer(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUser = users.filter(user => user.id !== userId)
    setUsers(newUser);
  }

  function goBackPage() {
    history.push('/')
  }


  return (
    <Container>

      <Image alt="image-people" src={Avatar} />

      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}> <p> {user.name} </p> <p> {user.age} </p>
              <button onClick={() => deleteUSer(user.id)}><img src={Trash} alt="button-trash"></img></button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>  <img alt="arrow" src={Arrow} />  Voltar </Button>


      </ContainerItens>


    </Container>
  );
}

export default Users