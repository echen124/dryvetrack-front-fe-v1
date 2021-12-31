import styled from "styled-components"


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
height: 55vh;

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

export {Container, FormContainer, FormTitle, Form, FormInput, FormLabel, TopForm, AddUser}