import React from 'react';
import VehicleDetails from './VehicleDetails';
import VehicleStatusInfo from './VehicleStatusInfo';
import {Container} from '../styling/VehicleStatusBody'


const VehicleStatusBody = ( {vehicleInfo} ) => {
    return(
        <Container>
            <VehicleDetails year={vehicleInfo.modelYear} make = {vehicleInfo.make} model = {vehicleInfo.model} color = {vehicleInfo.color} plate = {vehicleInfo.plateNumber} vin = {vehicleInfo.vin} />
            <VehicleStatusInfo data={vehicleInfo} />
        </Container>
    )
}

export default VehicleStatusBody;