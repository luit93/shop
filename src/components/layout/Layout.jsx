import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import NotificationBar from "./NotificationBar";

import "../../App.css";
const Container = styled.div`

`;
const Layout = ({ children }) => {
  return (
    <Container class="app-body">
      <NotificationBar />

      <Header />
      {children}
      <Footer class="app-footer" />
    </Container>
  );
};

export default Layout;
