import Constants    from '../constants';
import { httpGet }  from '../utils';

const Actions = {
  fetchRepositories: () =>
    (dispatch) => {
      httpGet('//localhost:3000/api/v1/repositories')
      .then((data) => {
        dispatch({
          type: Constants.REPOSITORIES_RECEIVED,
          connectedRepositories: data,
        });
      });
    },
};

export default Actions;
