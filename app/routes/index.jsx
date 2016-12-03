import { Route, IndexRoute }  from 'react-router';
import React                  from 'react';
import MainLayout             from '../layouts/main';
import AuthenticatedContainer from '../containers/authenticated';
import Actions                from '../actions/sessions';
import SessionNew             from '../views/sessions/new';
import RepositoriesIndex      from '../views/repositories/index';

export default function configRoutes(store) {
  const ensureAuthenticated = (nextState, replace, callback) => {
    const { dispatch } = store;
    const { session } = store.getState();
    const { currentUser } = session;

    if (nextState.location.query.auth_token) {
      localStorage.setItem('authToken', nextState.location.query.auth_token);
    }

    if (!currentUser && localStorage.getItem('authToken')) {
      dispatch(Actions.currentUser());
    } else if (!localStorage.getItem('authToken')) {
      replace('/sign_in');
    }

    callback();
  };

  const ensureUnauthenticated = (nextState, replace, callback) => {
    if (localStorage.getItem('authToken')) {
      replace('/');
    }

    callback();
  };

  return (
    <Route component={MainLayout}>
      <Route path="/sign_in" component={SessionNew} onEnter={ensureUnauthenticated} />

      <Route path="/" component={AuthenticatedContainer} onEnter={ensureAuthenticated}>
        <IndexRoute component={RepositoriesIndex} />
      </Route>
    </Route>
  );
}
