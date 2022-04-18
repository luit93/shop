import styled from "styled-components";

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.4)), url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm218batch2-nunny-20.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=5b755b72ab40dfc1f9a810f3497db357")  center  ;
background-size:cover;
display: flex;
align-items: center;
justify-content: center;
`

const Wrapper = styled.div`
padding: 20px;
width: 40%;
background-color: aliceblue;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Title = styled.h1`
font-size: 25px;
font-weight: 400;
`

const Form = styled.form`
display: flex;
flex-wrap: wrap;
padding: 20px;

`

const Input = styled.input`
min-width: 40%;
flex:1;
margin: 10px 10px 0 0;
padding: 10px;
`

const Agreement = styled.div`
font-size:24px;
margin: 20px 0;
`

const Button = styled.button`
cursor: pointer;
width: 40%;
border: none;
padding: 20px 20px;
background-color: teal;
color: white;
`

const Link = styled.a`
font-size:12px;
margin: 20px 0;
padding: 5px 20px;
cursor: pointer;
`


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create an Account</Title>
            <Form>
                <Input placeholder="first name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="passwords"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ea.
                </Agreement>
                <Button>Register</Button>
                <Link>Already Registered? Log in to your Account</Link>

            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register