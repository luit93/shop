import styled from "styled-components";

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.4)), url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm218batch2-nunny-20.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=5b755b72ab40dfc1f9a810f3497db357")  center  ;
background-size:cover;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Wrapper = styled.div`
padding: 20px;
width: 25%;
background-color: aliceblue;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 20px 10px;
`

const Title = styled.h1`
font-size: 35px;
font-weight: 300;
`

const Form = styled.form`
display: flex;
flex-direction: column;
padding: 20px;
max-width: 50%;
align-items: center;
justify-content: center;

`

const Input = styled.input`
/* min-width: 40%; */
flex:1;
margin: 10px  0;
padding: 10px;
`



const Link = styled.a`
font-size:12px;
margin: 5px 0;
text-decoration: underline;
cursor: pointer;

`

const Button = styled.button`
cursor: pointer;
width: 40%;
border: none;
padding: 20px 20px;
background-color: teal;
color: white;
/* margin-bottom: 10px; */
height: 30px;
width: 90px;

`



const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Log In</Title>
            <Form>
               
                <Input placeholder="username"/>
                
                <Input placeholder="passwords"/>
                <Button>Log In</Button>
                </Form>
              </Wrapper>
              <Wrapper>
                
                <Link>Forgot Password?</Link>
                <Link>Not Registered? Create an Account</Link>
           
        </Wrapper>
    </Container>
  )
}

export default Register