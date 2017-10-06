import update from 'react-addons-update';
import { START_PROJECT_LOADING, SUCCESS_PROJECT_LOADING, ERROR_PROJECT_LOADING,
        START_ADD_PROJECT, SUCCESS_ADD_PROJECT, ERROR_ADD_PROJECT, SELECT_PROJECT } from './../actions/projects';


const initialState = {
    projectList: [],
    projects: {},
    isLoading: false,
    selectedProject: 0,
    size: 0,
    previous: '',
    next: '',
};


export default function projects(store = initialState, action) {
    let newStore = store;
    if (action.payload && action.payload.entities && action.payload.entities.projects) {
        newStore = update(store, {
            projects: { $merge: action.payload.entities.projects },
        });
    }

    switch (action.type) {
        case START_PROJECT_LOADING: {
            return update(newStore, {
                isLoading: { $set: true },
            });
        }
        case SUCCESS_PROJECT_LOADING: {
             if (action.payload.addProjects) {
                return update(newStore, {
                    isLoading: { $set: false },
                    projectList: { $push: action.payload.result },
                });
            } else {
                return update(newStore, {
                    isLoading: { $set: false },
                    projectList: { $set: action.payload.result },
                });
            }   
        }

        case ERROR_PROJECT_LOADING: {
            return update(newStore, {
                isLoading: { $set: false },
            });
        }
        case START_ADD_PROJECT: {
            return update(newStore, {
                isLoading: { $set: true },
            });
        }
        case SUCCESS_ADD_PROJECT: {
            return update(newStore, {
                isLoading: { $set: false },
                projectList: { $push: action.payload.result },
            });
        }
        case ERROR_ADD_PROJECT: {
            return update(newStore, {
                isLoading: { $set: false },
            });
        }
        case SELECT_PROJECT: {
            return update(newStore, {
                selectedProject: { $set: action.selectedProject },
            });
        }
        default:
            return newStore;
    }
}
