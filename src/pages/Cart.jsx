import styled from "styled-components";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 500;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  color: ${(props) => props.type === "filled" && "white"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
`;

const Texts = styled.div`
display: flex; ;
flex-direction: column;
`;

const TopText = styled.span`
  text-decoration: underline;
  margin: 0 10px;
  cursor: pointer;
`;

const Details = styled.span`
  display: flex;
  padding: 20px;
  flex-direction: column;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductInfo = styled.div`
  display: flex;
  flex: 2;
  padding: 10px;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
`;


const PriceInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton>Continue</TopButton>
          <Texts>
            <TopText>wishlist</TopText>
            <TopText>shopping cart</TopText>
          </Texts>
          <TopButton type="filled">Checkout</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductInfo>
                <Image src="https://static.wixstatic.com/media/c8be1e_8dafd496e94148bfb2c90b3d5612b11c~mv2.jpg/v1/fill/w_880,h_1334,al_c,q_85,usm_0.66_1.00_0.01/c8be1e_8dafd496e94148bfb2c90b3d5612b11c~mv2.jpg" />
                <Texts>
                  <Details>2 pack</Details>
                  <Details>super rings</Details>
                  <Details>unisex</Details>
                </Texts>
              </ProductInfo>
              <PriceInfo>
              <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceInfo>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
