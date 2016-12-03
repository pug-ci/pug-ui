import { push }     from 'react-router-redux';
import Constants    from '../constants';
import { httpGet }  from '../utils';

const Actions = {
  signInWithGithub: () =>
    () => {
      location.href = '//localhost:3000/auth/github';
    },

  currentUser: () =>
    (dispatch) => {
      httpGet('//localhost:3000/api/v1/current_user')
      .then((data) => {
        dispatch({
          type: Constants.CURRENT_USER,
          currentUser: data,
        });
      })
      .catch(() => {
        dispatch(push('/sign_in'));
      });
    },

  signOut: () =>
    (dispatch) => {
      localStorage.removeItem('authToken');
      dispatch({ type: Constants.USER_SIGNED_OUT });
      dispatch(push('/sign_in'));
      dispatch({ type: Constants.REPOSITORIES_RESET });
    },
};

export default Actions;
