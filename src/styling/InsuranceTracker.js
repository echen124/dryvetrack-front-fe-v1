import styled from 'styled-components';

const Container = styled.div`
border-radius: 1em;
margin-bottom: 1em;
background-color: #366476;
color: white;
`

const Title = styled.h1`
display: flex;
justify-content: center;
`

const DateContainer = styled.div`
text-align:center;
border: 1px solid black;
border-radius: 1em;
margin: 1em;
`
const ExpiryContainer = styled.div`
text-align: center;
padding: 0.2em;
`

const ExpiryText = styled.p`
`

const DateTitle = styled.h2``

const DateText = styled.p`
font-size: 20px;
font-weight:600;
`

const ButtonContainer = styled.div``

const Button = styled.button`
padding: 0.5em;
margin: 1em;
border: none;
color: white;
background-color: #ff4000;
font-weight: 600;
font-size: 15px;
font-family: 'PT Sans', sans-serif;
cursor:pointer;
`

const Label = styled.label``

const Input = styled.input``

const InputContainer = styled.div`
border: 1px solid white;
padding: 0.2em;
margin: 1em;
align-items: center;
border-radius: 1em;
`

const LabelContainer = styled.div``

export { Container, Title, DateContainer, ExpiryContainer, ExpiryText, DateTitle, DateText, ButtonContainer, Button, Label, Input, InputContainer, LabelContainer };