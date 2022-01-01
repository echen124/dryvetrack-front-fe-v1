import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import VehicleStatusBody from '../components/VehicleStatusBody';
import Footer from '../components/Footer';
import { getAllVehicles } from '../services/vehicle';
// import { getVehicle } from '../services/vehicle';


const Container = styled.div``


const VehicleStatus = () => {
    const [vehicleInfo, setVehicleInfo] = useState([])
    const [individualVehicle, setIndivdualVehicle] = useState({})
    const id = window.location.hash.substring(17, window.location.hash.length)

    useEffect(() => {
        getAllVehicles(sessionStorage.getItem('userKey'))
            .then(data => {
                data.data.data.vehicleInfo.forEach(d => {
                    if (d.id === id) {
                        setIndivdualVehicle(d)
                    }
                })
                setVehicleInfo(data.data.data.vehicleInfo)
            })
    }, [])


    return (
        <Container>
            <Nav text="User Dashboard" />
            <VehicleStatusBody individualVehicle={individualVehicle} vehicleInfo={vehicleInfo} />
            <Footer />
        </Container>
    )
}

export default VehicleStatus;