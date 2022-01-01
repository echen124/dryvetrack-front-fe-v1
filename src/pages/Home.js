import Footer from "../components/Footer";
import Nav from "../components/Nav";
import styled from "styled-components";
import { Build, ListAlt, PriorityHigh } from "@material-ui/icons";
import { Link } from "react-router-dom";


const Container = styled.div`
background-color: #264653;
`

const LogoContainer = styled.div`
text-align: center;
margin: 1em;

@media (min-width: 768px) {
    font-size: 25px;
 }
`

const LogoText = styled.h1`
margin: 0em;
padding: 0em;
color: white;
`

const LogoTextLast = styled.h1`
margin: 0em;
padding: 0em;
color: orange;
`

const DescriptionTitleContainer = styled.div`
display: flex;
justify-content: center;
border-top: 1px solid white;
`

const Title = styled.h2`
text-align: center;
border-bottom: 1px solid white;
color: white;
padding: 0.5em;
`

const DescriptionContainer = styled.div`
background-color: #264653;
`


const IndividualDescription = styled.div`
text-align: center;
margin: 1em;

@media (min-width: 768px) {
    font-size: 20px;
 }
`

const IndividualTitle = styled.h2`
margin: 0em;
padding: 0em;
color: white;
`

const IndividualText = styled.p`
margin: 0em;
padding: 1em;
color: white;
`

const MaterialContainer = styled.div`
color: white;
margin: 0em;
padding: 0em;
`

const Button = styled.button`
border: none;
padding: 0.5em 2em 0.5em 2em;
color: white;
background-color: #ff4000;
font-weight: 600;
font-size: 15px;
font-family: 'PT Sans', sans-serif;
cursor: pointer;
font-size: 20px;
`

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
margin: 1em;
`

const Home = () => {
    return (
        <Container>
            <Nav />
            <LogoContainer>
                <LogoText>VEHICLE</LogoText>
                <LogoText>MAINTENANCE</LogoText>
                <LogoText>MADE</LogoText>
                <LogoTextLast>EASY</LogoTextLast>
            </LogoContainer>
            <DescriptionTitleContainer>
                <Title>Car Maintenance Tracker</Title>
            </DescriptionTitleContainer>
            <DescriptionContainer>
                <IndividualDescription>
                    <MaterialContainer>
                        <Build />
                    </MaterialContainer>
                    <IndividualTitle>Oil Change</IndividualTitle>
                    <IndividualText>Keep the engine of your vehicle in good condition! We track the oil life of your vehicle and remind you when to bring it in for service.</IndividualText>
                </IndividualDescription>

                <IndividualDescription>
                    <MaterialContainer>
                        <ListAlt />
                    </MaterialContainer>
                    <IndividualTitle>Mileage Tracker</IndividualTitle>
                    <IndividualText>Easily track the mileage of your vehicles! We provide personalized service recommendations based on the mileage of your vehicles.</IndividualText>
                </IndividualDescription>

                <IndividualDescription>
                    <MaterialContainer>
                        <PriorityHigh />
                    </MaterialContainer>
                    <IndividualTitle>Warranty</IndividualTitle>
                    <IndividualText>Store important warranty information about your vehicles and never miss out on any safety recalls.</IndividualText>
                </IndividualDescription>

                <ButtonContainer>
                    <Link to="/register">
                        <Button>Get Started</Button>
                    </Link>
                </ButtonContainer>

            </DescriptionContainer>
            <Footer />
        </Container>
    )
}

export default Home;