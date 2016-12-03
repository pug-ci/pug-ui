import { combineReducers }  from 'redux';
import { routerReducer }    from 'react-router-redux';
import session              from './session';
import repositories         from './repositories';

export default combineReducers({
  routing: routerReducer,
  session,
  repositories,
});
