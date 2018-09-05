import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const getTeams = gql`
  {
    teams {
      name
      leaguePosition
    }
  }
`;

class AddTeam extends Component {
  render() {
    return (
      <div>
        <form id="add-team">
          <div className="field">
            <label>Team name:</label>
            <input type="text" />
          </div>
          <div className="field">
            <label>City:</label>
            <input type="text" />
          </div>
          <div className="field">
            <label>League Position:</label>
            <input type="number" name="quantity" min="1" max="20" />
          </div>
          <button>Add Team</button>
        </form>
      </div>
    );
  }
}

export default AddTeam;
