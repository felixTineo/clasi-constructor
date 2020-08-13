import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from '_services/client';
import Routes from 'routes';
import 'antd/dist/antd.css';
import Context from '_context/constructor';
import './App.css';

export default ()=> {
  return (
    <Context>
      <ApolloProvider client={client}>
        <Router>
          <Routes />
        </Router>
      </ApolloProvider>
    </Context>
  );
}
