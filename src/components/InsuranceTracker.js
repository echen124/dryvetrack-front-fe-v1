import React, { useState, useEffect } from 'react';
import { Container, Title, DateContainer, ExpiryContainer, ExpiryText, DateTitle, DateText, ButtonContainer, Button, Label, Input, InputContainer, LabelContainer } from '../styling/InsuranceTracker'
import { updateInsuranceDetails, getInsuranceDetails } from '../services/vehicle';


const InsuranceTracker = ({ data, vehicleInfo }) => {
    const [updateContainer, setUpdateContainer] = useState(false);
    const [buttonText, setButtonText] = useState("Update Expiry Date");
    const [input, setInput] = useState("");
    const [licensePlate, setLicensePlate] = useState("")
    const [updateDateBoolean, setUpdateDateBoolean] = useState(false)
    const [insuranceProvider, setInsuranceProvider] = useState("")
    const [expiryDate, setExpiryDate] = useState("")
    const [updateStatus, setUpdateStatus] = useState("");
    const [displayInsuranceProvider, setDisplayInsuranceProvider] = useState("")
    const [displayExpiryDate, setDisplayExpiryDate] = useState("")
    const id = window.location.hash.substring(17, window.location.hash.length)


    useEffect(() => {
        getInsuranceDetails(id)
            .then(response => {
                console.log(response.data.licensePlate)
                const date = new Date(response.data.expiryDate);
                const formattedDate = date.toLocaleDateString();
                setDisplayExpiryDate(formattedDate)
                setDisplayInsuranceProvider(response.data.provider)
                setLicensePlate(response.data.licensePlate)
            })
    }, [displayExpiryDate])

    useEffect(() => {
        if (updateDateBoolean) {

            const id = window.location.hash.substring(17, window.location.hash.length);

            const insuranceObject = {
                "LicensePlate": licensePlate,
                "Provider": insuranceProvider,
                "ExpiryDate": expiryDate
            }

            updateInsuranceDetails(sessionStorage.getItem('bearer-token'), id, insuranceObject)
                .then(response => {
                    console.log(response.data)
                    const date = new Date(response.data.expiryDate);
                    const formattedDate = date.toLocaleDateString();
                    setDisplayExpiryDate(formattedDate)
                    setLicensePlate(response.data.licensePlate)
                })
            setLicensePlate("")
            setInsuranceProvider("")
            setExpiryDate("")
            setUpdateDateBoolean(false)
            setUpdateStatus("Insurance Details Updated!")
        }
    }, [updateDateBoolean]);


    const insuranceExpiry = () => {

        const [month, day, year] = displayExpiryDate.split("/");
        const modExpiryDate = new Date(`${year}-${month}-${day}`);

        const today = new Date();


        const timeDifference = modExpiryDate - today;


        if (timeDifference < 0) {
            return "The insurance has expired.";
        }

        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const months = Math.floor(daysDifference / 30);
        const days = daysDifference % 30;

        return `The insurance will expire in ${months} month(s) and ${days} day(s).`;

    }

    const togglePopUp = () => {
        if (!updateContainer) {
            setUpdateContainer(true);
            setButtonText("Update Details!")
        } else {
            setUpdateContainer(false);
            setButtonText("Update Expiry Date")
            setUpdateDateBoolean(true)
        }
    }

    const closeContainer = () => {
        setUpdateContainer(false);
    }

    const handleLicensePlate = (e) => {
        setLicensePlate(e.target.value)
    }

    const handleInsuranceProvider = (e) => {
        setInsuranceProvider(e.target.value)
    }

    const handleExpiryDate = (e) => {
        setExpiryDate(e.target.value)
    }

    const display = () => {
        if (updateContainer) {
            return (
                <InputContainer>
                    <Label>
                        License Plate
                    </Label>
                    <Input type="text" onChange={handleLicensePlate}></Input>
                    <br></br>
                    <Label>
                        Insurance Provider
                    </Label>
                    <Input type="text" onChange={handleInsuranceProvider}></Input>
                    <br></br>
                    <Label>
                        Insurance Expiry Date
                    </Label>
                    <Input type="date" onChange={handleExpiryDate}></Input>
                    <ButtonContainer>
                        <Button onClick={() => closeContainer()}>Cancel</Button>
                    </ButtonContainer>
                </InputContainer>
            )
        }
    }


    return (
        <Container>
            <Title>Insurance Expiry</Title>
            <DateContainer>
                <DateTitle>Insurance Expiry Date:</DateTitle>
                <DateText>
                    {displayExpiryDate}
                </DateText>
                <DateTitle>License Plate Number:</DateTitle>
                <DateText>
                    {licensePlate}
                </DateText>
                <DateText>
                    {updateStatus}
                </DateText>
                <ButtonContainer>
                    <Button onClick={() => togglePopUp()}>{buttonText}</Button>
                </ButtonContainer>
                {display()}
            </DateContainer>
            <ExpiryContainer>
                <ExpiryText><b>{insuranceExpiry()}</b></ExpiryText>
            </ExpiryContainer>
        </Container>
    )
}

export default InsuranceTracker;