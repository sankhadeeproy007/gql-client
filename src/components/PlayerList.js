import React, { Component } from 'react';
import { Query } from 'react-apollo';

import PlayerDetails from './PlayerDetails';
import { getPlayers } from '../queries/queries';

class PlayerList extends Component {
  constructor() {
    super();
    this.state = {
      selectedPlayer: null
    };
  }
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <ul id="player-list" style={{ flex: 1 }}>
          <Query query={getPlayers}>
            {({ loading, error, data }) =>
              loading
                ? 'Loading...'
                : data.players.map(player => (
                    <li
                      key={player.id}
                      onClick={() =>
                        this.setState({ selectedPlayer: player.id })
                      }
                    >
                      {player.name}
                    </li>
                  ))
            }
          </Query>
        </ul>
        {this.state.selectedPlayer && (
          <PlayerDetails playerId={this.state.selectedPlayer} />
        )}
      </div>
    );
  }
}

export default PlayerList;
