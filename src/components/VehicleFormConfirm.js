import React from 'react';
import { Container, Title, TitleText, ConfirmContainer, Description, VehicleDetail, Top, Bottom, Label, Detail, TextContainer, ButtonContainer, Button } from '../styling/VehicleFormConfirm'
import { addVehicle } from '../services/vehicle';
import { Link } from "react-router-dom";


const VehicleFormConfirm = ({ vehicleType, primaryInfo, make, model, modelYear, allVehicles }) => {

    const confirmVehicle = () => {

        let vehicleInfo = {
            make: make,
            model: model,
            modelYear: modelYear,
            vehicleType: vehicleType
        }

        let finalVehObj = {
            ...vehicleInfo,
            ...primaryInfo
        }

        allVehicles.push(finalVehObj)

        addVehicle(allVehicles, sessionStorage.getItem('userKey')).then(d => console.log(d))
    }


    if (make === "" || model === "") {
        return (
            null
        );
    }

    if (make !== "" && model !== "") {
        return (
            <Container>
                <ConfirmContainer>

                    <Title>
                        <TitleText>Your Vehicle</TitleText>
                        <Description>If the results look incorrect, please double check your VIN above!</Description>
                    </Title>

                    <VehicleDetail>
                        <Top>
                            <TextContainer>
                                <Label>Year</Label>
                                <Detail>{modelYear}</Detail>
                            </TextContainer>
                            <TextContainer>
                                <Label>Make</Label>
                                <Detail>{make}</Detail>
                            </TextContainer>
                            <TextContainer>
                                <Label>Model</Label>
                                <Detail>{model}</Detail>
                            </TextContainer>
                        </Top>
                        <Bottom>
                            <TextContainer>
                                <Label>VehicleType</Label>
                                <Detail>{vehicleType}</Detail>
                            </TextContainer>
                        </Bottom>
                    </VehicleDetail>
                    <ButtonContainer>
                        <Link to="/">
                            <Button onClick={confirmVehicle}>Enter Vehicle</Button>
                        </Link>
                    </ButtonContainer>
                </ConfirmContainer>
            </Container>
        )
    }
}

export default VehicleFormConfirm;