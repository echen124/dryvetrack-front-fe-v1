import React from 'react';
import VehicleCard from './VehicleCard';
import { Container } from '../styling/VehicleList'


const VehicleList = ({ vehicleList, deleteSingleVehicle }) => {
    console.log(vehicleList)
    if (vehicleList != null) {
        if (vehicleList.length === 0) {
            return (
                <Container></Container>
            )
        }
        return (
            <Container>
                {vehicleList.map(data => {
                    return (
                        <VehicleCard data={data} key={data.id} deleteSingleVehicle={deleteSingleVehicle} />
                    )
                })}
            </Container>
        )
    } else {
        return (
            <Container></Container>
        )
    }
}

export default VehicleList;