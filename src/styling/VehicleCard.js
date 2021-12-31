import styled from 'styled-components';
import { DirectionsCar } from '@material-ui/icons';

const Container = styled.div`
`

const Title = styled.h1`
display: flex;
justify-content: center;
color: white;
word-break: break-all;
margin: 0.5em;
`

const VehicleContainer = styled.div`
border: 1px solid black;
margin: 1em;
background-color: #143642;
padding-bottom: 1em;
`

const LogoContainer = styled.div`
display: flex;
justify-content: center;
`

const Logo = styled.div`
border: 1px solid black;
border-radius: 50%;
margin: 1em;
background-color: orange;
padding: 2em;
`

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
border-bottom: 1px solid black;
padding-bottom: 1em;

`

const Maintenance = styled.button`
border: none;
padding: 0.5em 2em 0.5em 2em;
color: white;
background-color: #ff4000;
font-weight: 600;
font-size: 15px;
font-family: 'PT Sans', sans-serif;
margin: 10px;
flex:1;
text-decoration: none;
`

const Delete = styled.button`
border: none;
padding: 0.5em 2em 0.5em 2em;
color: white;
background-color: #ff4000;
font-weight: 600;
font-size: 15px;
font-family: 'PT Sans', sans-serif;
margin:10px;
flex:1;
cursor:pointer;
`

const NameContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 1em;
align-item: center;
text-align: center;
padding-left: 1em;
padding-right: 1em;
`

const Make = styled.div`
`

const Model = styled.div``

const Year = styled.div`
`

const CarTextContainer = styled.p`
padding: 0;
margin: 0;
font-size: 30px;
color: white;
`

const CarTitle = styled.p`
padding: 0;
margin: 0;
font-size: 20px;
color: white;
`

const Color = styled.div``

const Plate = styled.div``

const BottomNameContainer = styled.div`
display: flex;
justify-content: space-evenly;
text-align: center;
`

export {Container, Title, VehicleContainer, LogoContainer, Logo, ButtonContainer, Maintenance, Delete, NameContainer, Make, Model, Year, CarTextContainer, CarTitle, Color, Plate, BottomNameContainer, DirectionsCar};