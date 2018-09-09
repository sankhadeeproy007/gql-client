import { gql } from 'apollo-boost';

const getPlayers = gql`
  {
    players {
      name
      id
    }
  }
`;

const getTeams = gql`
  {
    teams {
      name
      id
    }
  }
`;

const addPlayer = gql`
  mutation(
    $name: String!
    $position: String!
    $isRightFooted: Boolean!
    $teamId: ID!
  ) {
    addPlayer(
      name: $name
      position: $position
      isRightFooted: $isRightFooted
      teamId: $teamId
    ) {
      name
      id
    }
  }
`;

const addTeam = gql`
  mutation($name: String!, $leaguePosition: Int!, $city: String!) {
    addTeam(name: $name, leaguePosition: $leaguePosition, city: $city) {
      name
      id
    }
  }
`;

const getPlayerDetails = gql`
  query($id: ID) {
    player(id: $id) {
      name
      position
      isRightFooted
      team {
        name
        leaguePosition
        players {
          name
          id
        }
      }
    }
  }
`;

export { getPlayers, getTeams, addPlayer, addTeam, getPlayerDetails };
