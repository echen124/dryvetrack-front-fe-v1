import styled from 'styled-components';
import { Info } from '@material-ui/icons';

const Container = styled.div`
display: flex;
justify-content: center;
background-color: #264653;
height 70vh;

@media (min-width: 768px) {
    height: 70vh;
}

`

const VehicleDetailForm = styled.form`
margin: 1em;
padding: 1em;
border-radius: 1em;
text-align: center;
background-color: white;
height: 50vh;

@media (min-width: 768px) {
    height: 40vh;
}
`

const FormContainer = styled.div`
margin: 0em;
padding: 0em;
`

const TitleContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Title = styled.h1`
margin: 0em;
padding: 0em;
`

const Description = styled.div`
margin-top: 1em;
margin-bottom: 1em;
`

const DescriptionText = styled.p`
margin: 0em;
padding: 0em;
`

const Label = styled.label`
`

const Input = styled.input`
width: 100%;
`

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 0.5em;
`

const Button = styled.button`
border: none;
padding: 0.5em 2em 0.5em 2em;
margin-right: 10px;
color: white;
background-color: #ff4000;
font-weight: 600;
font-size: 15px;
font-family: 'PT Sans', sans-serif;
cursor: pointer;
`
export { Container, VehicleDetailForm, FormContainer, TitleContainer, Title, Description, DescriptionText, Label, Input, ButtonContainer, Button, Info }

