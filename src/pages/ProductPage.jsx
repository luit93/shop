import styled from "styled-components";
// import ProductFilter from "../components/products/ProductFilter";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
  border: 1px solid;
`;

const Image = styled.img`
  flex: 1;
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  margin: 20px 25px;
`;

const Title = styled.h1`
  font-weight: 300;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span``;

const AddToCartContainder = styled.div`
  display: flex;
  width: 50%;
  font-weight: 700;
  align-content: center;
  justify-content: space-between;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border: solid teal 1px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
font-weight: 500;
  padding: 15px;
  border: solid teal 1px;
  background-color: white;
  cursor: pointer;
  &:hover{
      background-color: beige;
  }
`;

const ProductPage = () => {
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src="https://cdn.domestika.org/c_fit,dpr_auto,f_auto,t_base_params,w_820/v1614674099/content-items/007/255/341/DP1-original.jpg?1614674099" />
        </ImageContainer>
        <InfoContainer>
          <Title>Daft Punk helmet</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, expedita!
          </Desc>
          <Price>$999</Price>

          <AddToCartContainder>
            <AmountContainer>
              <Remove />
              <Amount>0</Amount>
              <Add />
            </AmountContainer>
            <Button>Add to Cart</Button>
          </AddToCartContainder>
        </InfoContainer>
        {/* <ProductFilter filter="color"/> */}
      </Wrapper>
    </Container>
  );
};

export default ProductPage;
