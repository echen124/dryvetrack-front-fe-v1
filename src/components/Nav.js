import React from 'react';
import { Container, LogoContainer, ButtonContainer, AddVehicle } from '../styling/Nav'
import { Link } from "react-router-dom";


const Nav = ({ text }) => {

    const changeWindowLocation = () => {
        if (text === "Add Vehicle") {
            return (
                <AddVehicle>
                    <Link to="/add-vehicle" className='link-style'>{text}</Link>
                </AddVehicle>
            )
        }

        if (text === "User Dashboard") {
            return (
                <AddVehicle>
                    <Link to="/" className='link-style'>{text}</Link>
                </AddVehicle>
            )
        }

        if (window.location.pathname.substring(0, 16) === "/vehicle-status/") {
            return (
                <AddVehicle>
                    <Link to="/" className='link-style'>{text}</Link>
                </AddVehicle>
            )
        }


    }

    return (
        <Container>
            <LogoContainer>
                <Link to="/" className='link-logo'>VehicleTrack</Link>
            </LogoContainer>
            <ButtonContainer>
                {/* {changeWindowLocation()} */}
                <AddVehicle>
                    <Link to="/" className='link-style'>Get Started</Link>
                </AddVehicle>
                <AddVehicle>
                    <Link to="/" className='link-style'>Login</Link>
                </AddVehicle>
            </ButtonContainer>
        </Container>
    )
}

export default Nav;