// PersonList.js
import React from "react";
import styled from "styled-components";
import Divider from "@mui/material/Divider";

const ListContainer = styled.div`
  background-color: #f0f8ff;
  padding: 20px;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -10px;
`;

const ListItem = styled.div`
  width: 50;
  margin-right: 14px;
  margin-bottom: 20px;
`;

const Square = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 10px;
  height: 200px;
  width: 300px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const Leito = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: center;
  border-bottom: 20px;
  font-family: sans-serif;
  width: 100%;
`;

const Name = styled.div`
  font-size: 35px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: sans-serif;
  margin-bottom: 5px;
`;

const Gender = styled.div`
  font-size: 16px;
  font-family: sans-serif;
  margin-bottom: 5px;
`;
const Age = styled.div`
  font-size: 16px;
  font-family: sans-serif;
  margin-bottom: 5px;
`;
const Obs = styled.div`
  font-size: 16px;
  font-family: sans-serif;
  overflow-wrap: break-word;
  word-wrap: break-word;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 10px;
  margin-bottom: 10px;
  margin-right: 5px;
`;

const PersonList = ({ people, onDeletePerson, onEditPerson }) => {
  return (
    <ListContainer>
      <List>
        {people.map((person, index) => (
          <ListItem key={index}>
            <Square>
              <Leito>Leito: {person.bed}</Leito>
              <Divider style={{ margin: 5 }} />
              <Name>{person.name}</Name>
              <Gender>Sexo: {person.gender}</Gender>
              <Age>Idade: {person.age}</Age>
              <Obs>{person.observation}</Obs>
            </Square>
            <Button onClick={() => onDeletePerson(index)}>Excluir</Button>
          </ListItem>
        ))}
      </List>
    </ListContainer>
  );
};

export default PersonList;
