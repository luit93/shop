import React from 'react'
import styled from "styled-components"
import {mobileSize} from '../../responsive'

const Container = styled.div`
flex:1;
margin: 3px;
position:relative;
height:40vh;`
const Image = styled.img`
width:100%;
height:90%;
object-fit:cover;
${mobileSize({ height:"20vh"})}

`

const Info = styled.div`
position:absolute;
top:0;
left:0;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Title = styled.h1`
margin-bottom: 20px;
color: #f17807d2;
text-decoration: underline overline wavy 5px ;


`
const Button = styled.button`
border:none;
padding: 10px;
background-color: white;
color: grey;
cursor: pointer;
`


const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>EXPLORE</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem