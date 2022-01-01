import React from 'react';
import { Container, VehicleDetailForm, FormContainer, TitleContainer, Title, Description, DescriptionText, Label, Input, ButtonContainer, Button, Info } from '../styling/Form'
import { Link } from "react-router-dom";


const Form = ({ enterVehicleDetail, handleVin, vin, handlePlateNum, plateNumber, handleColor, color, handleInsuranceDate, date }) => {
    return (
        <Container>
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

            </VehicleDetailForm>
        </Container>
    )
}

export default Form;