import styled from 'styled-components';
import { Info } from '@material-ui/icons';

const Container = styled.div`
background-color: #264653;
height: 100vh;
`

const TestContainer = styled.div`
display: flex;
justify-content: center;
padding-top: 1em;
`

const VehicleDetailForm = styled.form`
width: auto;
padding: 1em;
margin: 0em 1em 0em 1em;
border-radius: 1em;
text-align: center;
background-color: white;
height: 90vh;

`

const FormContainer = styled.div`
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
margin-bottom: 0.5em;
width: 100%;
`

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 0.5em;
margin-bottom: 0.5em;
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

const ConfirmContainer = styled.div`
    border: 1px solid black;
    border-radius: 1em;
    margin-top: 1em;
    `

const TopConfirm = styled.div``

const TopTitle = styled.h2``

const TopDetail = styled.p``

const MiddleConfirm = styled.div`
    display: flex;
    justify-content: space-evenly;
    `

const BottomConfirm = styled.div`
    display: flex;
    justify-content: space-evenly;
    `

const DetailContainer = styled.div``

const DetailTitle = styled.h3``

const DetailDescription = styled.p`
margin: 0em;
padding: 0em;
`

export { Container, VehicleDetailForm, FormContainer, TitleContainer, Title, Description, DescriptionText, Label, Input, ButtonContainer, Button, Info, TestContainer, ConfirmContainer, TopConfirm, TopTitle, TopDetail, MiddleConfirm, BottomConfirm, DetailContainer, DetailTitle, DetailDescription }

