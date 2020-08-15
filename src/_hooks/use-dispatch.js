import React, { useContext } from 'react';
import {
  primaryColor,
  onEdit as editCreator,
  unEdit as closeEditCreator,
  onColor as colorCreator,
  onLogo,
  onHero,
  onAboutBanner,
} from '_context/constructor/actions';
import { DispatchContext } from '_context/constructor/context';

export default () => {
  const dispatch = useContext(DispatchContext);
  const onEdit = (id) => {
    const split = id.split(":");
    const payload = { type: split[0], title: split[1] }
    console.log(payload);
    dispatch(editCreator(payload));
  }
  return {
    handleColor: (color)=> dispatch(primaryColor(color)),
    onEdit,
    unEdit: ()=> dispatch(closeEditCreator()),
    onColor: ()=> dispatch(colorCreator()),
    onLogo: payload => dispatch(onLogo(payload)),
    onHero: payload => dispatch(onHero(payload)),
    onAboutBanner: payload => dispatch(onAboutBanner(payload))
  }
}