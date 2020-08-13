import React from 'react';
import {
  Modal
} from 'antd';
import { ChromePicker } from 'react-color';

export default ()=> {

  return(
    <Modal
    visible={modal}
    title="Elige un color"
    onOk={()=> { setModal(false); Modal.destroyAll() }}
    onCancel={()=> setModal(false)}
    destroyOnClose
  >
    <ChromePicker color={color} onChange={onColor} />
  </Modal>          
  )
}