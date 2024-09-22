import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Container, Title, VehicleContainer, LogoContainer, Logo, ButtonContainer, Maintenance, Delete, NameContainer, Make, Model, Year, CarTextContainer, CarTitle, Color, Plate, BottomNameContainer, DirectionsCar } from '../styling/VehicleCard'
import { getAllVehicles, deleteVehicle, getVehicleByOwnerAndVin, getInsuranceDetails } from '../services/vehicle';

const VehicleCard = ({ data, deleteSingleVehicle }) => {

    const test = () => {
        window.location = `/#/vehicle-status/${data.vin}`
    }

    const [plateNum, setPlateNum] = useState("");

    useEffect(() => {
        getInsuranceDetails(data.vin)
            .then(response => {
                setPlateNum(response.data.licensePlate)
            })
    }, []);


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
                    <Maintenance onClick={() => test()}>
                        Track Maintenance
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
                        <CarTextContainer>{plateNum}</CarTextContainer>
                    </Plate>
                    <Plate>
                        <CarTitle>odometer</CarTitle>
                        <CarTextContainer>{data.currentMileage}</CarTextContainer>
                    </Plate>
                </BottomNameContainer>
            </VehicleContainer>
        </Container>
    )
}

export default VehicleCard;