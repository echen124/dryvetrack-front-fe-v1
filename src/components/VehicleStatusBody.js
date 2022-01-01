import React from 'react';
import VehicleDetails from './VehicleDetails';
import VehicleStatusInfo from './VehicleStatusInfo';
import { Container } from '../styling/VehicleStatusBody'


const VehicleStatusBody = ({ individualVehicle, vehicleInfo }) => {
    //console.log(individualVehicle)
    return (
        <Container>
            <VehicleDetails year={individualVehicle.modelYear} make = {individualVehicle.make} model = {individualVehicle.model} color = {individualVehicle.color} plate = {individualVehicle.plateNumber} vin = {individualVehicle.vin} />
            <VehicleStatusInfo data={individualVehicle} vehicleInfo={vehicleInfo} />
        </Container>
    )
}

export default VehicleStatusBody;