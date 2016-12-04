import { combineReducers }  from 'redux';
import { routerReducer }    from 'react-router-redux';
import session              from './session';
import repositories         from './repositories';
import currentRepository    from './current_repository';
import currentBuild         from './current_build';

export default combineReducers({
  routing: routerReducer,
  session,
  repositories,
  currentRepository,
  currentBuild,
});
