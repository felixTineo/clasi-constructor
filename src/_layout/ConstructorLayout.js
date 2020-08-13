import React, { useState, useEffect } from 'react';
import {
  Layout,
  Modal,
  Button,
  Menu,
  Row,
  Col,
} from 'antd';
import { ChromePicker } from 'react-color';
import styled from 'styled-components';
import { useDispatch } from '_hooks';
import { edit } from '_context/constructor/actions';
import EditFrom from '_components/edit-form';

const elemetsId = Object.values(edit);

const ColorPickerCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const { Content, Header, Footer } = Layout;

export default ({ children })=> {

  const [modal, setModal] = useState(false);
  const [color, setColor] = useState("#DC314F");
  const { handleColor, onEdit } = useDispatch();

  const onColor = value => {
    handleColor(value.hex);
    setColor(value.hex);
  }

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
      {console.log(color)}
      <Header style={{ minHeight: 66, color: "#fff", backgroundColor: "#fff", position: "fixed", width: "100%" , zIndex: 2000}}>
        <Row>
          <Col>
            <img src={require("assets/images/logo.png")} width="180px" />
          </Col>
          <Col>
            <Menu mode="horizontal">
              <Menu.Item key="1">Estilos</Menu.Item>
              <Menu.Item key="2">Color</Menu.Item>
              <Menu.Item key="3">Plantillas</Menu.Item>
            </Menu>                  
          </Col>
        </Row>
      </Header>
      <Content>
        {children}
      </Content>

      <EditFrom />
    </Layout>
  )
}