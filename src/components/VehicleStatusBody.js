import {React, useEffect, useState} from 'react';
import VehicleDetails from './VehicleDetails';
import VehicleStatusInfo from './VehicleStatusInfo';
import { Container } from '../styling/VehicleStatusBody'
import {getInsuranceDetails } from '../services/vehicle';


const VehicleStatusBody = ({ individualVehicle, vehicleInfo }) => {
    const id = window.location.hash.substring(17, window.location.hash.length)
    const [plateInfo, setPlateInfo] = useState("")

    useEffect(() => {
        getInsuranceDetails(sessionStorage.getItem('userKey'), id)
            .then(data => {
                console.log(data)
                setPlateInfo(data.data[0].licensePlate)
            })
    }, []);

    
    return (
        <Container>
            <VehicleDetails year={individualVehicle.modelYear} make = {individualVehicle.make} model = {individualVehicle.model} color = {individualVehicle.color} plate = {plateInfo} vin = {individualVehicle.vin} />
            <VehicleStatusInfo data={individualVehicle} vehicleInfo={vehicleInfo} />
        </Container>
    )
}

export default VehicleStatusBody;