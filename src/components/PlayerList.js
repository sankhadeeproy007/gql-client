import React, { Component } from 'react';
import { Query } from 'react-apollo';

import { getPlayers } from '../queries/queries';

class PlayerList extends Component {
  render() {
    return (
      <div>
        <ul id="player-list">
          <Query query={getPlayers}>
            {({ loading, error, data }) =>
              loading
                ? 'Loading...'
                : data.players.map(player => (
                    <li key={player.id}>{player.name}</li>
                  ))
            }
          </Query>
        </ul>
      </div>
    );
  }
}

export default PlayerList;
