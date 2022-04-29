import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Badge } from '@mui/material';
import{mobileSize} from '../../responsive'

const Container = styled.div`
height: 60px;
padding-bottom: 20px;
${mobileSize({ height:"50px"})}

`
const Wrapper = styled.div`
padding: 10px 20px;
// background-color: maroon;
display: flex;
justify-content: space-between;
align-items:center;
${mobileSize({ padding:"10px  0"})}
`

const Left = styled.div`

display:flex;
flex:1;
align-items:center;
justify-content: flex-start;
`
const MenuItem = styled.div`
 padding:20px;
// margin:15px;
font-size:14px;
cursor:pointer;
${mobileSize({ fontSize:"12px", marginLeft:"11px"})}

`
const Center = styled.div`flex:1;
text-align:center;
`
const Logo = styled.h1`
font-weight: bold;
${mobileSize({ fontSize:"25px"})}
`
const Right = styled.div`flex:1;
display:flex;
align-items:center;
justify-content: flex-end;
${mobileSize({ flex:2,justifyContent:"center"})}

`
const Language = styled.span`
font-size:14px;
cursor:pointer;
${mobileSize({ display:"none"})}
`
const SearchBar  = styled.div`
border: 1px solid black;
display:flex;
align-items:center;
margin-left:20px;
padding:7px;
${mobileSize({ width:"50px"})}
`
const SearchInput = styled.input`
border:none;
`



const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuItem>Register</MenuItem>
          <MenuItem>Log In</MenuItem>
          <MenuItem>
          <Badge badgeContent={0} color="primary">
  <LocalMallOutlinedIcon />
</Badge></MenuItem>
          
        </Left>
        <Center>
          <Logo>LUIT . s</Logo>
        </Center>
        <Right>
          <Language>EN</Language>
          <SearchBar>
<SearchInput placeholder="Search"/>
<SearchIcon/>
          </SearchBar>
        </Right>
      </Wrapper>
      </Container>
  )
}

export default Header