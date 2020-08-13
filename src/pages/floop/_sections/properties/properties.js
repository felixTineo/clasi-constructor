import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { ImageCard as Card } from '../../_components/card';
import OfficeContext from '../../_context/office-context';

const query = (officeId)=> `
  query {
    paginateProperties(input:{
      officeId: "${officeId}"
    }){
      totalRegisters
      totalResults
      page
      properties{
        id
        code
        operation
        currency
        value
        mainImage
        title
        status
        ubication{ address }
        characteristics{
          id
          name
          value
        }
      }
    }
  }
`

export default ()=> {
  const officeId = useContext(OfficeContext).webOffice.office.officeId;
  const propertyList = useContext(OfficeContext).webOffice.home.properties.propertyList;
  const properties = [...propertyList, ...propertyList];
  
  const handleQuery = async()=> {
    const options = {
      method: 'POST',
      headers: { "Content-Type": "application/json"  },
      body: JSON.stringify({ query: query(officeId) }),
      mode: 'cors',
    }
    const url = 'http://52.38.140.134:4000/';
    const res = await fetch(url, options);
    const result = await res.json();
    console.log(result);
  }

  useEffect(()=>{
    //handleQuery();
  },[]);

  return(
    <Container>
      <div style={{ paddingTop: '5rem' }}>
        <Row>
          {
            properties.slice(0, 12).map(p => (
              <Col key={p.mainImage} xs={12} md={4} style={{ margin: "1rem 0" }}>
                <Card {...p} />
              </Col>
            ))
          }
          <Col xs={12}>
            <span>navigation</span>
          </Col>
        </Row>
      </div>
    </Container>
  )
}