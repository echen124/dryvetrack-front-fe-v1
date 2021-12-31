import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Body from '../components/Body';
import Footer from '../components/Footer';

const Container = styled.div``

const UserDashboard = () => {
    return(
        <Container>
            <Nav text="Add Vehicle" />
            <Body />
            <Footer />
        </Container>
    )
}

export default UserDashboard;