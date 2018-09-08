import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';

import { getTeams, addPlayer } from '../queries/queries';

class AddPlayer extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      position: 'GK',
      isRightFooted: true,
      teamId: ''
    };
    this.initialState = this.state;
  }
  render() {
    const initialState = {
      name: '',
      position: 'GK',
      isRightFooted: true,
      teamId: ''
    };
    return (
      <div>
        <Mutation
          mutation={addPlayer}
          onError={error => this.setState(initialState)}
          onCompleted={data => {
            alert(data.addPlayer.name + ' added succesfully!');
            this.setState(initialState);
          }}
        >
          {(addPlayer, { loading, error, data }) => (
            <form
              id="add-team"
              onSubmit={e => {
                e.preventDefault();
                addPlayer({
                  variables: {
                    name: this.state.name,
                    position: this.state.position,
                    isRightFooted: this.state.isRightFooted,
                    teamId: this.state.teamId
                  }
                });
              }}
            >
              <div className="field">
                <label>Name:</label>
                <input
                  required
                  onChange={e =>
                    this.setState({
                      name: e.target.value
                    })
                  }
                  type="text"
                />
              </div>
              <div className="field">
                <label>Position:</label>
                <select
                  required
                  onChange={e =>
                    this.setState({
                      position: e.target.value
                    })
                  }
                >
                  <option>GK</option>
                  <option>DEF</option>
                  <option>MID</option>
                  <option>FWD</option>
                </select>
              </div>
              <div className="field">
                <label>Preferred Foot:</label>
                <select
                  onChange={e =>
                    this.setState({
                      isRightFooted: e.target.value === 'Right' ? true : false
                    })
                  }
                >
                  <option>Right</option>
                  <option>Left</option>
                </select>
              </div>
              <div className="field">
                <label>Team:</label>
                <select
                  onChange={e => {
                    console.log(e.target.value);
                    this.setState({ teamId: e.target.value });
                  }}
                >
                  <option>Select Team</option>
                  <Query query={getTeams}>
                    {({ loading, error, data }) =>
                      loading ? (
                        <option disabled>Loading teams..</option>
                      ) : (
                        data.teams.map(team => (
                          <option key={team.id} value={team.id}>
                            {team.name}
                          </option>
                        ))
                      )
                    }
                  </Query>
                </select>
              </div>

              <button>{loading ? 'Adding' : 'Add Player'}</button>
            </form>
          )}
        </Mutation>
      </div>
    );
  }
}

export default AddPlayer;
