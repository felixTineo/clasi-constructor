import { ApolloClient, InMemoryCache } from '@apollo/client';

export default new ApolloClient({
  uri: 'http://52.38.140.134:4000/',
  cache: new InMemoryCache(),
})