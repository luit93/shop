import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';const Container = styled.div`
height: 60px;

`
const Wrapper = styled.div`
padding: 10px 20px;
// background-color: maroon;
display: flex;
justify-content: space-between;
align-items:center;
`

const Left = styled.div`
flex:1;
`
const Center = styled.div`flex:1;
tex-align:center;
`
const Logo = styled.h1`
font-weight: bold;`
const Right = styled.div`flex:1;
display:flex;
align-items:center;

`
const Language = styled.span`
font-size:14px;
cursor:pointer;
`
const SearchBar  = styled.div`
border: 1px solid black;
display:flex;
align-items:center;
margin-left:20px;
padding:7px;
`
const SearchInput = styled.input`
border:none;
`



const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Left>Left</Left>
        <Center>
          <Logo>LUIT . s</Logo>
        </Center>
        <Right>
          <Language>EN</Language>
          <SearchBar>
<SearchInput/>
<SearchIcon/>
          </SearchBar>
        </Right>
      </Wrapper>
      </Container>
  )
}

export default Header