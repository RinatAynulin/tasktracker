import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import tasks from './tasks';
import projects from './projects';
import auth from './auth';
import users from './users';
import taskModal from './taskModal';

const appReducer = combineReducers({
	routerReducer,
	tasks,
	projects,
	users,
	taskModal,
	auth
});

const rootReducer = (state, action) => {
	if (action.type === 'LOGOUT') {
		state = undefined;
		localStorage.removeItem('auth-token');
	}
	return appReducer(state, action)
};

export default rootReducer;


