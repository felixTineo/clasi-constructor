import React, { useState, useEffect } from 'react';
import {
  Layout,
  Modal,
  Tooltip,
  Button,
  Menu,
  Row,
  Col,
} from 'antd';
import { BgColorsOutlined } from '@ant-design/icons';
import { ChromePicker } from 'react-color';
import styled from 'styled-components';
import { useDispatch } from '_hooks';
import { edit } from '_context/constructor/actions';
import EditFrom from '_components/edit-form';
import ColorForm from '_components/edit-color';

const elemetsId = Object.values(edit);

const ColorPickerCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const { Content, Header, Footer } = Layout;

export default ({ children })=> {

  const {  onEdit, onColor } = useDispatch();

  useEffect(()=> {
    const elements = document.getElementsByClassName("edit-cont");
    for(let i = 0; i < elements.length; i++){
      const button = document.createElement("button");
      button.innerHTML = "Edit";
      button.id = elemetsId[i];
      button.classList = "edit-button";
      button.addEventListener('click', (e)=> onEdit(e.target.id));
      const el = elements[i];
      console.log(el, i)
      el.appendChild(button);
    }
  },[])

  return(
    <Layout>
      <Header style={{ minHeight: 66, color: "#fff", backgroundColor: "#fff", position: "fixed", width: "100%" , zIndex: 2000}}>
        <Row>
          <Col xs={6}>
            <img src={require("assets/images/logo.png")} width="180px" />
          </Col>
          <Col xs={16}>
            <Menu mode="horizontal">
              <Menu.Item key="1">Estilos</Menu.Item>
              <Menu.Item key="2">Color</Menu.Item>
              <Menu.Item key="3">Plantillas</Menu.Item>
            </Menu>                  
          </Col>
          <Col xs={2}>
            <Tooltip title="Editar color principal" placement="bottom">
              <Button onClick={onColor} type="primary" shape="circle" icon={<BgColorsOutlined />} />
            </Tooltip>
          </Col>
        </Row>
      </Header>
      <Content>
        {children}
      </Content>
      <EditFrom />
      <ColorForm />
    </Layout>
  )
}