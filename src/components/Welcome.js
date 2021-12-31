import React from 'react';
import {Container, Title, Description, DescriptionText, Test} from '../styling/Welcome'

const Welcome = ({totalVehicles, totalKilometers}) => {
    return (
        <Container>
            <Test>
                <Title>Welcome To VehicleTrack</Title>
                <Description>
                    <DescriptionText>
                        Here are the vehicles you are tracking maintenance for. Add new ones at any time!
                    </DescriptionText>
                    <DescriptionText>
                        Total Kilometers travelled by all vehicles: {totalKilometers}
                    </DescriptionText>
                    <DescriptionText>
                        Total # of vehicles: {totalVehicles}
                    </DescriptionText>
                </Description>
            </Test>
        </Container>
    )
}

export default Welcome;