import { CALL_API, getJSON } from 'redux-api-middleware';
import { normalize } from 'normalizr';

import { task } from './../utils/schemas';
import apiUrls from './../constants/apiUrls';
import {getToken} from './../utils/utils';

export const START_LOGIN = 'START_LOGIN';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const ERROR_LOGIN = 'ERROR_LOGIN';

export const START_CURRENT_USER_LOADING = 'START_CURRENT_USER_LOADING';
export const SUCCESS_CURRENT_USER_LOADING = 'SUCCESS_CURRENT_USER_LOADING';
export const ERROR_CURRENT_USER_LOADING = 'ERROR_CURRENT_USER_LOADING';

export const LOGOUT = 'LOGOUT';

export const login = (bodyData) => {
    return {
        [CALL_API]: {
            endpoint: apiUrls.login,
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
            headers: {
                'Content-type': 'application/json',
                'Authorization': getToken(),
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
        type: LOGOUT,
    }
}




