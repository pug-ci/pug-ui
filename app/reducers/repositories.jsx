import Constants from '../constants';

const initialState = {
  connectedRepositories: [],
  remoteRepositories: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.REPOSITORIES_RECEIVED:
      return { ...state, connectedRepositories: action.connectedRepositories };

    case Constants.REPOSITORIES_REMOTE_RECEIVED:
      return { ...state, remoteRepositories: action.remoteRepositories };

    case Constants.REPOSITORIES_RESET:
      return initialState;

    case Constants.REPOSITORIES_NEW_REPOSITORY_CREATED: {
      const { connectedRepositories } = state;

      return { ...state, connectedRepositories: [action.repository].concat(connectedRepositories) };
    }

    default:
      return state;
  }
}
