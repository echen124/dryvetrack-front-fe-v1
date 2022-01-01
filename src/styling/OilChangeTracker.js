import styled from 'styled-components';

const OilContainer = styled.div`
border-top: 1px solid black;
padding: 1em;
background-color: #366476;
color: white;
border-radius; 1em;
`

const OilTop = styled.div`
display: flex;
justify-content: center;
`

const OilBottom = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const OilTitle = styled.h1`
margin: 0;
padding: 0;
`

const OilSubtitle = styled.h2``

const OilButtonContainer = styled.div`
display: flex;
justify-content: center;
`

const OilButton = styled.button`
border: none;
padding: 0.5em 2em 0.5em 2em;
color: white;
margin: 1em;
background-color: #ff4000;
font-weight: 600;
font-size: 15px;
font-family: 'PT Sans', sans-serif;
cursor:pointer;
`

const OilUpdateContainer = styled.div`
border: 1px solid white;
border-radius: 1em;
margin: 1em;
`

const OilCurrentMileageContainer = styled.div`
text-align:center;
margin: 1em;
`

const OilInput = styled.input``

const OilLabel = styled.label`
margin-right: 1em;
`

const OilSelect = styled.select``

const OilOption = styled.option``

const OilSelectionContainer = styled.div`
text-align: center;
margin: 1em;
`



export {OilContainer, OilTop, OilBottom, OilTitle, OilSubtitle, OilButtonContainer, OilButton, OilUpdateContainer, OilCurrentMileageContainer, OilInput, OilLabel, OilSelect, OilOption, OilSelectionContainer};