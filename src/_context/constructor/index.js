import React, { useReducer } from 'react';
import reducer from './reducer';
import initialState from './state';
import { StateContext, DispatchContext } from './context';

export default ({ children })=> {
  const [state, dispatch] = useReducer(reducer, initialState)
  return(
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  )
}