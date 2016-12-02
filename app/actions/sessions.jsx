import { httpGet }  from '../utils';

const Actions = {
  signInWithGithub: () =>
    (dispatch) => {
      httpGet('http://localhost:3000/')
      .then((data) => {
        debugger;
      });
    },
};

export default Actions;
