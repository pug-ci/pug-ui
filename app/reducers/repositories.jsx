import Constants from '../constants';

const initialState = {
  repositories: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.REPOSITORIES_RECEIVED:
      return { ...state, repositories: action.repositories };

    case Constants.REPOSITORIES_RESET:
      return initialState;

    case Constants.REPOSITORIES_NEW_REPOSITORY_CREATED: {
      const { repositories } = state;

      return { ...state, repositories: [action.repository].concat(repositories) };
    }

    default:
      return state;
  }
}
