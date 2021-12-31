import React, { useState, useEffect } from 'react';
import Welcome from './Welcome';
import VehicleList from './VehicleList';
import { Container } from '../styling/Body'
import { getAllVehicles, deleteVehicle } from '../services/vehicle';

const Body = () => {
    const [vehicleList, setVehicleList] = useState([]);
    const [totalKilometers, setTotalKilometers] = useState("");
    const [totalVehicles, setTotalVehicles] = useState("");

    // useEffect(() => {
    //     getAllVehicles()
    //         .then(data => {
    //             //console.log(data)
    //             let totalKM = 0;
    //             for (let i = 0; i < data.length; i++) {
    //                 let individual = data[i].mileageInformation;
    //                 totalKM += Number(individual[individual.length - 1].lastMileage);
    //             }
    //             setTotalKilometers(totalKM);
    //             setVehicleList(data);
    //             setTotalVehicles(data.length);
    //         })
    // }, []);

    const deleteSingleVehicle = (e) => {
        //console.log(e.target.id)

        let filterVeh = vehicleList.filter(p => p.id === e.target.id);
        let remainingKM = filterVeh[0].mileageInformation[filterVeh[0].mileageInformation.length - 1].lastMileage;
        setTotalKilometers(totalKilometers - remainingKM);


        deleteVehicle(e.target.id);

        const updateList = vehicleList.filter(p => p.id !== e.target.id);
        //console.log(updateList)
        setVehicleList(updateList);
        setTotalVehicles(updateList.length);
    }


    return (
        <Container>
            <Welcome totalVehicles={totalVehicles} totalKilometers={totalKilometers} />
            <VehicleList vehicleList={vehicleList} deleteSingleVehicle={deleteSingleVehicle} />
        </Container>
    )
}

export default Body;