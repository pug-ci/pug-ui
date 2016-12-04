import Constants from '../constants';

const initialState = {
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.CURRENT_BUILD_RECEIVED:
      return { ...state, ...action.build };

    default:
      return state;
  }
}
