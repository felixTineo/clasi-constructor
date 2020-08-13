import React, { Fragment, useContext } from 'react';
import { GET_OFFICE_BY_ID } from '_services/Office';
import { useQuery } from '@apollo/client';
import { StateContext } from '_context/constructor/context';
import { useDispatch } from '_hooks';

const dataTest = {
  "office": {
    "id": "5e8e36b31c9d440000d35090",
    "name": "ClasiHome",
    "email": "clasi@clasihome.cl",
    "address": "Hola",
    "phone": {
      "countryCode": "5555",
      "areaCode": "555",
      "phoneNumber": "55555555"
    }
  }
}


export default ()=> {
  /*const { data, loading, error } = useQuery(GET_OFFICE_BY_ID,{
    variables: { id: "5e8e36b31c9d440000d35090" },
  })

  if(loading) return <p>loading...</p>
  if(error) return <p>{error.message}</p>*/

  //console.log(data);

  const { office } = dataTest;
  const state = useContext(StateContext);
  const { handleColor } = useDispatch();
  
  console.log(state);
  return(
    <Fragment>
      <h1 style={{ color: state.primaryColor }}>Home</h1>
      <button onClick={()=>handleColor("green")}>click</button>
    </Fragment>
  )
}