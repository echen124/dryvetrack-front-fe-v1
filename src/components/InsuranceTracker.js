import React, { useState, useEffect } from 'react';
import { Container, Title, DateContainer, ExpiryContainer, ExpiryText, DateTitle, DateText, ButtonContainer, Button, Label, Input, InputContainer, LabelContainer } from '../styling/InsuranceTracker'
import { isAfter, isEqual, formatDistanceToNow } from 'date-fns'
import moment from 'moment';
import { updateVehicle, updateInsuranceDetails, getInsuranceDetails } from '../services/vehicle';


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
                const formattedDate = date.toLocaleDateString(); // e.g., "10/11/2024"
                setDisplayExpiryDate(formattedDate)
                setDisplayInsuranceProvider(response.data.provider)
                setLicensePlate(response.data.licensePlate)
            })
    }, [displayExpiryDate])

    useEffect(() => {
        if (updateDateBoolean) {

            const id = window.location.hash.substring(17, window.location.hash.length);
            // data.insuranceExpiryDate = input;

            const insuranceObject = {
                "LicensePlate": licensePlate,
                "Provider": insuranceProvider,
                "ExpiryDate": expiryDate
            }

            updateInsuranceDetails(sessionStorage.getItem('bearer-token'), id, insuranceObject)
                .then(response => {
                    console.log(response.data)
                    const date = new Date(response.data.expiryDate);
                    const formattedDate = date.toLocaleDateString(); // e.g., "10/11/2024"
                    setDisplayExpiryDate(formattedDate)
                    setLicensePlate(response.data.licensePlate)
                })
            setLicensePlate("")
            setInsuranceProvider("")
            setExpiryDate("")
            setUpdateDateBoolean(false)
            setUpdateStatus("Insurance Details Updated!")
        }
    }, [updateDateBoolean]); // Runs whenever `isSubmitted` changes


    const insuranceExpiry = () => {
        // if (data.id) {
        //     const vehicleInsuranceExpiry = data.insuranceExpiryDate

        //     const today = moment().format('L')

        //     let insuranceDate = {
        //         year: vehicleInsuranceExpiry.slice(0, 4),
        //         month: vehicleInsuranceExpiry.slice(5, 7),
        //         day: vehicleInsuranceExpiry.slice(8, 10)
        //     }

        //     let todayDate = {
        //         year: today.slice(6, 10),
        //         month: today.slice(0, 2),
        //         day: today.slice(3, 5)
        //     }

        //     let hasExpired = isAfter(new Date(todayDate.year, todayDate.month, todayDate.day),
        //         new Date(insuranceDate.year, insuranceDate.month, insuranceDate.day))

        //     let areEqual = isEqual(new Date(todayDate.year, todayDate.month, todayDate.day),
        //         new Date(insuranceDate.year, insuranceDate.month, insuranceDate.day))

        //     if (hasExpired || areEqual) {
        //         //console.log("your insurance has expired!")
        //         return ("Your insurance has expired!")
        //     } else {
        //         let result = formatDistanceToNow(
        //             new Date(insuranceDate.year, insuranceDate.month - 1, insuranceDate.day)
        //         )
        //         return ("Your insurance expires in " + result + ".")
        //     }
        // }

        const [month, day, year] = displayExpiryDate.split("/");
        const modExpiryDate = new Date(`${year}-${month}-${day}`); // Reformat to YYYY-MM-DD for Date object

        const today = new Date();

        // Calculate the difference in time between today and the expiry date (in milliseconds)
        const timeDifference = modExpiryDate - today;

        // If timeDifference is negative, the insurance has expired
        if (timeDifference < 0) {
            return "The insurance has expired.";
        }

        // Convert time difference from milliseconds to days
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        // Calculate months and remaining days
        const months = Math.floor(daysDifference / 30);
        const days = daysDifference % 30;

        return `The insurance will expire in ${months} month(s) and ${days} day(s).`;


    }


    // const updateDate = () => {
    //     const id = window.location.hash.substring(17, window.location.hash.length)
    //     data.insuranceExpiryDate = input;
    //     console.log(data)
    //     console.log(vehicleInfo)
    //     updateVehicle(id, vehicleInfo, sessionStorage.getItem('userKey'))
    //         .then(response => {
    //             const date = new Date(response.data.expiryDate);
    //             const formattedDate = date.toLocaleDateString(); // e.g., "10/11/2024"
    //             setDisplayExpiryDate(formattedDate)
    //         });
    // }

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

    // const addInsurance = (e) => {
    //     e.preventDefault()
    //     const insuranceObject = {
    //         "LicensePlate": licensePlate,
    //         "Provider": insuranceProvider,
    //         "ExpiryDate": expiryDate
    //     }

    //     updateInsuranceDetails(sessionStorage.getItem('bearer-token'), id, insuranceObject)
    //         .then(response => {
    //             console.log(response.data)
    //         })
    //     setLicensePlate("")
    //     setInsuranceProvider("")
    //     setExpiryDate("")
    // }

    const display = () => {
        if (updateContainer) {
            return (
                <InputContainer>
                    {/* <LabelContainer>
                        <Label>Date of Expiry: </Label>
                        <Input type="date" onChange={handleInputValue}></Input>
                    </LabelContainer> */}
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

                    {/* <form onSubmit={addInsurance}>
                        <label>License Plate: <input type="text" onChange={handleLicensePlate} value={licensePlate}></input></label>
                        <br></br>
                        <label>Insurance Provider: <input type="text" onChange={handleInsuranceProvider} value={insuranceProvider}></input></label>
                        <br></br>
                        <label>Insurance Expiry Date: <input type="date" onChange={handleExpiryDate} value={expiryDate}></input></label>
                        <br></br>
                        <button type="submit">update</button>
                    </form> */}
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