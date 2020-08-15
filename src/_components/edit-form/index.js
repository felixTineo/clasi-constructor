import React from 'react';
import { useStore, useDispatch } from '_hooks';
import UploadInput from './upload';
import TextCards from './text-cards';
import { v1 as uuid } from 'uuid';
import {
  Modal,
  Tabs,
  Form,
  Input,
  Checkbox,
} from 'antd';

const { TabPane } = Tabs;

export default ()=> {
  const state = useStore();
  const {
    unEdit,
    onLogo,
    onHero,
    onAboutBanner,
    onServices,
  } = useDispatch();

  const [form] = Form.useForm();

  const onHandlers = (type) => {
    switch(type){
      case "LOGO":
        return handleLogo;
      case "HERO":
        return handleHero;
      case "ABOUT_BANNER":
        return handleAboutBanner;
      case "ABOUT_SERVICES":
        return handleAboutServices;
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

  const handleAboutBanner = values => {
    onAboutBanner(values);
  }

  const handleAboutServices = values => {
    let services = [];
    let index = 1;
    for(let key in values){
      const serviceKey = key.match(/service-title/) && key;
      if(serviceKey){
        const id = uuid();
        const title = values[`service-title-${index}`];
        const description = values[`service-description-${index}`];
        const service = {id, title, description};
        services.push(service);
        index++;
      }
    }
    const payload = { visible: values.visible, items: services };
    onServices(payload);
  }

  const onFinish = values => {
    const handler = onHandlers(state.edit.type);
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
      width={720}
    >
      <Form
        name="edit-form"
        form={form}
        layout="vertical"
        initialValues={{ visible: true }}
      >
        <Form.Item name="visible" valuePropName="checked">
          <Checkbox initialValue={true}>Esta sección sera visible</Checkbox>
        </Form.Item>
        {
          state.edit.type === "LOGO"
          ||state.edit.type === "HERO"
           ? (
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
          ): null
        }
        {
          state.edit.type === "ABOUT_BANNER"
          ?(
            <Tabs defaultActiveKey="1">
              <TabPane key="1" tab="Titulo">
                <Form.Item name="title" label="Titulo">
                  <Input.TextArea rows={2} />
                </Form.Item>
                <Form.Item name="subTitle" label="Sub-titulo">
                  <Input.TextArea rows={4} />
                </Form.Item>
                <Form.Item name="buttonText" label="Texto en el botón">
                  <Input />
                </Form.Item>
              </TabPane>
              <TabPane key="2" tab="Imagen" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Form.Item name="image">
                  <UploadInput />
                </Form.Item>
              </TabPane>
            </Tabs>                        
          )
          :null
        }
        {
          state.edit.type === "ABOUT_SERVICES"
          ?(
            <TextCards form={form} items={state.home.services.items} />
          ):null
        }
      </Form>
    </Modal>
  )
}