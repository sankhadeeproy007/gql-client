import React, { Component } from 'react';
import { Query } from 'react-apollo';

import { getPlayerDetails } from '../queries/queries';

class PlayerDetails extends Component {
  render() {
    return (
      <div>
        <Query query={getPlayerDetails} variables={{ id: this.props.playerId }}>
          {({ loading, error, data }) =>
            loading ? (
              'Loading details...'
            ) : (
              <div>
                <ul>Name: {data.player.name}</ul>
                <ul>Team: {data.player.team.name}</ul>
                <ul>Position: {data.player.position}</ul>
                <ul>
                  Preferred Foot: {data.player.isRightFooted ? 'Right' : 'Left'}
                </ul>
                <ul>League Position: {data.player.team.leaguePosition}</ul>
                <ul>
                  Teammates:
                  {data.player.team.players.map(player => (
                    <li key={player.id}>{player.name}</li>
                  ))}
                </ul>
              </div>
            )
          }
        </Query>
      </div>
    );
  }
}

export default PlayerDetails;
