import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const getPlayersQuery = gql`
  {
    players {
      name
    }
  }
`;

class PlayerList extends Component {
  render() {
    return (
      <div>
        <ul id="player-list">
          <Query query={getPlayersQuery}>
            {({ loading, error, data }) =>
              loading
                ? 'Loading...'
                : data.players.map(player => (
                    <li key={player.name}>{player.name}</li>
                  ))
            }
          </Query>
        </ul>
      </div>
    );
  }
}

export default PlayerList;
