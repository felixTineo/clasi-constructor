import React from 'react';
import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import {
  Row,
  Col,
  Form,
  Input,
  Button,
} from 'antd';

const MainCont = styled.div`

`

const Card = styled.div`
  position: relative;
  width: 100%;
  padding: .5rem;
  border: 1px solid rgba(0, 0, 0, .12);
  border-radius: 2px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12);
`
const CloseCont = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100;
`

export default ()=>{
  return(
    <Row gutter={[16, 16]}>
      {
        Array(6).fill(0).map((service, index) => (
          <Col key={index} xs={8}>
            <Card>
              <CloseCont>
                <Button style={{ maxHeight: 25, maxWidth: 25, minWidth:  fontSize: 14 }} icon={<CloseOutlined />} shape="circle" />
              </CloseCont>
              <Form.Item label="Titulo:" name={`service-title-${index + 1}`}>
                <Input />
              </Form.Item>
              <Form.Item label="Descripción:" name={`service-description-${index + 1}`}>
                <Input.TextArea rows={4} />
              </Form.Item>            
            </Card>
          </Col>
        ))
      }
    </Row>
  )
}