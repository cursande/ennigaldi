import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql/execute'
  }
);

const query = gql`
  query Ennigaldi {
    articles {
      id
      title
      contentSummary
      images {
        uri
      }
    }
  }
`;

client
  .query({
    query: query
  })
  .then((result) => console.log(result));

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
