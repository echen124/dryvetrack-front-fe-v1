import React, { useState } from 'react'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { Container, FormContainer, FormTitle, Form, FormInput, FormLabel, TopForm, AddUser, ErrorContainer, ErrorText } from "../styling/Register"
import { signup } from '../services/auth';


const Register = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState([]);

    const submitForm = (e) => {
        e.preventDefault()
        signup({ firstName, lastName, email, password }).then(d => {
            if (d.msg) {
                //console.log(d.msg[0]);
                setErrorMsg([d.msg[0], d.msg[1]]);
            } else {
                setErrorMsg("successfully registered")
                window.location.href = "#/login"
            }
        })
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <Container>
            <Nav text="Register" />
            <FormContainer>
                <Form onSubmit={submitForm}>
                    <FormTitle>Sign Up</FormTitle>
                    <TopForm>
                        <FormLabel>First Name</FormLabel>
                        <br></br>
                        <FormInput type="text" value={firstName} onChange={handleFirstName}></FormInput>
                    </TopForm>
                    <TopForm>
                        <FormLabel>Last Name</FormLabel>
                        <br></br>
                        <FormInput type="text" value={lastName} onChange={handleLastName}></FormInput>
                    </TopForm>
                    <TopForm>
                        <FormLabel>Email</FormLabel>
                        <br></br>
                        <FormInput type="text" value={email} onChange={handleEmail}></FormInput>
                    </TopForm>
                    <TopForm>
                        <FormLabel>Password</FormLabel>
                        <br></br>
                        <FormInput type="password" value={password} onChange={handlePassword}></FormInput>
                    </TopForm>
                    <AddUser>Create Account</AddUser>
                    <ErrorContainer>
                        <ErrorText>{errorMsg[0]}</ErrorText>
                        <ErrorText>{errorMsg[1]}</ErrorText>
                    </ErrorContainer>
                </Form>
            </FormContainer>
            <Footer></Footer>
        </Container>
    )
}

export default Register