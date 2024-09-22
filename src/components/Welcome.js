import React from 'react';
import {Container, Title, Description, DescriptionText, Test} from '../styling/Welcome'

const Welcome = ({totalVehicles, totalKilometers, name}) => {
    return (
        <Container>
            <Test>
                <Title>Welcome Back To DryveTrack <br></br> {name}</Title>
                <Description>
                    <DescriptionText>
                        Here are the vehicles you are tracking maintenance for. Add new ones at any time!
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