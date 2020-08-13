import React, { useState } from 'react';
import { useStore, useDispatch } from '_hooks';
import styled from 'styled-components';
import {
  Modal,
  Tabs,
  Form,
  Input,
  Upload,
  Checkbox,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

const UploadButton = ({ type })=> (
  <div>
    {/*this.state.loading ? <LoadingOutlined /> : <PlusOutlined />*/}
    <PlusOutlined />
    <div className="ant-upload-text">{type}</div>
  </div>
);

const UploadInput = ({ onChange, value }) => {
  const state = useStore();
  const handleChange = info => {
    const image = URL.createObjectURL(info.file.originFileObj);
    onChange(image);
  }

  return(
    <Upload
      name="logo"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      //beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {
        value ? <img src={value} alt="ingreso de imagenes" style={{ width: '100%' }} /> : <UploadButton type="jpg/png/svg" />
      }
    </Upload>    
  )
}

export default ()=> {
  const state = useStore();
  const { unEdit, onLogo, onHero } = useDispatch();
  const [form] = Form.useForm();

  const onHandlers = (type) => {
    switch(type){
      case "LOGO":
        return handleLogo;
      case "HERO":
        return handleHero;
    }
  }
  const handleLogo = values => {
    const isImage = values.image ? true : false;
    const payload = { isImage, value: isImage ? values.image : values.title };
    onLogo(payload);
  }

  const handleHero = values => {
    const { title, visible, image } = values;
    const payload = { visible, title, background: image };
    onHero(payload);
  }

  const onFinish = values => {
    const handler = onHandlers(state.edit.nextAction);
    handler(values);
    Modal.destroyAll();
    form.resetFields();
    unEdit();
  }

  return(
    <Modal
      visible={state.edit.visible}
      title={`Editar ${state.edit.title}`}
      onOk={()=> onFinish(form.getFieldValue())}
      onCancel={unEdit}
      destroyOnClose
    >
      <Form
        name="edit-form"
        form={form}
        layout="vertical"
        initialValues={{ visible: true }}
      >
        <Form.Item name="visible" valuePropName="checked">
          <Checkbox>Esta sección sera visible</Checkbox>
        </Form.Item>
        {
          state.edit.input === "TEXT" && (
            <Form.Item label="Ingrese un texto:" name="title">
              <Input.TextArea rows={4} />
            </Form.Item>
          )
        }
        {
          state.edit.input === "IMAGE" && (
            <Form.Item name="image" label="Ingrese una imagen:">
              <UploadInput />
            </Form.Item>            
          )
        }
        {
          state.edit.input === "BOTH" && (
            <Tabs defaultActiveKey="1">
              <TabPane key="1" tab="Titulo">
                <Form.Item name="title">
                  <Input.TextArea rows={4} />
                </Form.Item>
              </TabPane>
              <TabPane key="2" tab="Imagen" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Form.Item name="image">
                  <UploadInput />
                </Form.Item>
              </TabPane>
            </Tabs>            
          )
        }
      </Form>
    </Modal>
  )
}