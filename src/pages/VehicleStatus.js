import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import VehicleStatusBody from '../components/VehicleStatusBody';
import Footer from '../components/Footer';
import { getAllVehicles, getVehicleByOwnerAndVin, getInsuranceDetails } from '../services/vehicle';
// import { getVehicle } from '../services/vehicle';


const Container = styled.div``


const VehicleStatus = () => {
    const [vehicleInfo, setVehicleInfo] = useState({})
    const [individualVehicle, setIndivdualVehicle] = useState({})
    const id = window.location.hash.substring(17, window.location.hash.length)

    console.log(id)

    useEffect(() => {
        // getAllVehicles(sessionStorage.getItem('userKey'))
        //     .then(data => {
        //         console.log(data)
        //         data.data.forEach(d => {
        //             if (d.id === id) {
        //                 setIndivdualVehicle(d)
        //             }
        //         })
        //         setVehicleInfo(data.data.data.vehicleInfo)
        //     })
        getVehicleByOwnerAndVin(id)
            .then(response => {
                setVehicleInfo(response.data)
            })
    }, [])


    return (
        <Container>
            <Nav text="User Dashboard" />
            <VehicleStatusBody individualVehicle={vehicleInfo} vehicleInfo={vehicleInfo} />
            <Footer />
        </Container>
    )
}

export default VehicleStatus;