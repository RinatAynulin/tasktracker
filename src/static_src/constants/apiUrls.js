export const PAGE_SIZE = {
    task: 10,
    comment: 10,
    project: 10,
};

export default {
    task: SERVER_URL + 'api/tasks/',
    project: SERVER_URL + 'api/projects/',
    comment: SERVER_URL + 'api/comment/',
    currentUser: SERVER_URL + 'api/users/current/',
    login: SERVER_URL + 'api/token-auth/',
    logout: SERVER_URL + 'api/logout/',
}



// export default {
//     task: () => {
//             if (typeof SERVER_URL != 'undefined' && SERVER_URL){
//                 return SERVER_URL + 'api/tasks/'
//             } else {
//                 return '/api/tasks/';
//             }
//         },

//     project: () => {
//             if (typeof SERVER_URL != 'undefined' && SERVER_URL){
//                 return SERVER_URL + 'api/projects/'
//             } else {
//                 return '/api/projects/';
//             }
//         },

//     currentUser: () => {
//             if (typeof SERVER_URL != 'undefined' && SERVER_URL){
//                 return SERVER_URL + 'api/users/current/'
//             } else {
//                 return '/api/users/current/';
//             }
//         },
//     comment: () => {
//             if (typeof SERVER_URL != 'undefined' && SERVER_URL){
//                 return SERVER_URL + 'api/comment/'
//             } else {
//                 return '/api/comment/';
//             }
//         },
//     login: () => {
//             if (typeof SERVER_URL != 'undefined' && SERVER_URL){
//                 return SERVER_URL + 'api/token-auth/'
//             } else {
//                 return '/api/token-auth/';
//             }
//         },   
//     logout: () => {
//             if (typeof SERVER_URL != 'undefined' && SERVER_URL){
//                 return SERVER_URL + 'api/tasks/'
//             } else {
//                 return '/api/logout/';
//             }
//         }
// }