import React from 'react';
import {Container, Left, Right, Title, TextContainer, GitLink} from '../styling/Footer'

const Footer = () => {
    return (
        <Container>
            <Left>
                <Title>Built By</Title>
                <TextContainer>
                    Edmond Chen
                </TextContainer>
            </Left>
            <Right>
                <Title>Links</Title>
                <TextContainer>
                    <GitLink href="https://github.com/echen12">
                        Github
                    </GitLink>
                </TextContainer>
            </Right>
        </Container>
    )
}

export default Footer;