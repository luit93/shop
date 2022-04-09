import styled from "styled-components"
import { categories } from "../../data/CategoryData"
import CategoryItem from "./CategoryItem"

//styled components
const Container = styled.div`
display: flex;
padding:20px;
justify-content: space-between;
`




const Categories = () => {
  return (
    <Container>
        {categories.map(i=><CategoryItem item={i} key={i.id}/>)}
    </Container>
  )
}

export default Categories