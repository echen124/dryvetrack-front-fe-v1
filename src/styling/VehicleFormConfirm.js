import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
background-color: #264653;
`

const Title = styled.div`
text-align: center;
`

const TitleText = styled.h1``

const ConfirmContainer = styled.div`
border: 1px solid black;
width: 100%;
border-radius: 1em;
margin-bottom: 1em;
background-color: white;
margin: 1em;

@media (min-width: 768px) {
    width: 50%;
}
`

const Description = styled.p``

const VehicleDetail = styled.div`
border: 1px solid black;
border-radius: 1em;
margin: 1em;
`

const Top = styled.div`
display: flex;
justify-content: space-evenly;
`

const Bottom = styled.div`
display: flex;
justify-content: space-evenly;
`

const Label = styled.h2`
`

const Detail = styled.p`
font-size: 20px;
font-weight: 500;
`

const TextContainer = styled.div`
text-align: center;
`

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 1em;
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

export {Container, Title, TitleText, ConfirmContainer, Description, VehicleDetail, Top, Bottom, Label, Detail, TextContainer, ButtonContainer, Button};