import styled from "styled-components"
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
 

const Container = styled.div`
flex: 1;
margin: 5px;
`
const Circle = styled.div``
const Image = styled.img``
const Icon = styled.div``
const Info = styled.div``
const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
            <AddShoppingCart/>
            </Icon>
            <Icon>
                <FavoriteBorder/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product