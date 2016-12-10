import Constants from '../constants';

const initialState = {
  builds: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.CURRENT_REPOSITORY_RECEIVED:
      return { ...state, ...action.repository };

    case Constants.CURRENT_REPOSITORY_BUILDS_RECEIVED:
      return { ...state, builds: action.builds };

    default:
      return state;
  }
}
