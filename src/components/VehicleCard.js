import React from 'react';
import { Link } from "react-router-dom";
import { Container, Title, VehicleContainer, LogoContainer, Logo, ButtonContainer, Maintenance, Delete, NameContainer, Make, Model, Year, CarTextContainer, CarTitle, Color, Plate, BottomNameContainer, DirectionsCar } from '../styling/VehicleCard'

const VehicleCard = ({ data, deleteSingleVehicle }) => {

    return (
        <Container>
            <VehicleContainer>
                <Title>
                    {data.vehicleType}
                </Title>
                <LogoContainer>
                    <Logo>
                        <DirectionsCar />
                    </Logo>
                </LogoContainer>
                <ButtonContainer>
                    <Maintenance>
                        <Link to={`vehicle-status/${data.id}`} className='link-style'>
                            Track Maintenance
                        </Link>
                    </Maintenance>
                    <Delete onClick={deleteSingleVehicle} id={data.id}>Delete</Delete>
                </ButtonContainer>
                <NameContainer>
                    <Year>
                        <CarTitle>Year</CarTitle>
                        <CarTextContainer>{data.modelYear}</CarTextContainer>
                    </Year>
                    <Make>
                        <CarTitle>Make</CarTitle>
                        <CarTextContainer>{data.make}</CarTextContainer>
                    </Make>
                    <Model>
                        <CarTitle>Model</CarTitle>
                        <CarTextContainer>{data.model}</CarTextContainer>
                    </Model>
                </NameContainer>
                <BottomNameContainer>
                    <Color>
                        <CarTitle>Color</CarTitle>
                        <CarTextContainer>{data.color}</CarTextContainer>
                    </Color>
                    <Plate>
                        <CarTitle>Plate #</CarTitle>
                        <CarTextContainer>{data.plateNumber}</CarTextContainer>
                    </Plate>
                </BottomNameContainer>
            </VehicleContainer>
        </Container>
    )
}

export default VehicleCard;