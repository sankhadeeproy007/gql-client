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
        <ul id="player-list" style={{ width: '60%' }}>
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
                      <a>{player.name}</a>
                    </li>
                  ))
            }
          </Query>
        </ul>
        <div className="details">
          {this.state.selectedPlayer ? (
            <PlayerDetails playerId={this.state.selectedPlayer} />
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <h2> Select a player to see details</h2>
              <img
                src="https://im.ezgif.com/tmp/ezgif-1-d4a617a6b5.gif"
                style={{ width: '80%' }}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PlayerList;
