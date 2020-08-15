import React, { useState } from 'react';
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
  right: .25rem;
  top: .25rem;
  z-index: 100;
`

export default ({ items, form })=>{
  const [cards, setCards] = useState(items);
  
  const onDelete = id => {
    console.log(id)
    console.log(cards);
    const newCards = cards.filter(card => card.id !== id);
    console.log(newCards);
    form.setFieldsValue({});
    setCards(newCards);
  }

  return(
    <Row gutter={[16, 16]}>
      {console.log(cards)}
      {
        cards.map((service, index) => (
          <Col key={service.id} xs={8}>
            <Card>
              <CloseCont>
                <Button
                  style={{ maxHeight: 25, maxWidth: 25, minWidth: 25, fontSize: 14 }}
                  icon={<CloseOutlined />}
                  shape="circle"
                  onClick={()=> onDelete(service.id)}
                />
              </CloseCont>
              <Form.Item initialValue={service.title} label="Titulo:" name={`service-title-${index + 1}`} preserve={false}>
                <Input />
              </Form.Item>
              <Form.Item initialValue={service.description} label="Descripción:" name={`service-description-${index + 1}`} preserve={false}>
                <Input.TextArea rows={4} />
              </Form.Item>            
            </Card>
          </Col>
        ))
      }
    </Row>
  )
}