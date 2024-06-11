// App.js

import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styled, { createGlobalStyle } from "styled-components";
import PersonForm from "../src/components/PersonForm";
import PersonList from "../src/components/PersonList";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: auto; 
  }
`;

const Container = styled.div`
  background-color: #f0f8ff;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.image`
  display: flex;
  width: 250;
  height: 250;
  justify-content: center;
`;

const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const ModalContent = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const FixedButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
`;

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const savedPeople = localStorage.getItem("people");
    if (savedPeople) {
      setPeople(JSON.parse(savedPeople));
    }
  }, []);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleAddPerson = (person) => {
    setPeople([...people, person]);
    localStorage.setItem("people", JSON.stringify([...people, person]));
    handleCloseModal();
  };

  const handleDeletePerson = (index) => {
    const updatedPeople = [...people];
    updatedPeople.splice(index, 1);
    setPeople(updatedPeople);
    localStorage.setItem("people", JSON.stringify(updatedPeople));
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <img
          src={require("../src/assets/upaped.png")}
          alt="upaped"
          width="100%"
          height="auto"
        />
        <PersonList people={people} onDeletePerson={handleDeletePerson} />
        <FixedButtonContainer>
          <AddButton onClick={handleOpenModal}>Adicionar Pessoa</AddButton>
        </FixedButtonContainer>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Formulário de Cadastro"
          style={{
            content: {
              width: "80%",
              maxWidth: "400px",
              margin: "0 auto",
              overflow: "hidden",
            },
          }}
        >
          <ModalContent>
            <Title
              style={{
                fontWeight: "bold",
                fontFamily: "sans-serif",
                fontSize: 25,
                paddingBlock: 25,
              }}
            >
              Cadastrar leito
            </Title>
            <PersonForm onAddPerson={handleAddPerson} />
          </ModalContent>
        </Modal>
      </Container>
    </>
  );
};

export default App;
