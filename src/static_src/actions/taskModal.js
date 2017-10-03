export const CLOSE_TASK_MODAL = 'CLOSE_TASK_MODAL';
export const OPEN_TASK_MODAL = 'OPEN_TASK_MODAL';

export const closeModal = () => {
    return {
        type: CLOSE_TASK_MODAL,
    }
}

export const openModal = (selectedTask) => {
    return {
        type: OPEN_TASK_MODAL,
        selectedTask,
    }
}

