import styled from 'styled-components';

const Container = styled.div`
border-radius: 1em;
margin-bottom: 1em;
background-color: #366476;
color: white;
`

const TitleContainer = styled.div`
text-align:center;
`

const TitleText = styled.h1`
`

const DescriptionText = styled.p`
text-align: center;
`

const MileageContainer = styled.div`

@media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
}
`

const MileageLeft = styled.div`
flex:1;
text-align: center;
border-right: 1px solid black;
`

const CurrentMileage = styled.div`

@media (min-width: 768px) {
    border-bottom: 1px solid black;
}
`

const CurrentMileageTitle = styled.h2`
`

const LastUpdatedTitle = styled.h2``

const LastUpdatedText = styled.p``

const CurrentMileageText = styled.p`
`

const LastUpdated = styled.div``

const MileageRight = styled.div`
flex:1;
text-align: center;
margin: 1em;
`

const MileageTitle = styled.h1``

const MileageHistory = styled.div`
overflow-y:scroll;
height: 30vh;
`

const MileageButtonContainer = styled.div`
`

const MileageButton = styled.button`
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



export { Container, TitleContainer, TitleText, DescriptionText, MileageContainer, MileageLeft, CurrentMileage, CurrentMileageTitle, LastUpdatedTitle, LastUpdatedText, CurrentMileageText, LastUpdated, MileageRight, MileageTitle, MileageHistory, MileageButtonContainer, MileageButton };