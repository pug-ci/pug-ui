import Constants    from '../constants';
import { httpGet }  from '../utils';

const Actions = {
  fetchRepository: repositoryId =>
    (dispatch) => {
      httpGet(`//localhost:3000/api/v1/repositories/${repositoryId}`)
      .then((data) => {
        dispatch({
          type: Constants.CURRENT_REPOSITORY_RECEIVED,
          repository: data,
        });
      });
    },

  fetchBuilds: repositoryId =>
    (dispatch) => {
      httpGet(`//localhost:3000/api/v1/repositories/${repositoryId}/builds`)
      .then((data) => {
        dispatch({
          type: Constants.CURRENT_REPOSITORY_BUILDS_RECEIVED,
          builds: data,
        });
      });
    },
};

export default Actions;
