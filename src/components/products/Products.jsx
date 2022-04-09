import styled from "styled-components"
import { popularProducts } from "../../data/PopularProductsData"
import Product from "./Product"
const Container = styled.div`
padding: 20px;
display: flex;
`
const Products = () => {
  return (
    <Container>{popularProducts.map(i=><Product item={i} key={i.id}/>)}</Container>
  )
}

export default Products