import React, { useContext, Fragment } from 'react';
import styled from 'styled-components';
import OfficeContext from '../../_context/office-context';
import { ImageCardCarousel } from '../../_components/card'
import { Container, Row, Col } from 'react-grid-system';
import { Button } from '../../_components/buttons';

const MainSection = styled.section`
  min-height: 100vh;
  position: relative;
  padding-bottom: 4rem;
  &::before{
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    height: 50%;
    width: 100%;
    background-color: ${props => props.theme.main.primaryColor};
  }
`
const TitleSection = styled.h2`
  margin: 0;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center; 
  color: ${props => props.theme.main.secondaryColor};
  text-align: center;
`
const FooterSection = styled.footer`
  background-color: #fff;
  text-align: center;
  padding: 1rem 0;
  @media(min-width: 768px){
    text-align: left;
  }
`

export default ()=> {
  const properties = useContext(OfficeContext).home.properties;
  return(
    <Fragment>
    <MainSection>
      <Container>
        <TitleSection className="edit-cont">
          <img src={require('assets/images/templates/floop/marker.svg')} style={{ marginBottom: "1rem" }} />
          {properties.title}
        </TitleSection>
        <ImageCardCarousel items={properties.items} />
      </Container>
    </MainSection>
    <FooterSection>
      <Container>
        <Row align="center">
          <Col xs={12} md={9}>
          <h3>{properties.footer}</h3>
          </Col>
          <Col xs={12} md={3}>
            <Button outlined primary block>{properties.buttonText}</Button>
          </Col>          
        </Row>
      </Container>
    </FooterSection>
    </Fragment>
  )
}