import React, { useContext } from 'react';
import {
  primaryColor,
  onEdit as editCreator,
  unEdit as closeEditCreator,
  onColor as colorCreator,
  logo,
} from '_context/constructor/actions';
import { DispatchContext } from '_context/constructor/context';

export default () => {
  const dispatch = useContext(DispatchContext);
  const onEdit = (id) => {
    const split = id.split(":");
    const payload = { visible: true, input: split[0], nextAction: split[1], title: split[2] }
    dispatch(editCreator(payload));
  }
  return {
    handleColor: (color)=> dispatch(primaryColor(color)),
    onEdit,
    unEdit: ()=> dispatch(closeEditCreator()),
    handleLogo: ()=> dispatch(logo()),
    onColor: ()=> dispatch(colorCreator()),
  }
}