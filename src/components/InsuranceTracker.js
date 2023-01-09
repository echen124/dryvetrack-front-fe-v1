import React, { useState, useEffect } from 'react';
import { Container, Title, DateContainer, ExpiryContainer, ExpiryText, DateTitle, DateText, ButtonContainer, Button, Label, Input, InputContainer, LabelContainer } from '../styling/InsuranceTracker'
import { isAfter, isEqual, formatDistanceToNow } from 'date-fns'
import moment from 'moment';
import { updateVehicle, addInsuranceDetails, getInsuranceDetails } from '../services/vehicle';


const InsuranceTracker = ({ data, vehicleInfo }) => {
    const [updateContainer, setUpdateContainer] = useState(false);
    const [buttonText, setButtonText] = useState("Update Expiry Date");
    const [input, setInput] = useState("");
    const [licensePlate, setLicensePlate] = useState("")
    const [insuranceProvider, setInsuranceProvider] = useState("")
    const [expiryDate, setExpiryDate] = useState("")
    const [displayInsuranceProvider, setDisplayInsuranceProvider] = useState("")
    const [displayExpiryDate, setDisplayExpiryDate] = useState("")
    const id = window.location.hash.substring(17, window.location.hash.length)


    useEffect(() => {
        getInsuranceDetails(sessionStorage.getItem('userKey'), id)
            .then(data => {
                console.log(data)
                setDisplayExpiryDate(data.data[0].insuranceExpiryDate)
                setDisplayInsuranceProvider(data.data[0].insuranceProvider)
            })
    }, [displayExpiryDate])

    const insuranceExpiry = () => {
        if (data.id) {
            const vehicleInsuranceExpiry = data.insuranceExpiryDate

            const today = moment().format('L')

            let insuranceDate = {
                year: vehicleInsuranceExpiry.slice(0, 4),
                month: vehicleInsuranceExpiry.slice(5, 7),
                day: vehicleInsuranceExpiry.slice(8, 10)
            }

            let todayDate = {
                year: today.slice(6, 10),
                month: today.slice(0, 2),
                day: today.slice(3, 5)
            }

            let hasExpired = isAfter(new Date(todayDate.year, todayDate.month, todayDate.day),
                new Date(insuranceDate.year, insuranceDate.month, insuranceDate.day))

            let areEqual = isEqual(new Date(todayDate.year, todayDate.month, todayDate.day),
                new Date(insuranceDate.year, insuranceDate.month, insuranceDate.day))

            if (hasExpired || areEqual) {
                //console.log("your insurance has expired!")
                return ("Your insurance has expired!")
            } else {
                let result = formatDistanceToNow(
                    new Date(insuranceDate.year, insuranceDate.month - 1, insuranceDate.day)
                )
                return ("Your insurance expires in " + result + ".")
            }
        }
    }


    const updateDate = () => {
        const id = window.location.hash.substring(17, window.location.hash.length)
        data.insuranceExpiryDate = input;
        console.log(data)
        console.log(vehicleInfo)
        updateVehicle(id, vehicleInfo, sessionStorage.getItem('userKey'))
            .then(response => {
                console.log(response)
            });
    }

    const togglePopUp = () => {
        if (!updateContainer) {
            setUpdateContainer(true);
            setButtonText("Update!")
        } else {
            setUpdateContainer(false);
            setButtonText("Update Expiry Date")
            updateDate()
        }
    }

    const handleInputValue = (e) => {
        setInput(e.target.value);
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

    const addInsurance = (e) => {
        e.preventDefault()
        const insuranceObject = {
            "LicensePlate": licensePlate,
            "InsuranceProvider": insuranceProvider,
            "InsuranceExpiryDate": expiryDate
        }

        addInsuranceDetails(sessionStorage.getItem('userKey'), id, insuranceObject)
            .then(d => {
                console.log(d)
            })
        setLicensePlate("")
        setInsuranceProvider("")
        setExpiryDate("")
    }

    const display = () => {
        if (updateContainer) {
            return (
                <InputContainer>
                    <LabelContainer>
                        <Label>Date of Expiry: </Label>
                        <Input type="date" onChange={handleInputValue}></Input>
                    </LabelContainer>
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
            {/* <DateContainer>
                <DateTitle>Insurance Expiry Date:</DateTitle>
                <DateText>{data.insuranceExpiryDate}</DateText>
                <ButtonContainer>
                    <Button onClick={() => togglePopUp()}>{buttonText}</Button>
                </ButtonContainer>
                {display()}
            </DateContainer> */}
            {displayExpiryDate}
            {displayInsuranceProvider}
            <form onSubmit={addInsurance}>
                <label>License Plate: <input type="text" onChange={handleLicensePlate} value={licensePlate}></input></label>
                <br></br>
                <label>Insurance Provider: <input type="text" onChange={handleInsuranceProvider} value={insuranceProvider}></input></label>
                <br></br>
                <label>Insurance Expiry Date: <input type="date" onChange={handleExpiryDate} value={expiryDate}></input></label>
                <br></br>
                <button type="submit">save</button>
                <br></br>
                <button type="submit">update</button>
            </form>
            <ExpiryContainer>
                <ExpiryText><b>{insuranceExpiry()}</b></ExpiryText>
            </ExpiryContainer>
        </Container>
    )
}

export default InsuranceTracker;