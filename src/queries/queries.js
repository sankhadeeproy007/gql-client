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

export { getPlayers, getTeams, addPlayer };
