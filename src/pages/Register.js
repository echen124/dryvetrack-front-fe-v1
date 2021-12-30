import Nav from "../components/Nav"
import styled from "styled-components"
import Footer from "../components/Footer"

const Container = styled.div`
height: 100vh;
`

const FormContainer = styled.div`
display: flex;
justify-content: center;
background-color: #264653;
height: 70%;
`

const FormTitle = styled.h1``

const Form = styled.form`
border: 1px solid black;
width: 100%;
text-align: center;
margin: 4em;
background-color: #feefdd;
height: 50vh;

@media (min-width: 768px) {
    width: 40%;
 }

 @media (min-width: 1200px) {
    width: 20%;
 }

`

const FormInput = styled.input`
height: 25px;
`

const FormLabel = styled.label`
`

const TopForm = styled.div`
margin-top: 1em;
margin-bottom: 1em;
`

const AddUser = styled.button`
border: none;
padding: 0.5em 2em 0.5em 2em;
color: white;
background-color: #ff4000;
font-weight: 600;
font-size: 15px;
font-family: 'PT Sans', sans-serif;
margin-bottom: 1em;
`


const Register = () => {
    return (
        <Container>
            <Nav />
            <FormContainer>
                <Form>
                    <FormTitle>Sign Up</FormTitle>
                    <TopForm>
                        <FormLabel>First Name</FormLabel>
                        <br></br>
                        <FormInput type="text"></FormInput>
                    </TopForm>
                    <TopForm>
                        <FormLabel>Last Name</FormLabel>
                        <br></br>
                        <FormInput type="text"></FormInput>
                    </TopForm>
                    <TopForm>
                        <FormLabel>Email</FormLabel>
                        <br></br>
                        <FormInput type="text"></FormInput>
                    </TopForm>
                    <TopForm>
                        <FormLabel>Password</FormLabel>
                        <br></br>
                        <FormInput type="text"></FormInput>
                    </TopForm>

                    <AddUser>Create Account</AddUser>


                </Form>
            </FormContainer>
            <Footer></Footer>
        </Container>
    )
}

export default Register