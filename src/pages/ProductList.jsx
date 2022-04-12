import styled from "styled-components";
import Products from "../components/products/Products";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
 font-size:20px;
 font-weight: 500;
 margin-right: 20px;
`;

const Select= styled.select`
margin-right: 20px;`
const Option= styled.option``


const ProductList = () => {
  return (
    <Container>
      <Title>Category Name</Title>
      <FilterContainer>
        <Filter><FilterText>Filter by:</FilterText>
        <Select>
            <Option disabled selected>color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>orange</Option>
            <Option>green</Option>
        </Select>
        
        <Select>
            <Option disabled selected>size</Option>
            <Option>xs</Option>
            <Option>s</Option>
            <Option>m</Option>
            <Option>l</Option>
            <Option>xl</Option>
        </Select>
        
        </Filter>
        <Filter><FilterText>Sort by:</FilterText>
        <Select>
            <Option  selected>new</Option>
            <Option>price +</Option>
            <Option>price -</Option>
            <Option>popular</Option>
        </Select>
        
        </Filter>
        
        
      </FilterContainer>
      <Products/>
    </Container>
  );
};

export default ProductList;
