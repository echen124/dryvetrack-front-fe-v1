import styled from 'styled-components';

const Container = styled.div`
border-bottom: 2px solid #0f4457;
text-align: center;
background-color: #143642;
height: 15vh;

@media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 4em;
    padding-right: 4em;
}

`

const LogoContainer = styled.div`
font-size: 30px;
color: #f4a261;
padding: 10px;
`

const ButtonContainer = styled.div`
`

const AddVehicle = styled.button`
border: none;
padding: 0.5em 2em 0.5em 2em;
margin-right: 10px;
color: white;
background-color: #ff4000;
font-weight: 600;
font-size: 15px;
font-family: 'PT Sans', sans-serif;
`

const Logout = styled.button`
border: none;
padding: 0.5em 2em 0.5em 2em;
margin-right: 10px;
color: white;
background-color: #ff4000;
font-weight: 600;
font-size: 15px;
font-family: 'PT Sans', sans-serif;
`

export {Container, LogoContainer, ButtonContainer, AddVehicle, Logout};