import update from 'react-addons-update';
import { START_TASK_LOADING, SUCCESS_TASK_LOADING, ERROR_TASK_LOADING, 
        START_ADD_TASK, SUCCESS_ADD_TASK, ERROR_ADD_TASK,
        START_CHANGE_STATUS, SUCCESS_CHANGE_STATUS, ERROR_CHANGE_STATUS} from './../actions/tasks';

const initialState = {
    taskList: [],
    tasks: {},
    isLoading: false,
    form: {
        isLoading: false,
    }
};


export default function tasks(store = initialState, action) {
    let newStore = store;
    if (action.payload && action.payload.entities && action.payload.entities.tasks) {
        newStore = update(store, {
            tasks: { $merge: action.payload.entities.tasks },
        });
    }

    switch (action.type) {
        case START_TASK_LOADING: {
            return update(newStore, {
                isLoading: { $set: true },
            });
        }
        case SUCCESS_TASK_LOADING: {
            return update(newStore, {
                isLoading: { $set: false },
                taskList: { $set: action.payload.result },
            });
        }
        case ERROR_TASK_LOADING: {
            return update(newStore, {
                isLoading: { $set: false },
            });
        }
        case START_ADD_TASK: {
            return update(newStore, {
                form: {isLoading: { $set: true }},
            });
        }
        case SUCCESS_ADD_TASK: {
            return update(newStore, {
                form: {isLoading: { $set: false }},
                taskList: { $push: action.payload.result },
            });
        }
        case ERROR_ADD_TASK: {
            return update(newStore, {
                form: {isLoading: { $set: false }},
            });
        }
        default:
            return newStore;
    }
}
