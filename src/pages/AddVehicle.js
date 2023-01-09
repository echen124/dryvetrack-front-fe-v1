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
    const [primaryInfo, setPrimaryInfo] = useState({});
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [modelYear, setModelYear] = useState("");
    const [allVehicles, setAllVehicles] = useState([])
    const ObjectID = require("bson-objectid");

    useEffect(() => {
        getAllVehicles(sessionStorage.getItem('userKey')).then(d =>
            //console.log(d.data.data))
            setAllVehicles(d.data.data.vehicleInfo))
    }, [])

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

    const clearFields = () => {
        setVin("")
        setPlateNumber("")
        setDate("")
    }

    const enterVehicleDetail = (e) => {
        e.preventDefault();

        getAllVehicles()
            .then(vinArr => {
                let contains = false;

                for (let i = 0; i < vinArr.length; i++) {
                    if (vinArr[i].vin === vin) {
                        alert("This VIN has already been entered!")
                        contains = true;
                        break;
                    }
                }

                if (!contains) {

                    const newVehicle = {
                        vin: vin,
                        // plateNumber: plateNumber,
                        // insuranceExpiryDate: date,
                        color: color,
                        // mileageInformation: [
                        //     {
                        //         lastUpdated: moment().format('L'),
                        //         lastMileage: 0,
                        //         oilChangeStartInterval: false
                        //     }
                        // ],
                        // warrantyInfo: []
                    }

                    decodeVIN(vin)
                        .then(detail => {
                            setPrimaryInfo(newVehicle)
                            setVehicleType(detail.Results[21].Value);
                            setMake(detail.Results[6].Value);
                            setModel(detail.Results[8].Value);
                            setModelYear(detail.Results[9].Value);
                        });
                }

                const newVehicle = {
                    vin: vin,
                    // plateNumber: plateNumber,
                    // insuranceExpiryDate: date,
                    color: color,
                    // mileageInformation: [
                    //     {
                    //         lastUpdated: moment().format('L'),
                    //         lastMileage: 0,
                    //         oilChangeStartInterval: false
                    //     }
                    // ],
                    // warrantyInfo: []
                }

                decodeVIN(vin)
                    .then(detail => {
                        console.log(detail)
                        setPrimaryInfo(newVehicle)
                        setVehicleType(detail.Results[14].Value);
                        setMake(detail.Results[7].Value);
                        setModel(detail.Results[9].Value);
                        setModelYear(detail.Results[10].Value);
                    });

            })

        clearFields();

    }


    return (
        <Container>
            <Nav text="User Dashboard" />
            <Form enterVehicleDetail={enterVehicleDetail} handleVin={handleVin} vin={vin} handlePlateNum={handlePlateNum} plateNumber={plateNumber} handleColor={handleColor} color={color} handleInsuranceDate={handleInsuranceDate} date={date} vehicleType={vehicleType} primaryInfo={primaryInfo} make={make} model={model} modelYear={modelYear} allVehicles={allVehicles} />
            <Footer />
        </Container>
    )
}

export default AddVehicle;