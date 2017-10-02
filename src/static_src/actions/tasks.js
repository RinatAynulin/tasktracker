import { CALL_API, getJSON } from 'redux-api-middleware';
import { normalize } from 'normalizr';

import { task } from './../utils/schemas';
import { getToken } from './../utils/utils';

export const START_TASK_LOADING = 'START_TASK_LOADING';
export const SUCCESS_TASK_LOADING = 'SUCCESS_TASK_LOADING';
export const ERROR_TASK_LOADING = 'ERROR_TASK_LOADING';

export const START_ADD_TASK = 'START_ADD_TASK';
export const SUCCESS_ADD_TASK = 'SUCCESS_ADD_TASK';
export const ERROR_ADD_TASK = 'ERROR_ADD_TASK';

import apiUrls from './../constants/apiUrls';

export const loadTasks = (url) => {
    return {
        [CALL_API]: {
            credentials: 'include',
            endpoint: url,
            method: 'GET',
            headers: {Authorization: getToken()},
            types: [
                START_TASK_LOADING,
                {
                    type: SUCCESS_TASK_LOADING,
                    payload: (action, state, res) => {
                        return getJSON(res).then(
                            (json) => {
                                const normalizedData = normalize(json.results, [task]);
                                delete json.results;
                                return Object.assign({}, json, normalizedData);
                            },
                        );
                    },
                },
                ERROR_TASK_LOADING,
            ],
        },
    };
};

export const addTask = (body) => {
    return {
        [CALL_API]: {
            credentials: 'include',
            endpoint: apiUrls.task,
            method: 'POST',
            body,
            headers: { 
                'Authorization': getToken(),
                'Content-type': 'application/json' 
            },
            types: [
                START_ADD_TASK,
                {
                    type: SUCCESS_ADD_TASK,
                    payload: (action, state, res) => {
                        return getJSON(res).then(
                            (json) => {
                                json = {tasks: json};
                                const normalizedData = normalize(json, [task]);
                                console.log(normalizedData);
                                delete json.results;
                                return Object.assign({}, json, normalizedData);
                            },
                        );
                    },
                },
                ERROR_ADD_TASK,
            ],
        },
    };
};






