import update from 'react-addons-update';
// import {  } from './../actions/users';


const initialState = {
    usersList: [],
    users: {},
    isLoading: false,
};


export default function projects(store = initialState, action) {
    let newStore = store;
    if (action.payload && action.payload.entities && action.payload.entities.users) {
        newStore = update(store, {
            users: { $merge: action.payload.entities.users },
        });
    }

    switch (action.type) {
        default:
            return newStore;
    }
}
