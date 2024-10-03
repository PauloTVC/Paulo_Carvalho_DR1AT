import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";

const Form = styled.form`
  border: 2px solid black;
  background-color: steelblue;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: start;
`;

const DarkForm = styled.form`
  border: 2px solid #e0e0e0;
  background-color: #1e3a5f;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  color: #e0e0e0;
  display: flex;
  flex-direction: column;
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const Input = styled.input`
  margin: 2px;
  border-radius: 10px;
  border: 5px solid lightsteelblue;
  &::placeholder {
  }
`;

const DarkInput = styled.input`
  border-radius: 10px;
  margin: 2px;
  border: 5px solid #5a6b82;
  &::placeholder {
    color: black;
  }
`;

const DarkP = styled.p`
  color: #f0f0f0;
`;

const TextArea = styled.textarea`
  margin: 2px;
  border-radius: 10px;
  border: 5px solid lightsteelblue;
`;

const DarkTextArea = styled.textarea`
  border-radius: 10px;
  margin: 2px;
  border: 5px solid #5a6b82;
`;

export default function ContactPage() {
  const [dark, setDark] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setDark(mediaQuery.matches); // Ajusta o estado com base no esquema atual

    const handleChange = (e) => {
      setDark(e.matches); // Atualiza o estado quando o esquema de cores muda
    };

    mediaQuery.addEventListener("change", handleChange); // Ouve mudanças no esquema

    return () => {
      mediaQuery.removeEventListener("change", handleChange); // Remove o listener quando o componente desmonta
    };
  }, []);

  return (
    <Div>
      {dark ? (
        <DarkForm>
          <DarkP>Sent message!</DarkP>
          <DarkInput placeholder="Full Name" type="text" />
          <DarkInput placeholder="Email" type="email" />
          <DarkTextArea />
          <Button Text="Sent" onClick={handleClick} />
        </DarkForm>
      ) : (
        <Form>
          <p>Sent message!</p>
          <Input placeholder="Full Name" type="text" />
          <Input placeholder="Email" type="email" />
          <TextArea />
          <Button Text="Sent" onClick={handleClick} primary={"secundary"} />
        </Form>
      )}
      <section></section>
    </Div>
  );
}
