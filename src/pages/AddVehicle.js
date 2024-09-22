import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Form from '../components/Form';
import Footer from '../components/Footer';
import { getAllVehicles, decodeVIN } from '../services/vehicle';
import moment from 'moment';


const Container = styled.div`
height: 100vh;
`

const AddVehicle = () => {
    const [vin, setVin] = useState("");
    const [plateNumber, setPlateNumber] = useState("");
    const [date, setDate] = useState("");
    const [color, setColor] = useState("");
    const [vehicleType, setVehicleType] = useState("")
    const [insuranceProvider, setInsuranceProvider] = useState("")
    const [primaryInfo, setPrimaryInfo] = useState({});
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [modelYear, setModelYear] = useState("");
    const [mileage, setMileage] = useState(0);
    const [allVehicles, setAllVehicles] = useState([])
    const ObjectID = require("bson-objectid");

    // useEffect(() => {
    //     getAllVehicles(sessionStorage.getItem('userKey')).then(d =>
    //         //console.log(d.data.data))
    //         setAllVehicles(d.data.data.vehicleInfo))
    // }, [])

    const handleVin = (e) => {
        //console.log(e.target.value)
        setVin(e.target.value);
    }

    const handlePlateNum = (e) => {
        setPlateNumber(e.target.value.toUpperCase());
    }

    const handleInsuranceDate = (e) => {
        setDate(e.target.value);
    }

    const handleColor = (e) => {
        setColor(e.target.value);
    }

    const handleMileage = (e) => {
        setMileage(e.target.value)
    }

    const handleInsuranceProvider = (e) => {
        setInsuranceProvider(e.target.value)
    }

    const clearFields = () => {
        setVin("")
        setPlateNumber("")
        setDate("")
    }

    const enterVehicleDetail = (e) => {
        e.preventDefault();

        // getAllVehicles()
        //     .then(vinArr => {
        //         let contains = false;

        //         for (let i = 0; i < vinArr.length; i++) {
        //             if (vinArr[i].vin === vin) {
        //                 alert("This VIN has already been entered!")
        //                 contains = true;
        //                 break;
        //             }
        //         }

        //         if (!contains) {

        //             const newVehicle = {
        //                 vin: vin,
        //                 // plateNumber: plateNumber,
        //                 // insuranceExpiryDate: date,
        //                 color: color,
        //                 // mileageInformation: [
        //                 //     {
        //                 //         lastUpdated: moment().format('L'),
        //                 //         lastMileage: 0,
        //                 //         oilChangeStartInterval: false
        //                 //     }
        //                 // ],
        //                 // warrantyInfo: []
        //             }

        //             decodeVIN(vin)
        //                 .then(detail => {
        //                     console.log(detail)
        //                     setPrimaryInfo(newVehicle)
        //                     setVehicleType(detail.Results[21].Value);
        //                     setMake(detail.Results[6].Value);
        //                     setModel(detail.Results[8].Value);
        //                     setModelYear(detail.Results[9].Value);
        //                 });
        //         }

        //         const newVehicle = {
        //             vin: vin,
        //             // plateNumber: plateNumber,
        //             // insuranceExpiryDate: date,
        //             color: color,
        //             // mileageInformation: [
        //             //     {
        //             //         lastUpdated: moment().format('L'),
        //             //         lastMileage: 0,
        //             //         oilChangeStartInterval: false
        //             //     }
        //             // ],
        //             // warrantyInfo: []
        //         }

        //         decodeVIN(vin)
        //             .then(detail => {
        //                 console.log(detail)
        //                 setPrimaryInfo(newVehicle)
        //                 setVehicleType(detail.Results[14].Value);
        //                 setMake(detail.Results[7].Value);
        //                 setModel(detail.Results[9].Value);
        //                 setModelYear(detail.Results[10].Value);
        //             });

        //     })

        decodeVIN(vin).then(detail => {
            console.log(detail.Results)
            const filteredDetails = detail.Results.filter(item =>
                item.Variable === "Make" ||
                item.Variable === "Model" ||
                item.Variable === "Vehicle Type" ||
                item.Variable === "Model Year"
            );

            // If you want to create an object or log the filtered results
            const result = {};
            filteredDetails.forEach(item => {
                result[item.Variable] = item.Value;
            });

            console.log(result); // This will log the filtered object

            const newVehicle = {
                            vin: vin,
                            plateNumber: plateNumber,
                            insuranceExpiryDate: date,
                            color: color,
                            insuranceProvider: insuranceProvider
                            // mileageInformation: [
                            //     {
                            //         lastUpdated: moment().format('L'),
                            //         lastMileage: 0,
                            //         oilChangeStartInterval: false
                            //     }
                            // ],
                            // warrantyInfo: []
                        }

            setMake(result["Make"] || ""); // Default to empty string if undefined
            setModel(result["Model"] || "");
            setVehicleType(result["Vehicle Type"] || "");
            setModelYear(result["Model Year"] || "");
            setPrimaryInfo(newVehicle);
        });

        clearFields();

    }


    return (
        <Container>
            <Nav text="User Dashboard" />
            <Form enterVehicleDetail={enterVehicleDetail} handleInsuranceProvider = {handleInsuranceProvider} insuranceProvider = {insuranceProvider} handleVin={handleVin} vin={vin} handlePlateNum={handlePlateNum} plateNumber={plateNumber} handleColor={handleColor} handleMileage = {handleMileage} mileage = {mileage} color={color} handleInsuranceDate={handleInsuranceDate} date={date} vehicleType={vehicleType} primaryInfo={primaryInfo} make={make} model={model} modelYear={modelYear} allVehicles={allVehicles} />
            <Footer />
        </Container>
    )
}

export default AddVehicle;