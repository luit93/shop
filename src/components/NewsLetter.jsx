import React from "react";
import styled from "styled-components";
import Send from "@mui/icons-material/Send";

//styled components
const Container = styled.div`
  height: 60vh;
  background-color: bisque;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
`;
const Info = styled.div`
  font-size: 25px;
  margin-bottom: 20px;
  font-weight: 300;
`;
const InputContainer = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  width: 50%;
  background-color: aliceblue;
  border: solid 1px lightgray;
`;
const Input = styled.input`
  flex: 8;
  border: none;
  padding: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  color: white;
  background-color: teal;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Info>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        obcaecati sapiente.
      </Info>
      <InputContainer>
        <Input placeholder="subscribe for updates" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
