import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import tasks from './tasks';
import projects from './projects';
import auth from './auth';
import users from './users';
import comments from './comments';
import taskModal from './taskModal';
import SSR from './SSR';

const appReducer = combineReducers({
    routerReducer,
    tasks,
    projects,
    users,
    comments,
    taskModal,
    auth, 
    SSR
});

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        state = undefined;
        // localStorage.removeItem('auth-token');
    }
    return appReducer(state, action)
};

export default rootReducer;


