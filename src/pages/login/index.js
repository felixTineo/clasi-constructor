import React, { Fragment } from 'react';
import Layout from '_layout/AuthLayout';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import {
  Row,
  Col,
  Form,
  Input,
  Button,
 } from 'antd';
 import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

 const MainCont = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
 `

 const FormCont = styled.div`
  width: 50%;
  overflow: hidden;
 `

 export default ()=> {

  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = values => {
    const { email, password }  = values;
    if(email === "admin@mail.com" && password === "123456"){
      history.push('/home');
    }
  }

  return(
    <Layout>
      <MainCont>
        <FormCont>
          <Form
            layout="vertical"
            form={form}
            name="login-form"
            onFinish={onFinish}
          >
            <Row gutter={[0, 8]}>
              <Col xs={24}>
                <img width="50%" src={require("assets/images/logo.png")} />
              </Col>
              <Col xs={24}>
                <Form.Item
                  label="Correo"
                  name="email"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item
                  label="Contraseña"
                  name="password"
                >
                  <Input.Password
                    placeholder="input password"
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item>
                  <Button
                    htmlType="submit"
                    type="primary"
                  >
                    Entrar
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </FormCont>
      </MainCont>
    </Layout>
  )
 }