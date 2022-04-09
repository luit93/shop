import styled from "styled-components"
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
 

const Info = styled.div`
opacity: 0;
position: absolute;
width: 100%;
height: 100%;
top: 0;left:0;
align-items: center;
z-index: 5;
display: flex;
background-color: rgba(0,0,0,0.2);
justify-content: center;
transition: all 0.5s ease;
`
const Container = styled.div`
flex: 1;
margin: 5px;
height: 350px;
min-width: 250px ;
display: flex;
align-items: center;
justify-content: center;
background-color: #d0e0e0;
position: relative;
&:hover ${Info}{
    opacity: 1;
}
`
const Circle = styled.div`
border-radius: 50%;
height: 250px;width: 250    px;
background: white;
position: absolute;
`
const Image = styled.img`
z-index: 3;
height: 75%;;
`
const Icon = styled.div`
cursor: pointer;
align-items: center;
justify-content: center;
display: flex;
height: 40px;
width: 40px;
border-radius: 50%;
margin: 10px;
background-color: aliceblue;
transition: all 0.5s ease;
 &:hover{
    background-color: beige;
    transform: scale(1.1);
}
`

const Product = ({item}) => {
  return (
    <Container>
        <Circle></Circle>
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