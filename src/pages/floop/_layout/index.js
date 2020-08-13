import React, { useEffect, useContext } from 'react';
import { StateContext } from '_context/constructor/context'
import { data } from '../data-test';
import OfficeContext from '../_context/office-context';
import styled, { ThemeProvider } from 'styled-components';
import Header from './header';
import Footer from './footer';
import './index.css';

const Layout = styled.div`
  overflow: hidden;
  position: relative;
`

const Body = styled.div`
  padding-top: calc(67px + 95px);
  min-height: 100vh;
  @media(min-width: 768px){
    padding-top: calc(89px + 95px);
  }
`

export default ({ children })=> {
  const dataContext = useContext(StateContext);
  console.log(dataContext);
  useEffect(()=>{
    /*const favicon = document.getElementById('favicon');
    document.title = data.webOffice.office.title;
    favicon.href = data.webOffice.office.favicon;*/
  },[])

  return(
    <OfficeContext.Provider value={dataContext}>
      <ThemeProvider theme={dataContext}>
        <Layout>
          <Header />
          <Body>
            {children}
          </Body>
          <Footer />
        </Layout>
      </ThemeProvider>
    </OfficeContext.Provider>
  )
}