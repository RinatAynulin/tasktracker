import { CALL_API, getJSON } from 'redux-api-middleware';
import { normalize } from 'normalizr';

import { project } from './../utils/schemas';
import apiUrls from './../constants/apiUrls';

export const START_PROJECT_LOADING = 'START_PROJECT_LOADING';
export const SUCCESS_PROJECT_LOADING = 'SUCCESS_PROJECT_LOADING';
export const ERROR_PROJECT_LOADING = 'ERROR_PROJECT_LOADING';

export const START_ADD_PROJECT = 'START_ADD_PROJECT';
export const SUCCESS_ADD_PROJECT = 'SUCCESS_ADD_PROJECT';
export const ERROR_ADD_PROJECT = 'ERROR_ADD_PROJECT';

export const SELECT_PROJECT = 'SELECT_PROJECT';

export const loadProjects = (page, addProjects) => {
    return {
        [CALL_API]: {
            credentials: 'include',
            endpoint: `${apiUrls.project}?page=${page}`,
            method: 'GET',
            types: [
                START_PROJECT_LOADING,
                {
                    type: SUCCESS_PROJECT_LOADING,
                    payload: (action, state, res) => {
                        return getJSON(res).then(
                            (json) => {
                                const normalizedData = normalize(json.results, [project]);
                                delete json.results;
                                return Object.assign({}, json, normalizedData, {addProjects});
                            },
                        );
                    },
                },
                ERROR_PROJECT_LOADING,
            ],
        },
    };
};


export const addProject = (body) => {
    return {
        [CALL_API]: {
            credentials: 'include',
            endpoint: apiUrls.project,
            method: 'POST',
            body,
            headers: { 
                'Content-type': 'application/json' 
            },
            types: [
                START_ADD_PROJECT,
                {
                    type: SUCCESS_ADD_PROJECT,
                    payload: (action, state, res) => {
                        return getJSON(res).then(
                            (json) => {
                                json = {projects: json};
                                const normalizedData = normalize(json, [project]);
                                delete json.results;
                                return Object.assign({}, json, normalizedData);
                            },
                        );
                    },
                },
                ERROR_ADD_PROJECT,
            ],
        },
    };
};

export const selectProject = (selectedProject) => {
    return {
        type: SELECT_PROJECT,
        selectedProject,
    }
}






