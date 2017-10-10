import SSR from '../reducers/SSR';
import tasks from '../reducers/tasks';
import { SET_SSR_FLAG } from './../actions/serverFlag';
import { SUCCESS_TASK_LOADING } from './../actions/tasks';

const initialState = {
    taskList: [],
    tasks: {},
    isLoading: false,
};

const initialStateTasks = {
    taskList: [
      31,
      97,
      98,
      25,
      30,
      26
    ],
    tasks: {
      '25': {
        id: 25,
        author: 5,
        assign_to: 1,
        project: 4,
        section: null,
        text: 'fsdfds',
        description: 'adsadasdasd blabla',
        status: 2,
        created_at: '2017-09-27T20:41:21.414012Z',
        last_modified: '2017-10-03T07:21:20.805418Z'
      },
      '26': {
        id: 26,
        author: 5,
        assign_to: 5,
        project: 4,
        section: null,
        text: 'dasdsadsa',
        description: 'dasdasdasd',
        status: 3,
        created_at: '2017-09-28T09:43:26.798092Z',
        last_modified: '2017-10-06T15:54:52.349181Z'
      },
      '30': {
        id: 30,
        author: 5,
        assign_to: 5,
        project: 4,
        section: null,
        text: 'dasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdas dasdasdasdasdasdasdasdasdasdas',
        description: 'dasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdas dasdasdasdasdasdasdasdasdasdas dasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdas dasdasdasdasdasdasdasdasdasdas',
        status: 2,
        created_at: '2017-09-28T13:02:54.087622Z',
        last_modified: '2017-10-03T17:07:59.926947Z'
      },
      '31': {
        id: 31,
        author: 5,
        assign_to: null,
        project: 4,
        section: null,
        text: 'dasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdas dasdasdasdasdasdasdasdasdasdas',
        description: 'dasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdas dasdasdasdasdasdasdasdasdasdas dasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdas dasdasdasdasdasdasdasdasdasdas',
        status: 1,
        created_at: '2017-09-28T13:03:03.209768Z',
        last_modified: '2017-10-03T17:08:12.289534Z'
      },
      '97': {
        id: 97,
        author: 5,
        assign_to: null,
        project: 4,
        section: null,
        text: 'blabla',
        description: 'blabla',
        status: 1,
        created_at: '2017-10-03T03:30:14.080853Z',
        last_modified: '2017-10-03T04:25:26.418010Z'
      },
      '98': {
        id: 98,
        author: 5,
        assign_to: 1,
        project: 4,
        section: null,
        text: 'dsa',
        description: 'czxcxzczx',
        status: 1,
        created_at: '2017-10-03T03:42:51.599080Z',
        last_modified: '2017-10-03T07:17:53.495561Z'
      }
    },
    isLoading: false,
    form: {
      isLoading: false
    }
  };

describe('action tests', () => {
    describe('test SSR', () => {
        test('test simple reducer', () => {
            expect(SSR(undefined, {type: 'initial'})).toEqual(initialState);
        });

        test('test set false', () => {
            const newState = {
                taskList: [],
                tasks: {},
                isLoading: false,
                serverRendering: false,
            }

            expect(SSR(initialState, {type: SET_SSR_FLAG})).toEqual(newState)
        })
    }),

    describe('test tasks', () => {
        test('test add duplicate', () => {
            const action = {
                  payload: {
                    count: 1,
                    next: null,
                    previous: null,
                    entities: {
                      users: {
                        '5': {
                          id: 5,
                          username: 'aynulin',
                          email: 'rinataynulin@gmail.com',
                          first_name: 'Rinat',
                          last_name: 'Aynulin',
                          avatar: null
                        }
                      },
                      projects: {
                        '4': {
                          id: 4,
                          author: 5,
                          name: 'First Project',
                          created_at: '2017-09-27T20:39:34.984085Z'
                        }
                      },
                      tasks: {
                        '26': {
                          id: 26,
                          author: 5,
                          assign_to: 5,
                          project: 4,
                          section: null,
                          text: 'dasdsadsa',
                          description: 'dasdasdasd',
                          status: 3,
                          created_at: '2017-09-28T09:43:26.798092Z',
                          last_modified: '2017-10-06T15:54:52.349181Z'
                        }
                      }
                    },
                    result: [
                      26
                    ],
                    addTasks: true
                  },
                  type: 'SUCCESS_TASK_LOADING'
                };
            expect(SSR(initialStateTasks, action)).toEqual(initialStateTasks);
        });
    })



});