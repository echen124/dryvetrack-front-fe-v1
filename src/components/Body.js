import React, { useState, useEffect } from 'react';
import Welcome from './Welcome';
import VehicleList from './VehicleList';
import { Container } from '../styling/Body'
import { getAllVehicles, deleteVehicle } from '../services/vehicle';

const Body = () => {
    const [vehicleList, setVehicleList] = useState([]);
    const [totalKilometers, setTotalKilometers] = useState("");
    const [totalVehicles, setTotalVehicles] = useState("");
    const [name, setName] = useState("");

    if (vehicleList.length > totalVehicles) {
        getAllVehicles(sessionStorage.getItem('userKey'))
            .then(d => {
                setName(d.data.data.userInfo[0].firstName)
                let totalKM = 0;
                for (let i = 0; i < d.data.data.vehicleInfo.length; i++) {
                    let individual = d.data.data.vehicleInfo[i].mileageInformation;
                    totalKM += Number(individual[individual.length - 1].lastMileage);
                }
                setTotalKilometers(totalKM);
                setVehicleList(d.data.data.vehicleInfo);
                setTotalVehicles(d.data.data.vehicleInfo.length);
            })
    }

    useEffect(() => {
        getAllVehicles(sessionStorage.getItem('userKey'))
            .then(d => {
                //console.log(d.data.data.vehicleInfo)
                setName(d.data.data.userInfo[0].firstName)
                let totalKM = 0;
                for (let i = 0; i < d.data.data.vehicleInfo.length; i++) {
                    let individual = d.data.data.vehicleInfo[i].mileageInformation;
                    totalKM += Number(individual[individual.length - 1].lastMileage);
                }
                setTotalKilometers(totalKM);
                setVehicleList(d.data.data.vehicleInfo);
                setTotalVehicles(d.data.data.vehicleInfo.length);
            })
    }, []);

    //console.log(window.location.hash)



    const deleteSingleVehicle = (e) => {
        let newList = vehicleList.filter(d => d.id !== e.target.id)
        // console.log(newList)
        let filterVeh = vehicleList.filter(p => p.id === e.target.id);
        let remainingKM = filterVeh[0].mileageInformation[filterVeh[0].mileageInformation.length - 1].lastMileage;

        setTotalKilometers(totalKilometers - remainingKM);
        deleteVehicle(sessionStorage.getItem('userKey'), newList);
        setVehicleList(newList);
        setTotalVehicles(newList.length);
    }


    return (
        <Container>
            <Welcome totalVehicles={totalVehicles} totalKilometers={totalKilometers} name={name} />
            <VehicleList vehicleList={vehicleList} deleteSingleVehicle={deleteSingleVehicle} />
        </Container>
    )
}

export default Body;