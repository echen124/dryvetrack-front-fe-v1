import React, { useState } from 'react';
import { login } from '../services/auth';
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { Container, FormContainer, FormTitle, Form, FormInput, FormLabel, TopForm, AddUser, ErrorContainer, ErrorText } from "../styling/Login"

const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const d = await login({ username, password });
            console.log(d);
            
            if (d.title) {
                setErrorMsg(d.title);
            } else {
                sessionStorage.setItem('bearer-token', d.data.token);
                // sessionStorage.setItem('userKey', d.data.userId);
                window.location.href = "#/user-dashboard";
            }
        } catch (error) {
            console.error("Login failed:", error);
            setErrorMsg("An error occurred during login. Please try again.");
        }
    };

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
                        <FormInput type="text" value={username} onChange={handleUserName}></FormInput>
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