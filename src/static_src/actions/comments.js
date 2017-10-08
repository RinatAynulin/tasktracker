import { CALL_API, getJSON } from 'redux-api-middleware';
import { normalize } from 'normalizr';

import { comment } from './../utils/schemas';
import apiUrls from './../constants/apiUrls';

export const START_COMMENT_LOADING = 'START_COMMENT_LOADING';
export const SUCCESS_COMMENT_LOADING = 'SUCCESS_COMMENT_LOADING';
export const ERROR_COMMENT_LOADING = 'ERROR_COMMENT_LOADING';

export const START_ADD_COMMENT = 'START_ADD_COMMENT';
export const SUCCESS_ADD_COMMENT = 'SUCCESS_ADD_COMMENT';
export const ERROR_ADD_COMMENT = 'ERROR_ADD_COMMENT';


export const loadComments = (taskId, page, addComments) => {
    return {
        [CALL_API]: {
            credentials: 'include',
            endpoint: `${apiUrls.comment}?task=${taskId}&page=${page}`,
            method: 'GET',
            types: [
                START_COMMENT_LOADING,
                {
                    type: SUCCESS_COMMENT_LOADING,
                    payload: (action, state, res) => {
                        return getJSON(res).then(
                            (json) => {
                                console.log(json);
                                const normalizedData = normalize(json.results, [comment]); // fixme, problem with taskId
                                return Object.assign({}, json, normalizedData, {comment});
                            },
                        );
                    },
                },
                ERROR_COMMENT_LOADING,
            ],
        },
    };
};


export const addComment = (body) => {
    return {
        [CALL_API]: {
            credentials: 'include',
            endpoint: apiUrls.comment,
            method: 'POST',
            body,
            headers: { 
                'Content-type': 'application/json' 
            },
            types: [
                START_ADD_COMMENT,
                {
                    type: SUCCESS_ADD_COMMENT,
                    payload: (action, state, res) => {
                        return getJSON(res).then(
                            (json) => {
                                json = {comment: json};
                                console.log(json);
                                const normalizedData = normalize(json, [comment]);
                                return Object.assign({}, json, normalizedData);
                            },
                        );
                    },
                },
                ERROR_ADD_COMMENT,
            ],
        },
    };
};




