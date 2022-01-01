import React from 'react';
import {Container, MileageDate, MileageKM} from '../styling/IndividualMileage'

const IndividualMileage = ({lastUpdate, lastMileage}) => {
    return (
        <Container>
            <MileageDate>{lastUpdate}</MileageDate>
            <MileageKM>{lastMileage}</MileageKM>
            <MileageKM>KM</MileageKM>
        </Container>
    )
}

export default IndividualMileage;