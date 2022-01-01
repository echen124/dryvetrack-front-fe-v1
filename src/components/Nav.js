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
                    <Link to="/user-dashboard" className='link-style'>{text}</Link>
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

        if (text === "Login" || text === "Register" || window.location.hash === "#/") {
            return (
                <div>
                    <AddVehicle>
                        <Link to="/register" className='link-style'>Get Started</Link>
                    </AddVehicle>
                    <AddVehicle>
                        <Link to="/login" className='link-style'>Login</Link>
                    </AddVehicle>
                </div>
            )
        }
    }

    const LogoutButton = () => {
        if (text === "Add Vehicle") {
            return (
                <AddVehicle onClick={() => logout()}>
                    <Link to="/" className='link-style'>Logout</Link>
                </AddVehicle>
            )
        }
    }

    const logout = () => {
        sessionStorage.clear();
    }

    const LogoLink = () => {
        if (window.location.hash === "#/user-dashboard" || window.location.hash === "#/add-vehicle" || window.location.hash.substring(0, 16) === "#/vehicle-status") {
            return (
                <LogoContainer>
                    <Link to="/user-dashboard" className='link-logo'>VehicleTrack</Link>
                </LogoContainer>
            )
        } else {
            return (
                <LogoContainer>
                    <Link to="/" className='link-logo'>VehicleTrack</Link>
                </LogoContainer>
            )
        }
    }

    return (
        <Container>
            {/* <LogoContainer>
                <Link to="/" className='link-logo'>VehicleTrack</Link>
            </LogoContainer> */}
            {LogoLink()}
            <ButtonContainer>
                {changeWindowLocation()}
                {LogoutButton()}
            </ButtonContainer>
        </Container>
    )
}

export default Nav;