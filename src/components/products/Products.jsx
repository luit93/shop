import styled from "styled-components"
import { popularProducts } from "../../data/PopularProductsData"
import Product from "./Product"
const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
const Products = () => {
  return (
    <Container>
     
        {popularProducts.map(i=><Product item={i} key={i.id}/>)}</Container>
  )
}

export default Products