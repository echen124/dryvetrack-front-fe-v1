import styled from 'styled-components';

const Container = styled.div`
background-color: #143642;
border-top: 1px solid #0f4457;
display: flex;
justify-content: space-between;
padding-top: 3em;
padding-bottom: 3em;
`

const Left = styled.div`
flex:1;
text-align: center;
`

const Right = styled.div`
flex:1;
text-align: center;
`

const Title = styled.p`
margin: 0;
padding: 0;
font-size: 30px;
color: white;
`

const TextContainer = styled.p`
margin: 0;
padding: 0;
color: white;
`

const GitLink = styled.a`
color: white;
`

export {Container, Left, Right, Title, TextContainer, GitLink};