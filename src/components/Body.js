import React, { useState, useEffect } from 'react';
import Welcome from './Welcome';
import VehicleList from './VehicleList';
import { Container } from '../styling/Body'
import { getAllVehicles, deleteVehicle } from '../services/vehicle';

const Body = () => {
    const [vehicleList, setVehicleList] = useState([]);
    const [totalKilometers, setTotalKilometers] = useState("");
    const [totalVehicles, setTotalVehicles] = useState(0);
    const [vehicleIdToDelete, setVehicleIdToDelete] = useState("")
    const [toDelete, setToDelete] = useState(false)
    const [name, setName] = useState("");

    useEffect(() => {
        getAllVehicles()
            .then(response => {
                console.log(response.data)
                setVehicleList(response.data);
                setTotalVehicles(response.data.length);
            })
    }, []);

    useEffect(() => {
        if (toDelete) {
            deleteVehicle(vehicleIdToDelete)
                .then(response => {
                    console.log(response)
                })
        }
        setToDelete(false)
    }, [toDelete]);



    const deleteSingleVehicle = (e) => {
        let newList = vehicleList.filter(d => d.id !== e.target.id)
        setVehicleList(newList);
        setTotalVehicles(newList.length);
        setVehicleIdToDelete(e.target.id)
        setToDelete(true)
        console.log(e)
    }


    return (
        <Container>
            <Welcome totalVehicles={totalVehicles} totalKilometers={totalKilometers} name={name} />
            <VehicleList vehicleList={vehicleList} deleteSingleVehicle={deleteSingleVehicle} />
        </Container>
    )
}

export default Body;