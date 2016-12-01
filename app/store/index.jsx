import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware }             from 'react-router-redux';
import createLogger                     from 'redux-logger';
import thunkMW                          from 'redux-thunk';
import reducers                         from '../reducers';

const loggerMW = createLogger({
  level: 'info',
  collapsed: true,
});

export default function configureStore(browserHistory) {
  const reduxRouterMW = routerMiddleware(browserHistory);
  const createStoreWithMiddleware = applyMiddleware(reduxRouterMW, thunkMW, loggerMW)(createStore);

  return createStoreWithMiddleware(reducers);
}
