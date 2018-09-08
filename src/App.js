import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import PlayerList from './components/PlayerList';
import AddPlayer from './components/AddPlayer';

// ApolloClient setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Learn GraphQL!</h1>
          <PlayerList />
          <AddPlayer />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
