import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;
const NotificationBar = () => {
  return <Container>SALE!!! SALE !!! SALE !!!</Container>;
};

export default NotificationBar;
