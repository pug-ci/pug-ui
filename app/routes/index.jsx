import { Route }  from 'react-router';
import React      from 'react';
import MainLayout from '../layouts/main';
import SessionNew from '../views/sessions/new';

export default function configRoutes() {
  return (
    <Route component={MainLayout}>
      <Route path="/sign_in" component={SessionNew} />
      hey
    </Route>
  );
}
