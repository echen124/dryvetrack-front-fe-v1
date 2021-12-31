import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import VehicleStatusBody from '../components/VehicleStatusBody';
import Footer from '../components/Footer';
import { getVehicle } from '../services/vehicle';


const Container = styled.div``


const VehicleStatus = () => {
    const [vehicleInfo, setVehicleInfo] = useState([])

    useEffect(() => {
        getVehicle(window.location.hash.substring(17, window.location.hash.length).toString())
            .then(data => {
                setVehicleInfo(data)
            })
    }, [])


    return (
        <Container>
            <Nav text="User Dashboard" />
            <VehicleStatusBody vehicleInfo = {vehicleInfo} />
            <Footer />
        </Container>
    )
}

export default VehicleStatus;