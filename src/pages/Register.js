import React, { useState } from 'react'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import ErrorContainer from '../components/ErrorContainer'
import { Container, FormContainer, FormTitle, Form, FormInput, FormLabel, TopForm, AddUser,  ErrorText } from "../styling/Register"
import { signup } from '../services/auth';


const Register = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState([]);

    const submitForm = (e) => {
        e.preventDefault()
        signup({ firstName, lastName, email, password, userName })
            .then(d => {
                if (d.status === 201) {
                    setErrorMsg("successfully registered")
                    window.location.href = "#/login"
                } else {
                    setErrorMsg(d)
                    console.log(d)
                    console.log(errorMsg)
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

    const handleUsername = (e) => {
        setUserName(e.target.value);
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
                        <FormLabel>Username</FormLabel>
                        <br></br>
                        <FormInput type="text" value={userName} onChange={handleUsername}></FormInput>
                    </TopForm>
                    <TopForm>
                        <FormLabel>Password</FormLabel>
                        <br></br>
                        <FormInput type="password" value={password} onChange={handlePassword}></FormInput>
                    </TopForm>
                    <AddUser>Create Account</AddUser>
                    {/* <ErrorContainer errors={errorMsg} /> */}
                </Form>
            </FormContainer>
            <Footer></Footer>
        </Container>
    )
}

export default Register