import { Route }  from 'react-router';
import React      from 'react';
import MainLayout from '../layouts/main';

export default function configRoutes() {
  return (
    <Route component={MainLayout}>
      hey
    </Route>
  );
}
