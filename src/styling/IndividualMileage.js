import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
border-bottom: 1px solid black;
margin-left: 1em;
margin-right: 1em;
`

const MileageDate = styled.p`
padding-right: 1em;
`

const MileageKM = styled.p`
padding-left: 0.1em;
`

export {Container, MileageDate, MileageKM};