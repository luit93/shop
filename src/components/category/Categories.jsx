import styled from "styled-components"
import { categories } from "../../data/CategoryData"
import CategoryItem from "./CategoryItem"
import {mobileSize} from '../../responsive'
//styled components
const Container = styled.div`
display: flex;
padding:20px;
justify-content: space-between;
${mobileSize({ padding:"0", flexDirection:"column"})}

`




const Categories = () => {
  return (
    <Container>
        {categories.map(i=><CategoryItem item={i} key={i.id}/>)}
    </Container>
  )
}

export default Categories