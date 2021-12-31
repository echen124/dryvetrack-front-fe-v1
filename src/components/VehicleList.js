import React from 'react';
import VehicleCard from './VehicleCard';
import { Container } from '../styling/VehicleList'


const VehicleList = ({vehicleList, deleteSingleVehicle}) => {
     
    return (
        <Container>
           {vehicleList.map(data => {
               return(
                   <VehicleCard data={data} key={data.id} deleteSingleVehicle = {deleteSingleVehicle} />
               )
           })}
        </Container>
    )
}

export default VehicleList;