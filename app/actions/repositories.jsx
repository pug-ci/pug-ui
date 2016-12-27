import Constants              from '../constants';
import { httpGet, httpPost }  from '../utils';

const Actions = {
  fetchRepositories: () =>
    (dispatch) => {
      httpGet(`${API_URL}/api/v1/repositories`)
      .then((data) => {
        dispatch({
          type: Constants.REPOSITORIES_RECEIVED,
          repositories: data,
        });
      });
    },

  createRepository: repository =>
    (dispatch) => {
      httpPost(`${API_URL}/api/v1/repositories`, { repository })
      .then((data) => {
        dispatch({
          type: Constants.REPOSITORIES_NEW_REPOSITORY_CREATED,
          repository: data,
        });
      });
    },
};

export default Actions;
