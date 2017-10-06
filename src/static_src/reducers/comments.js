import update from 'react-addons-update';
import { START_COMMENT_LOADING, SUCCESS_COMMENT_LOADING, ERROR_COMMENT_LOADING, 
        START_ADD_COMMENT, SUCCESS_ADD_COMMENT, ERROR_ADD_COMMENT,} from './../actions/comments';

const initialState = {
    commentList: [],
    comments: {},
    isLoading: false,
};


export default function comments(store = initialState, action) {
    let newStore = store;
    if (action.payload && action.payload.entities && action.payload.entities.comments) {
        newStore = update(store, {
            comments: { $merge: action.payload.entities.comments },
        });
    }

    switch (action.type) {
        case START_COMMENT_LOADING: {
            return update(newStore, {
                isLoading: { $set: true },
            });
        }
        case SUCCESS_COMMENT_LOADING: {
            if (action.payload.addComments) {
                return update(newStore, {
                    isLoading: { $set: false },
                    commentList: { $push: action.payload.result },
                });
            } else {
                return update(newStore, {
                    isLoading: { $set: false },
                    commentList: { $set: action.payload.result },
                });
            }
        }
        case ERROR_COMMENT_LOADING: {
            return update(newStore, {
                isLoading: { $set: false },
            });
        }
        case SUCCESS_ADD_COMMENT: {
            console.log(action.payload);
            return update(newStore, {
                commentList: { $push: action.payload.result },
            });
        }
        default:
            return newStore;
    }
}
