import update from 'react-addons-update';
import { CLOSE_TASK_MODAL, OPEN_TASK_MODAL } from './../actions/taskModal';


const initialState = {
    showModal: false,
    selectedTask: 0,
};


export default function taskModal(store = initialState, action) {
    let newStore = store;

    switch (action.type) {
        case CLOSE_TASK_MODAL: {
            return update(newStore, {
                showModal: { $set: false },
            });
        }
        case OPEN_TASK_MODAL: {
            return update(newStore, {
                showModal: { $set: true },
                selectedTask: { $set: action.selectedTask },
            });
        }
        
        default:
            return newStore;
    }
}
