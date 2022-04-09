import styled from "styled-components";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { sliderItems } from "../data/HomeData";
import { useState } from "react";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* background-color: coral; */
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #dd6f47;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  z-index: 5;
`;

const Wrapper = styled.div`
height:100%;
display: flex;
transition: all 1.69s ease ;
transform: translateX(${props=>props.sliderIndex * -100}vw)`;

const Slide = styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
background-color: ${(props) => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  `;
const Image = styled.img`
  height: 80%;
  width:auto;`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title= styled.h1`font-size:69px;`
const Description= styled.p`
margin: 50px 0;
font-size:20px;
letter-spacing:3px;
font-weight: 500;`
const Button= styled.button`
font-size:20px;
padding:10px;
cursor: pointer;
background-color:transparent;
`
const Slider = () => {
  const [sliderIndex,setSliderIndex]= useState(0)
  const handleOnClick =(direction)=>{
    if(direction==="left"){
      setSliderIndex(sliderIndex>0? sliderIndex-1 : 2)
    }else{
      setSliderIndex(sliderIndex<2? sliderIndex +1 :0)
    }
  }
  return (
    <Container>
      <Arrow direction="left" onClick={()=> handleOnClick("left")}>
        <ArrowBackOutlinedIcon />
      </Arrow>
      <Wrapper sliderIndex={sliderIndex}>
      {sliderItems.map(i=>(

        <Slide bg={i.bg} key={i.id}>
        <ImgContainer>
        <Image src={i.img} />
        </ImgContainer>
        <InfoContainer>
        <Title>{i.title}</Title>
        <Description>{i.desc}</Description>
        <Button>Add to Cart</Button>
        </InfoContainer>
        </Slide>
        ))}
        
      </Wrapper>
      <Arrow direction="right" onClick={()=> handleOnClick("right")}>
        <ArrowForwardOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
