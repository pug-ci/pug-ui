import Constants from '../constants';

const initialState = {
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.CURRENT_REPOSITORY_RECEIVED:
      return { ...state, ...action.repository };

    default:
      return state;
  }
}
