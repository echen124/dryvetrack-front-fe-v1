import styled from 'styled-components';

const Container = styled.div`
border-radius: 2em;
padding-top: 1em;
margin-left: 1em;
margin-right: 1em;
margin-bottom: 1em;
margin-top: 1em;
height: 45vh;
flex: 1;
background-color: #366476;
color: white;
`

const VehicleContainer = styled.div`
display: flex;
justify-content: space-evenly;
`

const TextContainer = styled.div`
text-align: center;
`

const Title = styled.h2`
text-align: center;
`

const VehicleTitle = styled.h1`
text-align: center;
margin:0;
padding:0;
margin-top: 0.5em;
`

const SubText = styled.p`
font-size: 20px;
margin: 0;
padding: 0;
`

const VinContainer = styled.div`
text-align: center;
margin:0;
padding:0;
`

const VinTitle = styled.p``

const VinSubText = styled.p``

export {Container, VehicleContainer, TextContainer, Title, VehicleTitle, SubText, VinContainer, VinTitle, VinSubText};