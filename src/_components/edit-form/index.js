import React, { useState } from 'react';
import { useStore, useDispatch } from '_hooks';
import styled from 'styled-components';
import {
  Modal,
} from 'antd';

const ColorPickerCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export default ()=> {
  const state = useStore();
  const { unEdit } = useDispatch();
  return(
    <Modal
      visible={state.edit.visible}
      title={`Editar ${state.edit.title}`}
      //onOk={()=> { setModal(false); Modal.destroyAll() }}
      onCancel={unEdit}
      destroyOnClose
    >

    </Modal>
  )
}