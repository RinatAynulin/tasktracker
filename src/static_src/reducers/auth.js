import update from 'react-addons-update';
import { push } from 'react-router-redux';

import { START_LOGIN, SUCCESS_LOGIN, ERROR_LOGIN, START_CURRENT_USER_LOADING,
    SUCCESS_CURRENT_USER_LOADING, ERROR_CURRENT_USER_LOADING, LOGOUT } from './../actions/auth';

const getInitialState = () => {
    const token = localStorage.getItem('auth-token');
    let isAuthenticated = false;
    if (token) {
        isAuthenticated = true;
    } // fixme 
    const authentication = {isAuthenticated, token}

    return {
        user: {user: {}, isLoading: false,},
        isLoading: false,
        authentication
    };
}

export default function auth(store = getInitialState(), action) {
    let newStore = store;

    switch (action.type) {
        case START_LOGIN: {
            return update(newStore, {
                isLoading: { $set: true },
            });
        }
        case SUCCESS_LOGIN: {
            const token = action.payload;
            localStorage.setItem('auth-token', token);

            return update(newStore, {
                authentication: { $set: { isAuthenticated: true, token }},
                isLoading: { $set: false },
            });
        }
        case ERROR_LOGIN: {
            return update(newStore, {
                isLoading: { $set: false },
            });
        }

        case START_CURRENT_USER_LOADING: {
            return update(newStore, {
                user: {isLoading: { $set: true }},
            });
        }
        case SUCCESS_CURRENT_USER_LOADING: {
            return update(newStore, {
                user: {user: {$set: action.payload }, isLoading: { $set: false }},
            })
        }
        case ERROR_CURRENT_USER_LOADING: {
            return update(newStore, {
                user: {isLoading: { $set: false }},
            });
        }

        default:
            return newStore;
    }
}
