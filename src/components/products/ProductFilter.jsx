import styled from "styled-components";

const Container = styled.div``;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
`;
const FilterTitle = styled.span`
  font-weight: 200;
  font-size: 25px;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer; ;
`;
const FilterSelect = styled.select``;
const FilterOption = styled.option``;

const ProductFilter = (filter) => {
  return (
    <Container>
      <FilterContainer>
       
          <Filter>
            <FilterTitle>Color</FilterTitle>
            <FilterColor color="black" />
            <FilterColor color="red" />
            <FilterColor color="green" />
            <FilterColor color="orange" />
            <FilterColor color="blue" />
            <FilterColor color="yellow" />
            <FilterColor color="silver" />
          </Filter>

          <Filter>
            <FilterTitle>Size</FilterTitle>
            <FilterSelect>
              <FilterOption>XS</FilterOption>
              <FilterOption>S</FilterOption>
              <FilterOption>M</FilterOption>
              <FilterOption>L</FilterOption>
              <FilterOption>XL</FilterOption>
            </FilterSelect>
          </Filter>
      </FilterContainer>
    </Container>
  );
};

export default ProductFilter;
