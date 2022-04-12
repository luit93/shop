import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`flex:1;border:1px solid;`;

const Image = styled.img`
flex:1;
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`flex:1; padding: 0 50px;`;


const Title = styled.h1`font-weight: 300;`;

const Desc = styled.p`margin: 20px 0;`;

const Price = styled.span`
font-weight: 200; font-size:30px;`;

const ProductPage = () => {
  return <Container>
<Wrapper>
    <ImageContainer>
        <Image src="https://cdn.domestika.org/c_fit,dpr_auto,f_auto,t_base_params,w_820/v1614674099/content-items/007/255/341/DP1-original.jpg?1614674099"/>
    </ImageContainer>
    <InfoContainer>
        <Title>Daft Punk helmet</Title>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, expedita!</Desc>
        <Price>$999</Price>
    </InfoContainer>
</Wrapper>

  </Container>;
};

export default ProductPage;
