import Constants    from '../constants';
import { httpGet }  from '../utils';

const Actions = {
  fetchBuild: (repositoryId, buildId) =>
    (dispatch) => {
      httpGet(`${API_URL}/api/v1/repositories/${repositoryId}/builds/${buildId}`)
      .then((data) => {
        dispatch({
          type: Constants.CURRENT_BUILD_RECEIVED,
          build: data,
        });
      });
    },
};

export default Actions;
