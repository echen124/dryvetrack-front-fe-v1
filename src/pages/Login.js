import React, { useState } from 'react';
import { login } from '../services/auth';
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { Container, FormContainer, FormTitle, Form, FormInput, FormLabel, TopForm, AddUser, ErrorContainer, ErrorText } from "../styling/Login"

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        login({ userName, password }).then(d => {
            if (d.msg) {
                setErrorMsg(d.msg)
            } else {
                sessionStorage.setItem('x-auth-token', d.data.token)
                sessionStorage.setItem('userKey', d.data.userId)
                window.location.href = "#/user-dashboard"
            }
        })
    }

    const handleUserName = (e) => {
        setUserName(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <Container>
            <Nav text="Login" />
            <FormContainer>
                <Form onSubmit={submitForm}>
                    <FormTitle>Login</FormTitle>
                    <TopForm>
                        <FormLabel>Username</FormLabel>
                        <br></br>
                        <FormInput type="text" value={userName} onChange={handleUserName}></FormInput>
                    </TopForm>
                    <TopForm>
                        <FormLabel>Password</FormLabel>
                        <br></br>
                        <FormInput type="password" value={password} onChange={handlePassword}></FormInput>
                    </TopForm>
                    <AddUser>Login</AddUser>
                    <ErrorContainer>
                        <ErrorText>
                            {errorMsg}
                        </ErrorText>
                    </ErrorContainer>
                </Form>
            </FormContainer>
            <Footer></Footer>
        </Container>
    )
}

export default Login