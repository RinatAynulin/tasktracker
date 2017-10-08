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