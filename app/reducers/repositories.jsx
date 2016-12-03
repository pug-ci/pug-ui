import Constants from '../constants';

const initialState = {
  integratedRepositories: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.REPOSITORIES_RECEIVED:
      return { ...state, integratedRepositories: action.integratedRepositories };

    default:
      return state;
  }
}
