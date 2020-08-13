import React, { Fragment } from 'react';
import styled from 'styled-components';
import {
  Row,
  Col,
 } from 'antd';
import { useHistory } from 'react-router-dom';

const MainCont = styled.section`
  height: 100vh;
  overflow: hidden;
`

export default ({ children })=> {
  const history = useHistory();

  const handleLogin = () => {
    history.push('/home');
  }

return(
  <MainCont>
    <Row>
      <Col xs={24} md={12}>
        {children}
      </Col>
      <Col xs={0} md={12}>
        <img width="100%" src={require("assets/images/login/background.png")} />
      </Col>      
    </Row>
  </MainCont>
)
}