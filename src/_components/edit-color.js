import React, { useState } from 'react';
import { useStore, useDispatch } from '_hooks';
import {
  Modal
} from 'antd';
import { ChromePicker } from 'react-color';

export default ()=> {
  const visible = useStore().color;
  const { onColor, handleColor: dispatchColor } = useDispatch();
  const [color, setColor] = useState("#DC314F");
  const handleColor = () =>{
    console.log(color);
    dispatchColor(color);
    Modal.destroyAll();
    onColor();
  }
  return(
    <Modal
      visible={visible}
      title="Elige un color"
      onOk={handleColor}
      onCancel={onColor}
      destroyOnClose
      bodyStyle={{ justifyContent: "center", display: "flex", alignItems: "center" }}
    >
      <ChromePicker color={color} onChange={color => setColor(color.hex)} />
    </Modal>          
  )
}