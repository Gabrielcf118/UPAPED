import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CheckContainer = styled.div`
  display: flex;
  padding: 5px;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const PersonForm = ({ onAddPerson, editingPerson }) => {
  const [name, setName] = useState("");
  const [bed, setBed] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [observation, setObservation] = useState("");

  useEffect(() => {
    if (editingPerson) {
      setName(editingPerson.name || "");
      setBed(editingPerson.bed || "");
      setGender(editingPerson.gender || "");
      setAge(editingPerson.age || "");
      setObservation(editingPerson.observation || "");
    }
  }, [editingPerson]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !bed || !gender) return;
    onAddPerson({ name, bed, gender, age, observation });
    setName("");
    setBed("");
    setGender("");
    setAge("");
    setObservation("");
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Leito"
          value={bed}
          onChange={(e) => setBed(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <CheckContainer style={{ fontFamily: "sans-serif" }}>
          <label>
            <Input
              type="checkbox"
              checked={gender === "masculino"}
              onChange={(e) => setGender(e.target.checked ? "masculino" : "")}
            />
            Masculino
          </label>
          <label style={{ paddingInline: 15 }}>ou</label>
          <label>
            <Input
              type="checkbox"
              checked={gender === "feminino"}
              onChange={(e) => setGender(e.target.checked ? "feminino" : "")}
            />
            Feminino
          </label>
        </CheckContainer>
        <Input
          type="number"
          placeholder="Idade"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Observação"
          value={observation}
          onChange={(e) => setObservation(e.target.value)}
        />
        <Button type="submit">
          {editingPerson ? "Salvar Alterações" : "Adicionar Pessoa"}
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PersonForm;
