import styled from 'styled-components';

const Container = styled.div`
border-radius: 1em;
margin-bottom: 1em;
background-color: #366476;
color: white;
`

const TitleContainer = styled.div`
display: flex;
justify-content: center;
`

const TitleText = styled.h1``

const MainContainer = styled.div``

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
`
const Button = styled.button`
padding: 0.5em;
margin: 1em;
border: none;
color: white;
background-color: #ff4000;
font-weight: 600;
font-size: 15px;
font-family: 'PT Sans', sans-serif;
cursor: pointer;
`

const FormContainer = styled.form`
text-align: center;
border: 1px solid white;
border-radius: 1em;
margin: 1em;
padding: 1em;
`

const FormElement = styled.div`
margin: 0.5em;
`

const Break = styled.br``

const Input = styled.input`
`

const SpecialInput = styled.textarea`
height: 70px;
width: 100%;
`

const Label = styled.label`
`

const WarrantyContainer = styled.div`
overflow-y: scroll;
height: 30vh;
`

export {Container, TitleContainer, TitleText, MainContainer, ButtonContainer, Button, FormContainer, FormElement, Break, Input, SpecialInput, Label, WarrantyContainer}