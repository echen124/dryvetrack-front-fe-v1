import React from 'react';
import { Container, VehicleContainer, TextContainer, Title, VehicleTitle, SubText, VinContainer, VinTitle, VinSubText } from '../styling/VehicleDetails'

const VehicleDetails = ({ year, make, model, color, plate, vin }) => {
    return (
        <Container>
            <VehicleTitle>Vehicle Details</VehicleTitle>
            <VehicleContainer>
                <TextContainer>
                    <Title>Year</Title>
                    <SubText>{year}</SubText>
                </TextContainer>
                <TextContainer>
                    <Title>Make</Title>
                    <SubText>{make}</SubText>
                </TextContainer>
                <TextContainer>
                    <Title>Model</Title>
                    <SubText>{model}</SubText>
                </TextContainer>
            </VehicleContainer>
            <VehicleContainer>
                <TextContainer>
                    <Title>Color</Title>
                    <SubText>{color}</SubText>
                </TextContainer>
                {/* <TextContainer>
                    <Title>Plate #</Title>
                    <SubText>{plate}</SubText>
                </TextContainer> */}
            </VehicleContainer>
            <VinContainer>
                <VinTitle><b>VIN</b></VinTitle>
                <VinSubText>{vin}</VinSubText>
            </VinContainer>
        </Container>
    )
}

export default VehicleDetails;