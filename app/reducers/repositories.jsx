import Constants from '../constants';

const initialState = {
  connectedRepositories: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.REPOSITORIES_RECEIVED:
      return { ...state, connectedRepositories: action.connectedRepositories };

    case Constants.REPOSITORIES_RESET:
      return initialState;

    default:
      return state;
  }
}
