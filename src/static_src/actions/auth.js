import { CALL_API, getJSON } from 'redux-api-middleware';
import { normalize } from 'normalizr';

import { task } from './../utils/schemas';
import apiUrls from './../constants/apiUrls';

export const START_LOGIN = 'START_LOGIN';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const ERROR_LOGIN = 'ERROR_LOGIN';

export const START_CURRENT_USER_LOADING = 'START_CURRENT_USER_LOADING';
export const SUCCESS_CURRENT_USER_LOADING = 'SUCCESS_CURRENT_USER_LOADING';
export const ERROR_CURRENT_USER_LOADING = 'ERROR_CURRENT_USER_LOADING';

export const START_LOGOUT = 'START_LOGOUT';
export const SUCCESS_LOGOUT = 'SUCCESS_LOGOUT';
export const ERROR_LOGOUT = 'ERROR_LOGOUT';


export const login = (bodyData) => {
    return {
        [CALL_API]: {
            endpoint: apiUrls.login,
            credentials: 'include',
            method: 'POST',
            body: bodyData,
            headers: { 'Content-Type': 'application/json' },
            types: [
                START_LOGIN,
                {
                    type: SUCCESS_LOGIN,
                    payload: (action, state, res) => {
                        return getJSON(res).then(
                            (json) => {
                                return json.token;
                            },
                        );
                    },
                },
                {
                    type: ERROR_LOGIN,
                    payload: (action, state, res) => {
                        return getJSON(res);
                    },
                }
            ],
        },
    };
};

export const currentUser = () => {
    return {
        [CALL_API]: {
            endpoint: apiUrls.currentUser,
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json',
            },
            types: [
                START_CURRENT_USER_LOADING,
                {
                    type: SUCCESS_CURRENT_USER_LOADING,
                    payload: (action, state, res) => {
                        return getJSON(res);
                    },
                },
                ERROR_CURRENT_USER_LOADING,
            ],
        },
    }
}

export const logout = () => {
    return {
        [CALL_API]: {
            endpoint: apiUrls.logout,
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json',
            },
            types: [
                START_LOGOUT,
                {
                    type: SUCCESS_LOGOUT,
                    payload: (action, state, res) => {
                        return getJSON(res);
                    },
                },
                ERROR_LOGOUT,
            ],
        },
    }
}




