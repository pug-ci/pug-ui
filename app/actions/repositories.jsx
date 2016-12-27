import Constants            from '../constants';
import { httpGet, httpPut } from '../utils';

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

  synchronizeRepositories: () =>
    (dispatch) => {
      httpGet(`${API_URL}/api/v1/repositories/synchronize`)
      .then((data) => {
        dispatch({
          type: Constants.REPOSITORIES_RECEIVED,
          repositories: data,
        });
      });
    },

  connectRepository: repositoryId =>
    (dispatch) => {
      httpPut(`${API_URL}/api/v1/repositories/${repositoryId}/connect`, {})
      .then((data) => {
        dispatch({
          type: Constants.REPOSITORIES_REPOSITORY_UPDATED,
          repository: data,
        });
      });
    },

  disconnectRepository: repositoryId =>
    (dispatch) => {
      httpPut(`${API_URL}/api/v1/repositories/${repositoryId}/disconnect`, {})
      .then((data) => {
        dispatch({
          type: Constants.REPOSITORIES_REPOSITORY_UPDATED,
          repository: data,
        });
      });
    },
};

export default Actions;
