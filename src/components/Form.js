import React from 'react';
import { Container, VehicleDetailForm, FormContainer, TitleContainer, Title, Description, DescriptionText, Label, Input, ButtonContainer, Button, TestContainer, ConfirmContainer, TopConfirm, TopTitle, TopDetail, MiddleConfirm, BottomConfirm, DetailContainer, DetailTitle, DetailDescription } from '../styling/Form'
import { Link } from "react-router-dom";
import { addVehicleByOwner } from '../services/vehicle';

const Form = ({ enterVehicleDetail, handleVin, vin, handlePlateNum, plateNumber, handleColor, color, handleInsuranceDate, date, vehicleType, primaryInfo, make, model, modelYear, allVehicles }) => {

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

        console.log(finalVehObj)

        addVehicleByOwner(finalVehObj, sessionStorage.getItem('userKey'))
            .then(d => {
                console.log(d)
            })

        // allVehicles.push(finalVehObj)
        // addVehicle(allVehicles, sessionStorage.getItem('userKey'))
        window.location.hash = "#/user-dashboard"
    }

    return (
        <Container>
            <TestContainer>
                <VehicleDetailForm onSubmit={enterVehicleDetail}>
                    <TitleContainer>
                        <Title>Enter Vehicle Details</Title>
                    </TitleContainer>
                    <Description>
                        <DescriptionText>
                            Only the VIN is needed to find the vehicle details!
                        </DescriptionText>
                    </Description>
                    <FormContainer>
                        <Label>VIN</Label>
                        <br></br>
                        <Input onChange={handleVin} value={vin} required></Input>
                        <Label>License Plate #</Label>
                        <br></br>
                        <Input onChange={handlePlateNum} value={plateNumber}></Input>
                        <Label>Color</Label>
                        <br></br>
                        <Input onChange={handleColor} value={color}></Input>
                        <Label>Insurance Expiry Date</Label>
                        <br></br>
                        <Input type="date" onChange={handleInsuranceDate} value={date}></Input>
                    </FormContainer>

                    <ButtonContainer>
                        <Button>
                            <Link to="/user-dashboard" className='link-style'>Cancel</Link>
                        </Button>
                        <Button>Submit</Button>
                    </ButtonContainer>

                    <ConfirmContainer>
                        <TopConfirm>
                            <TopTitle>Your Vehicle</TopTitle>
                            <TopDetail>If the results look incorrect, please double check your VIN above!</TopDetail>
                        </TopConfirm>
                        <MiddleConfirm>
                            <DetailContainer>
                                <DetailTitle>Year</DetailTitle>
                                <DetailDescription>{modelYear}</DetailDescription>
                            </DetailContainer>
                            <DetailContainer>
                                <DetailTitle>Make</DetailTitle>
                                <DetailDescription>{make}</DetailDescription>
                            </DetailContainer>
                            <DetailContainer>
                                <DetailTitle>Model</DetailTitle>
                                <DetailDescription>{model}</DetailDescription>
                            </DetailContainer>
                        </MiddleConfirm>
                        <BottomConfirm>
                            <DetailContainer>
                                <DetailTitle>Vehicle Type</DetailTitle>
                                <DetailDescription>{vehicleType}</DetailDescription>
                            </DetailContainer>
                        </BottomConfirm>
                        <ButtonContainer>
                            <Button onClick={confirmVehicle}>Enter Vehicle</Button>
                        </ButtonContainer>
                    </ConfirmContainer>
                </VehicleDetailForm>
            </TestContainer>
        </Container>
    )
}

export default Form;