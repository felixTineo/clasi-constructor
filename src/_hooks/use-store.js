import React, { useContext } from 'react';
import { StateContext } from '_context/constructor/context';

export default ()=> {
  const state = useContext(StateContext);
  return state;
}