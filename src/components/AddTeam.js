import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import { addTeam } from '../queries/queries';

class AddTeam extends Component {
  constructor() {
    super();
    this.state = { name: '', leaguePosition: 0, city: '' };
    this.initialState = this.state;
  }
  render() {
    const initialState = { name: '', leaguePosition: 0, city: '' };
    return (
      <div>
        <Mutation
          mutation={addTeam}
          onError={error => this.setState(initialState)}
          onCompleted={data => {
            this.setState(initialState);
          }}
        >
          {(addTeam, { loading, error, data }) => (
            <form
              onSubmit={e => {
                e.preventDefault();
                console.log(this.state);
                addTeam({
                  variables: {
                    name: this.state.name,
                    leaguePosition: this.state.leaguePosition,
                    city: this.state.city
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
                <label>LeaguePosition:</label>
                <input
                  required
                  onChange={e =>
                    this.setState({
                      leaguePosition: parseInt(e.target.value, 10)
                    })
                  }
                  type="number"
                />
              </div>
              <div className="field">
                <label>City:</label>
                <input
                  required
                  onChange={e =>
                    this.setState({
                      city: e.target.value
                    })
                  }
                  type="text"
                />
              </div>

              <button>{loading ? 'Adding' : 'Add Team'}</button>
            </form>
          )}
        </Mutation>
      </div>
    );
  }
}

export default AddTeam;
