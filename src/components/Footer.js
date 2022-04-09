import styled from "styled-components";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  
  /* align-items: flex-start;
  justify-content: space-between; */
`;
const Logo = styled.h1``;
const Desc = styled.p`
margin: 20px 0;


`;
const Socials = styled.div`display: flex;`;
const SocialIcon = styled.div`
height: 40px;
width: 40px;
border-radius: 50%;
color: aliceblue;
background-color: ${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
margin-bottom: 20px;`
const List = styled.ul`
list-style:none;
margin: 0;
padding: 0;
display: flex;
flex-wrap:wrap;`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;`

const Right = styled.div`
  flex: 1;
`;
const ContactItem = styled.div`
 
`;



const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LUIT. S</Logo>
        <Desc> 🦑 🍄 👽 🤖 🦖 Lorem ipsum dolor sit amet consectetur adipisicing elit.</Desc>
        <Socials>
          <SocialIcon color="navy">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="purple">
            <Instagram />
          </SocialIcon>
        </Socials>
      </Left>
      <Center>
<Title>Links</Title>
<List>
    <ListItem>Home</ListItem>
    <ListItem>Cart</ListItem>
    <ListItem>Account</ListItem>
    <ListItem>Orders</ListItem>
    <ListItem>About</ListItem>
    <ListItem>FAQ</ListItem>
    <ListItem>Terms</ListItem>
    <ListItem>Privacy</ListItem>
   
</List>


      </Center>
      <Right>
          <Title>Contact</Title>
          <ContactItem>luit99@gmail.com</ContactItem>
          <ContactItem>000-999-999</ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
