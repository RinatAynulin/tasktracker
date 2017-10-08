/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/server/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var PAGE_SIZE = exports.PAGE_SIZE = {
	task: 10,
	comment: 10,
	project: 10
};

exports.default = {
	task: "http://138.197.187.175/" + 'api/tasks/',
	project: "http://138.197.187.175/" + 'api/projects/',
	comment: "http://138.197.187.175/" + 'api/comment/',
	currentUser: "http://138.197.187.175/" + 'api/users/current/',
	login: "http://138.197.187.175/" + 'api/token-auth/',
	logout: "http://138.197.187.175/" + 'api/logout/'
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 6 */
/***/ (function(module, exports) {



/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux-api-middleware");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-addons-update");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("normalizr");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.changeStatus = exports.addTask = exports.loadTasks = exports.ERROR_CHANGE_STATUS = exports.SUCCESS_CHANGE_STATUS = exports.START_CHANGE_STATUS = exports.ERROR_ADD_TASK = exports.SUCCESS_ADD_TASK = exports.START_ADD_TASK = exports.ERROR_TASK_LOADING = exports.SUCCESS_TASK_LOADING = exports.START_TASK_LOADING = undefined;

var _reduxApiMiddleware = __webpack_require__(7);

var _normalizr = __webpack_require__(9);

var _schemas = __webpack_require__(14);

var _apiUrls = __webpack_require__(4);

var _apiUrls2 = _interopRequireDefault(_apiUrls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var START_TASK_LOADING = exports.START_TASK_LOADING = 'START_TASK_LOADING';
var SUCCESS_TASK_LOADING = exports.SUCCESS_TASK_LOADING = 'SUCCESS_TASK_LOADING';
var ERROR_TASK_LOADING = exports.ERROR_TASK_LOADING = 'ERROR_TASK_LOADING';

var START_ADD_TASK = exports.START_ADD_TASK = 'START_ADD_TASK';
var SUCCESS_ADD_TASK = exports.SUCCESS_ADD_TASK = 'SUCCESS_ADD_TASK';
var ERROR_ADD_TASK = exports.ERROR_ADD_TASK = 'ERROR_ADD_TASK';

var START_CHANGE_STATUS = exports.START_CHANGE_STATUS = 'START_CHANGE_STATUS';
var SUCCESS_CHANGE_STATUS = exports.SUCCESS_CHANGE_STATUS = 'SUCCESS_CHANGE_STATUS';
var ERROR_CHANGE_STATUS = exports.ERROR_CHANGE_STATUS = 'ERROR_CHANGE_STATUS';

var loadTasks = exports.loadTasks = function loadTasks(url, addTasks) {
    return _defineProperty({}, _reduxApiMiddleware.CALL_API, {
        credentials: 'include',
        endpoint: url,
        method: 'GET',
        types: [START_TASK_LOADING, {
            type: SUCCESS_TASK_LOADING,
            payload: function payload(action, state, res) {
                return (0, _reduxApiMiddleware.getJSON)(res).then(function (json) {
                    var normalizedData = (0, _normalizr.normalize)(json.results, [_schemas.task]);
                    delete json.results;
                    return Object.assign({}, json, normalizedData, { addTasks: addTasks });
                });
            }
        }, ERROR_TASK_LOADING]
    });
};

var addTask = exports.addTask = function addTask(body) {
    return _defineProperty({}, _reduxApiMiddleware.CALL_API, {
        credentials: 'include',
        endpoint: _apiUrls2.default.task,
        method: 'POST',
        body: body,
        headers: {
            'Content-type': 'application/json'
        },
        types: [START_ADD_TASK, {
            type: SUCCESS_ADD_TASK,
            payload: function payload(action, state, res) {
                return (0, _reduxApiMiddleware.getJSON)(res).then(function (json) {
                    json = { tasks: json };
                    var normalizedData = (0, _normalizr.normalize)(json, [_schemas.task]);
                    delete json.results;
                    return Object.assign({}, json, normalizedData);
                });
            }
        }, ERROR_ADD_TASK]
    });
};

var changeStatus = exports.changeStatus = function changeStatus(taskId, body) {
    return _defineProperty({}, _reduxApiMiddleware.CALL_API, {
        credentials: 'include',
        endpoint: _apiUrls2.default.task + (taskId + '/'),
        method: 'PUT',
        body: body,
        headers: {
            'Content-type': 'application/json'
        },
        types: [START_CHANGE_STATUS, {
            type: SUCCESS_CHANGE_STATUS,
            payload: function payload(action, state, res) {
                return (0, _reduxApiMiddleware.getJSON)(res).then(function (json) {
                    json = { tasks: json };
                    var normalizedData = (0, _normalizr.normalize)(json, [_schemas.task]);
                    delete json.results;
                    return Object.assign({}, json, normalizedData);
                });
            }
        }, ERROR_CHANGE_STATUS]
    });
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.selectProject = exports.addProject = exports.loadProjects = exports.SELECT_PROJECT = exports.ERROR_ADD_PROJECT = exports.SUCCESS_ADD_PROJECT = exports.START_ADD_PROJECT = exports.ERROR_PROJECT_LOADING = exports.SUCCESS_PROJECT_LOADING = exports.START_PROJECT_LOADING = undefined;

var _reduxApiMiddleware = __webpack_require__(7);

var _normalizr = __webpack_require__(9);

var _schemas = __webpack_require__(14);

var _apiUrls = __webpack_require__(4);

var _apiUrls2 = _interopRequireDefault(_apiUrls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var START_PROJECT_LOADING = exports.START_PROJECT_LOADING = 'START_PROJECT_LOADING';
var SUCCESS_PROJECT_LOADING = exports.SUCCESS_PROJECT_LOADING = 'SUCCESS_PROJECT_LOADING';
var ERROR_PROJECT_LOADING = exports.ERROR_PROJECT_LOADING = 'ERROR_PROJECT_LOADING';

var START_ADD_PROJECT = exports.START_ADD_PROJECT = 'START_ADD_PROJECT';
var SUCCESS_ADD_PROJECT = exports.SUCCESS_ADD_PROJECT = 'SUCCESS_ADD_PROJECT';
var ERROR_ADD_PROJECT = exports.ERROR_ADD_PROJECT = 'ERROR_ADD_PROJECT';

var SELECT_PROJECT = exports.SELECT_PROJECT = 'SELECT_PROJECT';

var loadProjects = exports.loadProjects = function loadProjects(page, addProjects) {
    return _defineProperty({}, _reduxApiMiddleware.CALL_API, {
        credentials: 'include',
        endpoint: _apiUrls2.default.project + '?page=' + page,
        method: 'GET',
        types: [START_PROJECT_LOADING, {
            type: SUCCESS_PROJECT_LOADING,
            payload: function payload(action, state, res) {
                return (0, _reduxApiMiddleware.getJSON)(res).then(function (json) {
                    var normalizedData = (0, _normalizr.normalize)(json.results, [_schemas.project]);
                    delete json.results;
                    return Object.assign({}, json, normalizedData, { addProjects: addProjects });
                });
            }
        }, ERROR_PROJECT_LOADING]
    });
};

var addProject = exports.addProject = function addProject(body) {
    return _defineProperty({}, _reduxApiMiddleware.CALL_API, {
        credentials: 'include',
        endpoint: _apiUrls2.default.project,
        method: 'POST',
        body: body,
        headers: {
            'Content-type': 'application/json'
        },
        types: [START_ADD_PROJECT, {
            type: SUCCESS_ADD_PROJECT,
            payload: function payload(action, state, res) {
                return (0, _reduxApiMiddleware.getJSON)(res).then(function (json) {
                    json = { projects: json };
                    var normalizedData = (0, _normalizr.normalize)(json, [_schemas.project]);
                    delete json.results;
                    return Object.assign({}, json, normalizedData);
                });
            }
        }, ERROR_ADD_PROJECT]
    });
};

var selectProject = exports.selectProject = function selectProject(selectedProject) {
    return {
        type: SELECT_PROJECT,
        selectedProject: selectedProject
    };
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comment = exports.task = exports.project = exports.user = undefined;

var _normalizr = __webpack_require__(9);

var user = exports.user = new _normalizr.schema.Entity('users');

var project = exports.project = new _normalizr.schema.Entity('projects', {
  author: user
});

var task = exports.task = new _normalizr.schema.Entity('tasks', {
  assign_to: user,
  author: user,
  project: project
});

var comment = exports.comment = new _normalizr.schema.Entity('comments', {
  author: user,
  task: task
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.logout = exports.currentUser = exports.login = exports.ERROR_LOGOUT = exports.SUCCESS_LOGOUT = exports.START_LOGOUT = exports.ERROR_CURRENT_USER_LOADING = exports.SUCCESS_CURRENT_USER_LOADING = exports.START_CURRENT_USER_LOADING = exports.ERROR_LOGIN = exports.SUCCESS_LOGIN = exports.START_LOGIN = undefined;

var _reduxApiMiddleware = __webpack_require__(7);

var _normalizr = __webpack_require__(9);

var _schemas = __webpack_require__(14);

var _apiUrls = __webpack_require__(4);

var _apiUrls2 = _interopRequireDefault(_apiUrls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var START_LOGIN = exports.START_LOGIN = 'START_LOGIN';
var SUCCESS_LOGIN = exports.SUCCESS_LOGIN = 'SUCCESS_LOGIN';
var ERROR_LOGIN = exports.ERROR_LOGIN = 'ERROR_LOGIN';

var START_CURRENT_USER_LOADING = exports.START_CURRENT_USER_LOADING = 'START_CURRENT_USER_LOADING';
var SUCCESS_CURRENT_USER_LOADING = exports.SUCCESS_CURRENT_USER_LOADING = 'SUCCESS_CURRENT_USER_LOADING';
var ERROR_CURRENT_USER_LOADING = exports.ERROR_CURRENT_USER_LOADING = 'ERROR_CURRENT_USER_LOADING';

var START_LOGOUT = exports.START_LOGOUT = 'START_LOGOUT';
var SUCCESS_LOGOUT = exports.SUCCESS_LOGOUT = 'SUCCESS_LOGOUT';
var ERROR_LOGOUT = exports.ERROR_LOGOUT = 'ERROR_LOGOUT';

var login = exports.login = function login(bodyData) {
    return _defineProperty({}, _reduxApiMiddleware.CALL_API, {
        endpoint: _apiUrls2.default.login,
        credentials: 'include',
        method: 'POST',
        body: bodyData,
        headers: { 'Content-Type': 'application/json' },
        types: [START_LOGIN, {
            type: SUCCESS_LOGIN,
            payload: function payload(action, state, res) {
                return (0, _reduxApiMiddleware.getJSON)(res).then(function (json) {
                    return json.token;
                });
            }
        }, {
            type: ERROR_LOGIN,
            payload: function payload(action, state, res) {
                return (0, _reduxApiMiddleware.getJSON)(res);
            }
        }]
    });
};

var currentUser = exports.currentUser = function currentUser() {
    return _defineProperty({}, _reduxApiMiddleware.CALL_API, {
        endpoint: _apiUrls2.default.currentUser,
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-type': 'application/json'
        },
        types: [START_CURRENT_USER_LOADING, {
            type: SUCCESS_CURRENT_USER_LOADING,
            payload: function payload(action, state, res) {
                return (0, _reduxApiMiddleware.getJSON)(res);
            }
        }, ERROR_CURRENT_USER_LOADING]
    });
};

var logout = exports.logout = function logout() {
    return _defineProperty({}, _reduxApiMiddleware.CALL_API, {
        endpoint: _apiUrls2.default.logout,
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-type': 'application/json'
        },
        types: [START_LOGOUT, {
            type: SUCCESS_LOGOUT,
            payload: function payload(action, state, res) {
                return (0, _reduxApiMiddleware.getJSON)(res);
            }
        }, ERROR_LOGOUT]
    });
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var CLOSE_TASK_MODAL = exports.CLOSE_TASK_MODAL = 'CLOSE_TASK_MODAL';
var OPEN_TASK_MODAL = exports.OPEN_TASK_MODAL = 'OPEN_TASK_MODAL';

var closeModal = exports.closeModal = function closeModal() {
    return {
        type: CLOSE_TASK_MODAL
    };
};

var openModal = exports.openModal = function openModal(selectedTask) {
    return {
        type: OPEN_TASK_MODAL,
        selectedTask: selectedTask
    };
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addComment = exports.loadComments = exports.ERROR_ADD_COMMENT = exports.SUCCESS_ADD_COMMENT = exports.START_ADD_COMMENT = exports.ERROR_COMMENT_LOADING = exports.SUCCESS_COMMENT_LOADING = exports.START_COMMENT_LOADING = undefined;

var _reduxApiMiddleware = __webpack_require__(7);

var _normalizr = __webpack_require__(9);

var _schemas = __webpack_require__(14);

var _apiUrls = __webpack_require__(4);

var _apiUrls2 = _interopRequireDefault(_apiUrls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var START_COMMENT_LOADING = exports.START_COMMENT_LOADING = 'START_COMMENT_LOADING';
var SUCCESS_COMMENT_LOADING = exports.SUCCESS_COMMENT_LOADING = 'SUCCESS_COMMENT_LOADING';
var ERROR_COMMENT_LOADING = exports.ERROR_COMMENT_LOADING = 'ERROR_COMMENT_LOADING';

var START_ADD_COMMENT = exports.START_ADD_COMMENT = 'START_ADD_COMMENT';
var SUCCESS_ADD_COMMENT = exports.SUCCESS_ADD_COMMENT = 'SUCCESS_ADD_COMMENT';
var ERROR_ADD_COMMENT = exports.ERROR_ADD_COMMENT = 'ERROR_ADD_COMMENT';

var loadComments = exports.loadComments = function loadComments(taskId, page, addComments) {
    return _defineProperty({}, _reduxApiMiddleware.CALL_API, {
        credentials: 'include',
        endpoint: _apiUrls2.default.comment + '?task=' + taskId + '&page=' + page,
        method: 'GET',
        types: [START_COMMENT_LOADING, {
            type: SUCCESS_COMMENT_LOADING,
            payload: function payload(action, state, res) {
                return (0, _reduxApiMiddleware.getJSON)(res).then(function (json) {
                    console.log(json);
                    var normalizedData = (0, _normalizr.normalize)(json.results, [_schemas.comment]); // fixme, problem with taskId
                    return Object.assign({}, json, normalizedData, { comment: _schemas.comment });
                });
            }
        }, ERROR_COMMENT_LOADING]
    });
};

var addComment = exports.addComment = function addComment(body) {
    return _defineProperty({}, _reduxApiMiddleware.CALL_API, {
        credentials: 'include',
        endpoint: _apiUrls2.default.comment,
        method: 'POST',
        body: body,
        headers: {
            'Content-type': 'application/json'
        },
        types: [START_ADD_COMMENT, {
            type: SUCCESS_ADD_COMMENT,
            payload: function payload(action, state, res) {
                return (0, _reduxApiMiddleware.getJSON)(res).then(function (json) {
                    json = { comment: json };
                    console.log(json);
                    var normalizedData = (0, _normalizr.normalize)(json, [_schemas.comment]);
                    return Object.assign({}, json, normalizedData);
                });
            }
        }, ERROR_ADD_COMMENT]
    });
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(10);

var _redux = __webpack_require__(3);

var _projects = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import User from './User';


var Project = function (_React$Component) {
    _inherits(Project, _React$Component);

    function Project() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Project);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Project.__proto__ || Object.getPrototypeOf(Project)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
            _this.props.selectProject(_this.props.id);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Project, [{
        key: 'render',
        value: function render() {
            var link = '/taskList/' + this.props.id;
            return _react2.default.createElement(
                'div',
                { className: 'project' },
                _react2.default.createElement(
                    'div',
                    { className: 'project__content' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: link, onClick: this.onClick },
                        this.props.name
                    )
                )
            );
        }
    }]);

    return Project;
}(_react2.default.Component);

Project.propTypes = {
    id: _propTypes2.default.number.isRequired,
    author: _propTypes2.default.number,
    name: _propTypes2.default.string,
    created_at: _propTypes2.default.string,
    selectProject: _propTypes2.default.func
};
Project.defaultProps = {
    author: null,
    name: '',
    created_at: ''
};


var mapStateToProps = function mapStateToProps(_ref2, ownProps) {
    var projects = _ref2.projects;

    return _extends({}, projects.projects[ownProps.id]);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ selectProject: _projects.selectProject }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Project);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(1);

var _redux = __webpack_require__(3);

var _ChangeStatus = __webpack_require__(32);

var _ChangeStatus2 = _interopRequireDefault(_ChangeStatus);

var _User = __webpack_require__(22);

var _User2 = _interopRequireDefault(_User);

__webpack_require__(6);

var _taskModal = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Task = function (_React$Component) {
	_inherits(Task, _React$Component);

	function Task() {
		_classCallCheck(this, Task);

		return _possibleConstructorReturn(this, (Task.__proto__ || Object.getPrototypeOf(Task)).apply(this, arguments));
	}

	_createClass(Task, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'task' },
				_react2.default.createElement(
					'div',
					{ className: 'task__header' },
					_react2.default.createElement(
						'div',
						{ className: 'task__header-text', onClick: function onClick() {
								return _this2.props.openModal(_this2.props.task.id);
							} },
						this.props.task.text
					),
					_react2.default.createElement(
						'div',
						{ className: 'task__header-user' },
						' ',
						_react2.default.createElement(_User2.default, { id: this.props.task.author }),
						' '
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'task__content' },
					_react2.default.createElement(
						'div',
						{ className: 'task__content-description' },
						this.props.task.description
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'task__change-status' },
					_react2.default.createElement(_ChangeStatus2.default, { taskId: this.props.task.id })
				)
			);
		}
	}]);

	return Task;
}(_react2.default.Component);

Task.propTypes = {
	task: _propTypes2.default.shape({
		id: _propTypes2.default.number,
		description: _propTypes2.default.string,
		text: _propTypes2.default.string,
		section: _propTypes2.default.number,
		status: _propTypes2.default.number,
		author: _propTypes2.default.number
	})
};


var mapStateToProps = function mapStateToProps(_ref) {
	_objectDestructuringEmpty(_ref);

	return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)({ openModal: _taskModal.openModal }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Task);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	'New': 1,
	'In progress': 2,
	'Done': 3
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(10);

var _redux = __webpack_require__(3);

__webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_React$Component) {
    _inherits(User, _React$Component);

    function User() {
        _classCallCheck(this, User);

        return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
    }

    _createClass(User, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'user' },
                _react2.default.createElement(
                    'div',
                    { className: 'user__name' },
                    ' ',
                    this.props.first_name + this.props.last_name,
                    ' '
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'user__avatar' },
                    ' ',
                    _react2.default.createElement('img', { src: this.props.avatar, alt: 'No avatar' }),
                    ' '
                )
            );
        }
    }]);

    return User;
}(_react2.default.Component);

User.propTypes = {
    id: _propTypes2.default.number,
    username: _propTypes2.default.string,
    email: _propTypes2.default.string,
    first_name: _propTypes2.default.string,
    last_name: _propTypes2.default.string,
    avatar: _propTypes2.default.string
};
User.defaultProps = {
    id: 0,
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    avatar: ''
};


var mapStateToProps = function mapStateToProps(_ref, ownProps) {
    var users = _ref.users;

    return _extends({}, users.users[ownProps.id]);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        // bindActionCreators({selectProject}, dispatch)
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(User);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serverFlag = exports.SET_SSR_FLAG = undefined;

var _reduxApiMiddleware = __webpack_require__(7);

var _normalizr = __webpack_require__(9);

var SET_SSR_FLAG = exports.SET_SSR_FLAG = 'SET_SSR_FLAG';

var serverFlag = exports.serverFlag = function serverFlag() {
    return {
        type: SET_SSR_FLAG
    };
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(25);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(26);

var _App = __webpack_require__(27);

var _App2 = _interopRequireDefault(_App);

var _templates = __webpack_require__(46);

var _templates2 = _interopRequireDefault(_templates);

var _reactRouter = __webpack_require__(19);

var _reactRedux = __webpack_require__(1);

var _store = __webpack_require__(47);

var _store2 = _interopRequireDefault(_store);

var _headerMiddleware = __webpack_require__(57);

__webpack_require__(58);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expressproxy = __webpack_require__(59);
var cookieParser = __webpack_require__(60);

var app = (0, _express2.default)();

var apiURL = 'http://138.197.187.175/';

app.use(cookieParser());

app.post('/api/token-auth/', expressproxy(apiURL, {
    userResDecorator: function userResDecorator(proxyRes, proxyResData, userReq, userRes) {
        console.log('token-auth');
        if (proxyRes.statusCode >= 200 && proxyRes.statusCode < 300) {
            var data = JSON.parse(proxyResData.toString('utf8'));
            console.log(data.token);
            userRes.cookie('token', data.token, { httpOnly: true });
            return JSON.stringify({ status: 'ok' });
        }
        return proxyResData;
    }
}));

app.get('/api/logout', function (req, res, next) {
    var key = req.cookies.token;
    if (key) {
        res.clearCookie("token");
    }
    res.redirect('/login');
});

app.all('/api/*', function (req, res, next) {
    var key = req.cookies.token;
    if (key) {
        req.headers['Authorization'] = 'token ' + key;
    }
    next();
});

app.all('/api/*', expressproxy(apiURL));

app.get('*', function (req, res) {
    var store = (0, _store2.default)([(0, _headerMiddleware.headerMiddleware)(req.cookies.token)]);
    var context = {};
    var resultServer = function resultServer(value) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var item = _step.value;

                if (!item.payload || item.error) {
                    res.redirect('/login/');
                    return;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        var resultText = (0, _server.renderToString)((0, _react.createElement)(_reactRedux.Provider, { store: store }, (0, _react.createElement)(_reactRouter.StaticRouter, { location: req.url, context: context }, _react2.default.createElement(_App2.default, null))));
        var storeString = JSON.stringify(store.getState());

        res.send((0, _templates2.default)({
            body: resultText,
            title: 'FROM THE SERVER',
            store: storeString
        }));
    };
    var promises = [];
    var addToPromises = function addToPromises(promise) {
        promises.push(promise);
    };
    (0, _server.renderToString)((0, _react.createElement)(_reactRedux.Provider, { store: store }, (0, _react.createElement)(_reactRouter.StaticRouter, { location: req.url, context: context }, _react2.default.createElement(_App2.default, { server: true, addToPromises: addToPromises }))));
    return Promise.all(promises).then(function (value) {
        return resultServer(value);
    });
});

var port = 3000;
app.listen(port);
console.log('Listening on port ' + port);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(28);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(1);

var _reactRouterRedux = __webpack_require__(5);

var _reactRouter = __webpack_require__(19);

var _redux = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(10);

var _apiUrls = __webpack_require__(4);

var _apiUrls2 = _interopRequireDefault(_apiUrls);

var _TaskBoard = __webpack_require__(29);

var _TaskBoard2 = _interopRequireDefault(_TaskBoard);

var _LoginPage = __webpack_require__(38);

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _ProjectPage = __webpack_require__(40);

var _ProjectPage2 = _interopRequireDefault(_ProjectPage);

var _Logout = __webpack_require__(43);

var _Logout2 = _interopRequireDefault(_Logout);

var _PrivateRoute = __webpack_require__(44);

var _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);

var _Header = __webpack_require__(45);

var _Header2 = _interopRequireDefault(_Header);

var _auth = __webpack_require__(15);

var _serverFlag = __webpack_require__(23);

__webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, App);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			projectList: [],
			currentUser: {},
			isLoading: false
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(App, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setState({ isLoading: true });
			this.props.serverFlag();
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.props.currentUser();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var MyProjectPage = function MyProjectPage(props) {
				return _react2.default.createElement(_ProjectPage2.default, { server: _this2.props.server, addToPromises: _this2.props.addToPromises });
			};

			return _react2.default.createElement(
				'div',
				{ className: 'root-div' },
				_react2.default.createElement(_Header2.default, { currentUser: this.state.currentUser }),
				_react2.default.createElement(
					_reactRouterDom.Switch,
					null,
					_react2.default.createElement(_PrivateRoute2.default, { path: '/tasklist/:projectId', component: _TaskBoard2.default }),
					_react2.default.createElement(_PrivateRoute2.default, { exact: true, path: '/', component: MyProjectPage }),
					_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/login/', component: _LoginPage2.default }),
					_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/logout/', component: _Logout2.default })
				)
			);
		}
	}]);

	return App;
}(_react2.default.Component);

App.propTypes = {
	server: _propTypes2.default.bool,
	currentUser: _propTypes2.default.func,
	redirectToLogin: _propTypes2.default.func,
	isLoading: _propTypes2.default.bool,
	addToPromises: _propTypes2.default.func
};
App.defaultProps = {
	server: false,
	addToPromises: function addToPromises() {}
};


var mapStateToProps = function mapStateToProps(_ref2) {
	var auth = _ref2.auth;

	return {
		isLoading: auth.user.isLoading
	};
	// }
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return Object.assign({
		redirectToLogin: function redirectToLogin() {
			return dispatch((0, _reactRouterRedux.push)('/login'));
		},
		redirectToProjects: function redirectToProjects() {
			return dispatch((0, _reactRouterRedux.push)('/projects'));
		}
	}, (0, _redux.bindActionCreators)({ currentUser: _auth.currentUser, serverFlag: _serverFlag.serverFlag }, dispatch));
};

exports.default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App));

// export default App;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

var _reactModal = __webpack_require__(30);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _TaskList = __webpack_require__(31);

var _TaskList2 = _interopRequireDefault(_TaskList);

var _Task = __webpack_require__(20);

var _Task2 = _interopRequireDefault(_Task);

var _CommentList = __webpack_require__(34);

var _CommentList2 = _interopRequireDefault(_CommentList);

var _ProjectHeader = __webpack_require__(37);

var _ProjectHeader2 = _interopRequireDefault(_ProjectHeader);

var _taskModal = __webpack_require__(16);

var _tasks = __webpack_require__(12);

var _projects = __webpack_require__(13);

var _apiUrls = __webpack_require__(4);

var _apiUrls2 = _interopRequireDefault(_apiUrls);

__webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var listNames = ['New', 'In progress', 'Done'];

var TaskBoard = function (_React$Component) {
	_inherits(TaskBoard, _React$Component);

	function TaskBoard(props) {
		_classCallCheck(this, TaskBoard);

		return _possibleConstructorReturn(this, (TaskBoard.__proto__ || Object.getPrototypeOf(TaskBoard)).call(this, props));
	}

	_createClass(TaskBoard, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.props.selectProject(this.props.match.params.projectId);
			this.props.loadTasks(_apiUrls2.default.task + ('?project=' + this.props.match.params.projectId), false);
		}
	}, {
		key: 'render',
		value: function render() {
			// if (this.props.isLoading) {
			// 	return <div className="task-board">Loading...</div>;
			// }
			if (this.props.selectedProject <= 0) {
				return _react2.default.createElement(
					'div',
					{ className: 'task-board' },
					'Select project, pls'
				);
			}
			var taskLists = listNames.map(function (listName, i) {
				return _react2.default.createElement(
					'div',
					{ className: 'task-board-row' },
					_react2.default.createElement(_TaskList2.default, { key: i, listName: listName })
				);
			});
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_ProjectHeader2.default, null),
				_react2.default.createElement(
					_reactModal2.default,
					{ className: 'modal-content', isOpen: this.props.showModal, onRequestClose: this.props.closeModal, contentLabel: 'Minimal Modal Example' },
					_react2.default.createElement(_Task2.default, { task: this.props.selectedTask }),
					_react2.default.createElement(_CommentList2.default, null)
				),
				_react2.default.createElement(
					'div',
					{ className: 'task-board' },
					taskLists
				)
			);
		}
	}]);

	return TaskBoard;
}(_react2.default.Component);

TaskBoard.propTypes = {
	isLoading: _propTypes2.default.bool,
	loadTasks: _propTypes2.default.func.isRequired,
	selectedProject: _propTypes2.default.number
};


var mapStateToProps = function mapStateToProps(_ref) {
	var tasks = _ref.tasks,
	    projects = _ref.projects,
	    taskModal = _ref.taskModal;

	return {
		isLoading: tasks.isLoading,
		selectedProject: projects.selectedProject,
		showModal: taskModal.showModal,
		selectedTask: tasks.tasks[taskModal.selectedTask]
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)({ loadTasks: _tasks.loadTasks, closeModal: _taskModal.closeModal, selectProject: _projects.selectProject }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TaskBoard);

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(1);

var _redux = __webpack_require__(3);

var _Task = __webpack_require__(20);

var _Task2 = _interopRequireDefault(_Task);

var _TaskForm = __webpack_require__(33);

var _TaskForm2 = _interopRequireDefault(_TaskForm);

var _statusMapping = __webpack_require__(21);

var _statusMapping2 = _interopRequireDefault(_statusMapping);

var _tasks = __webpack_require__(12);

var _apiUrls = __webpack_require__(4);

var _apiUrls2 = _interopRequireDefault(_apiUrls);

__webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TaskList = function (_React$Component) {
	_inherits(TaskList, _React$Component);

	function TaskList() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, TaskList);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TaskList.__proto__ || Object.getPrototypeOf(TaskList)).call.apply(_ref, [this].concat(args))), _this), _this.onScroll = function (e) {
			if (_this.props.isLoading) {
				return;
			}
			var loadNext = e.target.scrollTop + e.target.offsetHeight == e.target.scrollHeight;
			if (loadNext) {
				var page = Math.ceil(_this.props.taskList.length / _apiUrls.PAGE_SIZE.task) + 1;
				_this.props.loadTasks(_apiUrls2.default.task + ('?page=' + page + '&project=' + _this.props.projectId), true);
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(TaskList, [{
		key: 'render',
		value: function render() {
			var tasks = this.props.tasks.map(function (item) {
				return _react2.default.createElement(_Task2.default, { key: item.id, task: item });
			});

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h2',
					null,
					' ',
					this.props.listName,
					' '
				),
				_react2.default.createElement(_TaskForm2.default, { status: this.props.status, projectId: this.props.projectId }),
				_react2.default.createElement(
					'div',
					{ className: 'task-list', onScroll: this.onScroll },
					tasks
				)
			);
		}
	}]);

	return TaskList;
}(_react2.default.Component);

TaskList.propTypes = {
	listName: _propTypes2.default.string,
	tasks: _propTypes2.default.arrayOf(_propTypes2.default.shape(_Task2.default.propTypes))
};
TaskList.defaultProps = {
	listName: '',
	tasks: []
};


var mapStateToProps = function mapStateToProps(_ref2, ownProps) {
	var tasks = _ref2.tasks,
	    projects = _ref2.projects;

	var tasksToShow = [];
	var taskList = []; // ids
	var status = _statusMapping2.default[ownProps.listName];
	tasks.taskList.map(function (taskId) {
		var task = tasks.tasks[taskId];
		if (task.status == status) {
			tasksToShow.push(task);
			taskList.push(task.id);
		}
	});
	return {
		listName: ownProps.listName,
		tasks: tasksToShow,
		taskList: taskList,
		projectId: projects.selectedProject,
		status: status
	};
	// }
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)({ loadTasks: _tasks.loadTasks }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TaskList);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterRedux = __webpack_require__(5);

var _redux = __webpack_require__(3);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tasks = __webpack_require__(12);

var _statusMapping = __webpack_require__(21);

var _statusMapping2 = _interopRequireDefault(_statusMapping);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STATUS_LIST = ['New', 'In progress', 'Done'];

var ChangeStatus = function (_React$Component) {
    _inherits(ChangeStatus, _React$Component);

    function ChangeStatus() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ChangeStatus);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChangeStatus.__proto__ || Object.getPrototypeOf(ChangeStatus)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (e) {
            _this.setState(_defineProperty({}, e.target.name, e.target.value));
        }, _this.onClick = function (event, status) {
            var body = JSON.stringify({
                taskId: _this.props.taskId,
                status: status,
                project_id: _this.props.project_id,
                text: _this.props.text });

            _this.props.changeStatus(_this.props.taskId, body);
            return false;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ChangeStatus, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var statuses = STATUS_LIST.map(function (status) {
                return _react2.default.createElement(
                    'li',
                    { key: _statusMapping2.default[status] },
                    _react2.default.createElement(
                        'a',
                        { onClick: function onClick(e) {
                                return _this2.onClick(event, _statusMapping2.default[status]);
                            } },
                        status
                    )
                );
            });
            return _react2.default.createElement(
                'div',
                { className: 'task-form' },
                _react2.default.createElement(
                    'form',
                    null,
                    this.props.authorId == this.props.userId ? statuses : ''
                )
            );
        }
    }]);

    return ChangeStatus;
}(_react2.default.Component);

ChangeStatus.propTypes = {
    changeStatus: _propTypes2.default.func,
    taskId: _propTypes2.default.number,
    authorId: _propTypes2.default.number,
    project_id: _propTypes2.default.number,
    text: _propTypes2.default.string,
    userId: _propTypes2.default.number,
    status: _propTypes2.default.number
};


var mapStateToProps = function mapStateToProps(_ref2, ownProps) {
    var tasks = _ref2.tasks,
        auth = _ref2.auth;

    return {
        userId: auth.user.user.id,
        authorId: tasks.tasks[ownProps.taskId].author,
        status: tasks.tasks[ownProps.taskId].status,
        text: tasks.tasks[ownProps.taskId].text,
        project_id: tasks.tasks[ownProps.taskId].project
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ changeStatus: _tasks.changeStatus }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ChangeStatus);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterRedux = __webpack_require__(5);

var _redux = __webpack_require__(3);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _apiUrls = __webpack_require__(4);

var _apiUrls2 = _interopRequireDefault(_apiUrls);

var _tasks = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TaskForm = function (_React$Component) {
    _inherits(TaskForm, _React$Component);

    function TaskForm(props) {
        _classCallCheck(this, TaskForm);

        var _this = _possibleConstructorReturn(this, (TaskForm.__proto__ || Object.getPrototypeOf(TaskForm)).call(this, props));

        _this.onChange = function (e) {
            _this.setState(_defineProperty({}, e.target.name, e.target.value));
        };

        _this.onClick = function (e) {
            e.preventDefault();
            if (_this.props.isLoading) {
                return;
            }

            var body = JSON.stringify(_this.state);

            _this.props.addTask(body);
            _this.setState({ text: '', description: '' });
        };

        _this.state = {
            text: '',
            description: '',
            assign_to_id: 1,
            project_id: props.projectId,
            status: props.status
        };
        return _this;
    }

    _createClass(TaskForm, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'task-form' },
                _react2.default.createElement(
                    'form',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'task-field-wrapper' },
                        _react2.default.createElement('input', { onChange: this.onChange, value: this.state.text, className: 'task-form-field', type: 'text', name: 'text', placeholder: 'Text' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'task-field-wrapper' },
                        _react2.default.createElement('input', { onChange: this.onChange, value: this.state.description, className: 'task-form-field', type: 'text', name: 'description', placeholder: 'description' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'task-field-wrapper' },
                        _react2.default.createElement(
                            'button',
                            { onClick: this.onClick },
                            'Add'
                        )
                    )
                )
            );
        }
    }]);

    return TaskForm;
}(_react2.default.Component);

TaskForm.propTypes = {
    addTask: _propTypes2.default.func,
    idLoading: _propTypes2.default.bool,
    projectId: _propTypes2.default.number,
    status: _propTypes2.default.number
};


var mapStateToProps = function mapStateToProps(_ref) {
    var tasks = _ref.tasks;

    return {
        isLoading: tasks.form.isLoading
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ addTask: _tasks.addTask }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TaskForm);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

var _comments = __webpack_require__(17);

var _apiUrls = __webpack_require__(4);

var _Comment = __webpack_require__(35);

var _Comment2 = _interopRequireDefault(_Comment);

var _CommentForm = __webpack_require__(36);

var _CommentForm2 = _interopRequireDefault(_CommentForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentList = function (_React$Component) {
    _inherits(CommentList, _React$Component);

    function CommentList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, CommentList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CommentList.__proto__ || Object.getPrototypeOf(CommentList)).call.apply(_ref, [this].concat(args))), _this), _this.onScroll = function (e) {
            if (_this.props.isLoading) {
                return;
            }
            var loadNext = e.target.scrollTop + e.target.offsetHeight == e.target.scrollHeight;

            if (loadNext) {
                var page = Math.ceil(_this.props.commentList.length / _apiUrls.PAGE_SIZE.comment) + 1;
                _this.props.loadComments(_this.props.taskId, page, true);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(CommentList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.loadComments(this.props.taskId, 1, false);
        }
    }, {
        key: 'render',
        value: function render() {

            var comments = this.props.commentList.map(function (id) {
                return _react2.default.createElement(_Comment2.default, { key: id, id: id });
            });
            return _react2.default.createElement(
                'div',
                { className: 'comment-list', onScroll: this.onScroll },
                _react2.default.createElement(_CommentForm2.default, null),
                comments
            );
        }
    }]);

    return CommentList;
}(_react2.default.Component);

CommentList.propTypes = {
    isLoading: _propTypes2.default.bool,
    commentList: _propTypes2.default.arrayOf(_propTypes2.default.number),
    loadComments: _propTypes2.default.func.isRequired
};
CommentList.defaultProps = {
    commentList: [],
    isLoading: false
};


var mapStateToProps = function mapStateToProps(_ref2) {
    var comments = _ref2.comments,
        taskModal = _ref2.taskModal;

    return {
        commentList: comments.commentList,
        isLoading: comments.isLoading,
        taskId: taskModal.selectedTask
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ loadComments: _comments.loadComments }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CommentList);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(1);

var _redux = __webpack_require__(3);

var _User = __webpack_require__(22);

var _User2 = _interopRequireDefault(_User);

__webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comment = function (_React$Component) {
	_inherits(Comment, _React$Component);

	function Comment() {
		_classCallCheck(this, Comment);

		return _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).apply(this, arguments));
	}

	_createClass(Comment, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'comment' },
				_react2.default.createElement(
					'div',
					{ className: 'comment__header' },
					_react2.default.createElement(
						'div',
						{ className: 'comment__header-user' },
						' ',
						_react2.default.createElement(_User2.default, { id: this.props.author }),
						' '
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'comment__content' },
					_react2.default.createElement(
						'div',
						{ className: 'comment__content-text' },
						this.props.text
					)
				)
			);
		}
	}]);

	return Comment;
}(_react2.default.Component);

Comment.propTypes = {
	id: _propTypes2.default.number,
	author: _propTypes2.default.number,
	text: _propTypes2.default.string,
	task: _propTypes2.default.number
};
Comment.defaultProps = {
	author: null,
	task: null,
	text: ''
};


var mapStateToProps = function mapStateToProps(_ref, ownProps) {
	var comments = _ref.comments;

	return _extends({}, comments.comments[ownProps.id]);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Comment);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterRedux = __webpack_require__(5);

var _redux = __webpack_require__(3);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _apiUrls = __webpack_require__(4);

var _apiUrls2 = _interopRequireDefault(_apiUrls);

var _comments = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentForm = function (_React$Component) {
    _inherits(CommentForm, _React$Component);

    function CommentForm(props) {
        _classCallCheck(this, CommentForm);

        var _this = _possibleConstructorReturn(this, (CommentForm.__proto__ || Object.getPrototypeOf(CommentForm)).call(this, props));

        _this.onChange = function (e) {
            _this.setState(_defineProperty({}, e.target.name, e.target.value));
        };

        _this.onClick = function (e) {
            e.preventDefault();

            var body = JSON.stringify(_this.state);

            _this.props.addComment(body);
            _this.setState({ text: '' });
        };

        _this.state = {
            text: '',
            task: _this.props.task
        };
        return _this;
    }

    _createClass(CommentForm, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'comment-form' },
                _react2.default.createElement(
                    'form',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'comment-field-wrapper' },
                        _react2.default.createElement('input', { onChange: this.onChange, value: this.state.text, className: 'comment-form-field', type: 'text', name: 'text', placeholder: 'Text' }),
                        _react2.default.createElement(
                            'div',
                            { className: 'comment-field-wrapper' },
                            _react2.default.createElement(
                                'button',
                                { onClick: this.onClick },
                                'Add'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return CommentForm;
}(_react2.default.Component);

CommentForm.propTypes = {
    addComent: _propTypes2.default.func,
    idLoading: _propTypes2.default.bool,
    taskId: _propTypes2.default.number
};


var mapStateToProps = function mapStateToProps(_ref) {
    var taskModal = _ref.taskModal;

    return { task: taskModal.selectedTask };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ addComment: _comments.addComment }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CommentForm);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(1);

var _Project = __webpack_require__(18);

var _Project2 = _interopRequireDefault(_Project);

__webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectHeader = function (_React$Component) {
	_inherits(ProjectHeader, _React$Component);

	function ProjectHeader() {
		_classCallCheck(this, ProjectHeader);

		return _possibleConstructorReturn(this, (ProjectHeader.__proto__ || Object.getPrototypeOf(ProjectHeader)).apply(this, arguments));
	}

	_createClass(ProjectHeader, [{
		key: 'render',
		value: function render() {
			var projectName = '';
			if (this.props.project) {
				projectName = this.props.project.name;
			}
			return _react2.default.createElement(
				'div',
				{ className: 'project-header' },
				_react2.default.createElement(
					'a',
					{ className: 'project-header__name' },
					' ',
					projectName,
					' '
				)
			);
		}
	}]);

	return ProjectHeader;
}(_react2.default.Component);

ProjectHeader.propTypes = {
	project: _propTypes2.default.shape(_Project2.default.PropTypes)
};
ProjectHeader.defaultProps = {
	project: {}
};


var mapStateToProps = function mapStateToProps(_ref) {
	var tasks = _ref.tasks,
	    projects = _ref.projects;

	return {
		project: projects.projects[projects.selectedProject]
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProjectHeader);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LoginForm = __webpack_require__(39);

var _LoginForm2 = _interopRequireDefault(_LoginForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginPage = function (_React$Component) {
	_inherits(LoginPage, _React$Component);

	function LoginPage() {
		_classCallCheck(this, LoginPage);

		return _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).apply(this, arguments));
	}

	_createClass(LoginPage, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'login-page' },
				_react2.default.createElement(
					'h2',
					null,
					' Login Form '
				),
				_react2.default.createElement(_LoginForm2.default, null)
			);
		}
	}]);

	return LoginPage;
}(_react2.default.Component);

exports.default = LoginPage;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterRedux = __webpack_require__(5);

var _redux = __webpack_require__(3);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _apiUrls = __webpack_require__(4);

var _apiUrls2 = _interopRequireDefault(_apiUrls);

var _auth = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_React$Component) {
    _inherits(LoginForm, _React$Component);

    function LoginForm() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, LoginForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            username: '',
            password: ''
        }, _this.onChange = function (e) {
            _this.setState(_defineProperty({}, e.target.name, e.target.value));
        }, _this.onClick = function (e) {
            e.preventDefault();
            if (_this.props.isLoading) {
                return;
            }

            var body = JSON.stringify(_this.state);

            console.log('login request with body ' + body);

            _this.props.login(body).then(function () {
                return _this.props.currentUser().then(function () {
                    return _this.props.redirect();
                });
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(LoginForm, [{
        key: 'render',
        value: function render() {
            if (this.props.isLoading) {
                return _react2.default.createElement(
                    'p',
                    null,
                    ' Logging in...'
                );
            }

            return _react2.default.createElement(
                'div',
                { className: 'login-form' },
                _react2.default.createElement(
                    'form',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'login-field-wrapper' },
                        _react2.default.createElement('input', { onChange: this.onChange, value: this.state.username, className: 'login-form-field', type: 'text', name: 'username', placeholder: 'Username' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'login-field-wrapper' },
                        _react2.default.createElement('input', { onChange: this.onChange, value: this.state.password, className: 'login-form-field', type: 'password', name: 'password', placeholder: 'Password' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'login-field-wrapper' },
                        _react2.default.createElement(
                            'button',
                            { onClick: this.onClick },
                            'Login'
                        )
                    )
                )
            );
        }
    }]);

    return LoginForm;
}(_react2.default.Component);

LoginForm.propTypes = {
    isLoading: _propTypes2.default.bool,
    redirect: _propTypes2.default.func,
    login: _propTypes2.default.func
};


var mapStateToProps = function mapStateToProps(_ref2) {
    var auth = _ref2.auth;

    return {
        isLoading: auth.isLoading
        // isAuthenticated: auth.authentication.isAuthenticated,
    };
    // }
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return Object.assign({}, (0, _redux.bindActionCreators)({ login: _auth.login, currentUser: _auth.currentUser }, dispatch), { redirect: function redirect() {
            return dispatch((0, _reactRouterRedux.push)('/'));
        } });
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LoginForm);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ProjectList = __webpack_require__(41);

var _ProjectList2 = _interopRequireDefault(_ProjectList);

var _ProjectForm = __webpack_require__(42);

var _ProjectForm2 = _interopRequireDefault(_ProjectForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectPage = function (_React$Component) {
	_inherits(ProjectPage, _React$Component);

	function ProjectPage() {
		_classCallCheck(this, ProjectPage);

		return _possibleConstructorReturn(this, (ProjectPage.__proto__ || Object.getPrototypeOf(ProjectPage)).apply(this, arguments));
	}

	_createClass(ProjectPage, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'project-page' },
				_react2.default.createElement(
					'h2',
					null,
					' My Projects '
				),
				_react2.default.createElement(_ProjectForm2.default, null),
				_react2.default.createElement(_ProjectList2.default, { server: this.props.server, addToPromises: this.props.addToPromises })
			);
		}
	}]);

	return ProjectPage;
}(_react2.default.Component);

ProjectPage.propTypes = {
	server: _propTypes2.default.bool,
	addToPromises: _propTypes2.default.func
};
ProjectPage.defaultProps = {
	server: false,
	addToPromises: function addToPromises() {}
};
exports.default = ProjectPage;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

var _projects = __webpack_require__(13);

var _Project = __webpack_require__(18);

var _Project2 = _interopRequireDefault(_Project);

var _apiUrls = __webpack_require__(4);

__webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectList = function (_React$Component) {
	_inherits(ProjectList, _React$Component);

	function ProjectList(props) {
		_classCallCheck(this, ProjectList);

		var _this = _possibleConstructorReturn(this, (ProjectList.__proto__ || Object.getPrototypeOf(ProjectList)).call(this, props));

		_this.onScroll = function (e) {
			if (_this.props.isLoading) {
				return;
			}
			var loadNext = e.target.scrollTop + e.target.offsetHeight == e.target.scrollHeight;
			if (loadNext) {
				var page = Math.ceil(_this.props.projectList.length / _apiUrls.PAGE_SIZE.project) + 1;
				_this.props.loadProjects(page, true);
			}
		};

		_this.onClick = function (e) {
			if (_this.props.isLoading) {
				return;
			}
			var page = Math.ceil(_this.props.projectList.length / _apiUrls.PAGE_SIZE.project) + 1;
			_this.props.loadProjects(page, true);
		};

		if (true) {
			_this.props.addToPromises(_this.props.loadProjects(1, false));
		}
		return _this;
	}

	_createClass(ProjectList, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (!this.props.isServerRendering) {
				this.props.loadProjects(1, false);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			if (this.props.isLoading) {
				return _react2.default.createElement(
					'div',
					{ className: 'project-list' },
					'Loading...'
				);
			}
			var projects = this.props.projectList.map(function (projectId) {
				return _react2.default.createElement(_Project2.default, { key: projectId, id: projectId });
			});

			return _react2.default.createElement(
				'div',
				{ className: 'project-list', onScroll: this.onScroll },
				projects,
				_react2.default.createElement(
					'button',
					{ onClick: this.onClick },
					'Load more'
				)
			);
		}
	}]);

	return ProjectList;
}(_react2.default.Component);

ProjectList.propTypes = {
	isLoading: _propTypes2.default.bool,
	projectList: _propTypes2.default.arrayOf(_propTypes2.default.number),
	loadProjects: _propTypes2.default.func.isRequired,
	server: _propTypes2.default.bool,
	addToPromises: _propTypes2.default.func
};
ProjectList.defaultProps = {
	isLoading: false,
	projectList: [],
	server: false,
	addToPromises: function addToPromises() {}
};


var mapStateToProps = function mapStateToProps(_ref) {
	var SSR = _ref.SSR,
	    projects = _ref.projects;

	return {
		isLoading: projects.isLoading,
		projectList: projects.projectList,
		isServerRendering: SSR.serverRendering
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)({ loadProjects: _projects.loadProjects }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProjectList);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterRedux = __webpack_require__(5);

var _redux = __webpack_require__(3);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _apiUrls = __webpack_require__(4);

var _apiUrls2 = _interopRequireDefault(_apiUrls);

var _projects = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectForm = function (_React$Component) {
    _inherits(ProjectForm, _React$Component);

    function ProjectForm() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ProjectForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProjectForm.__proto__ || Object.getPrototypeOf(ProjectForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            name: ''
        }, _this.onChange = function (e) {
            _this.setState(_defineProperty({}, e.target.name, e.target.value));
        }, _this.onClick = function (e) {
            e.preventDefault();
            if (_this.props.isLoading) {
                return;
            }

            var body = JSON.stringify(_this.state);

            _this.props.addProject(body);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ProjectForm, [{
        key: 'render',
        value: function render() {
            if (this.props.isLoading) {
                return _react2.default.createElement(
                    'p',
                    null,
                    ' Loading'
                );
            }

            return _react2.default.createElement(
                'div',
                { className: 'project-form' },
                _react2.default.createElement(
                    'form',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'project-field-wrapper' },
                        _react2.default.createElement('input', { onChange: this.onChange, value: this.state.name, className: 'project-form-field', type: 'text', name: 'name', placeholder: 'Name' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'project-field-wrapper' },
                        _react2.default.createElement(
                            'button',
                            { onClick: this.onClick },
                            'Add'
                        )
                    )
                )
            );
        }
    }]);

    return ProjectForm;
}(_react2.default.Component);

ProjectForm.propTypes = {
    isLoading: _propTypes2.default.bool,
    addProject: _propTypes2.default.func
};


var mapStateToProps = function mapStateToProps(_ref2) {
    var projects = _ref2.projects;

    return {
        isLoading: projects.isLoading
    };
    // }
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ addProject: _projects.addProject }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProjectForm);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterRedux = __webpack_require__(5);

var _redux = __webpack_require__(3);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _apiUrls = __webpack_require__(4);

var _apiUrls2 = _interopRequireDefault(_apiUrls);

var _auth = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logout = function (_React$Component) {
    _inherits(Logout, _React$Component);

    function Logout() {
        _classCallCheck(this, Logout);

        return _possibleConstructorReturn(this, (Logout.__proto__ || Object.getPrototypeOf(Logout)).apply(this, arguments));
    }

    _createClass(Logout, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            this.props.logout().then(function () {
                return _this2.props.redirectToLogin();
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return Logout;
}(_react2.default.Component);

Logout.propTypes = {
    redirectToLogin: _propTypes2.default.func,
    logout: _propTypes2.default.func
};


var mapStateToProps = function mapStateToProps() {
    return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        redirectToLogin: function redirectToLogin() {
            return dispatch((0, _reactRouterRedux.push)('/login'));
        },
        logout: function logout() {
            return dispatch((0, _auth.logout)());
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Logout);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PrivateRoute = function PrivateRoute(_ref) {
  var Component = _ref.component,
      rest = _objectWithoutProperties(_ref, ['component']);

  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: function render(props) {
      return _react2.default.createElement(Component, props);
    } }));
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var auth = _ref2.auth;

  return {
    // isAuthenticated: auth.authentication.isAuthenticated,
  };
  // }
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PrivateRoute);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(10);

var _Project = __webpack_require__(18);

var _Project2 = _interopRequireDefault(_Project);

__webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
	_inherits(Header, _React$Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			var currentUser = this.props.currentUser.first_name ? _react2.default.createElement(
				'p',
				null,
				' ',
				this.props.currentUser.first_name + ' ' + this.props.currentUser.last_name,
				' '
			) : _react2.default.createElement(
				'p',
				null,
				'Anonymous'
			);
			return _react2.default.createElement(
				'div',
				{ className: 'header' },
				_react2.default.createElement(
					'div',
					{ className: 'header__element' },
					_react2.default.createElement(
						'a',
						{ href: '/' },
						' TSKTRCKR '
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'header__element' },
					_react2.default.createElement(
						_reactRouterDom.Link,
						{ to: '/' },
						'All projects'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'header__element-right' },
					_react2.default.createElement(
						_reactRouterDom.Link,
						{ to: '/login' },
						'Log in'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'header__element-right' },
					_react2.default.createElement(
						_reactRouterDom.Link,
						{ to: '/logout' },
						' Logout '
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'header__element-right' },
					currentUser
				)
			);
		}
	}]);

	return Header;
}(_react2.default.Component);

Header.propTypes = {
	currentUser: _propTypes2.default.shape({
		id: _propTypes2.default.number,
		first_name: _propTypes2.default.string,
		last_name: _propTypes2.default.string,
		avatar: _propTypes2.default.string,
		email: _propTypes2.default.string,
		username: _propTypes2.default.string
	})
};


var mapStateToProps = function mapStateToProps(_ref) {
	var auth = _ref.auth;

	if (auth.user.user) return {
		currentUser: auth.user.user
	};else {
		return {};
	}
};

var mapDispatchToProps = function mapDispatchToProps() {
	return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Header);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var body = _ref.body,
      title = _ref.title,
      store = _ref.store;

  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>" + title + "</title>\n        <script>\n          window.__REDUX__SERVER__STORE__ = '" + store + "'\n          </script>\n      </head>\n      <body>\n        <div id=\"root\">" + body + "</div>\n        <script src=\"/static/build/index.js\"></script>\n      </body>\n    </html>\n  ";
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(3);

var _reducers = __webpack_require__(48);

var _reducers2 = _interopRequireDefault(_reducers);

var _middlewares = __webpack_require__(56);

var _middlewares2 = _interopRequireDefault(_middlewares);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function initStore() {
    var additionalMiddlewares = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    // const innitialStore = {};
    //    return createStore(
    //        initReducers,
    //        innitialStore,
    //        compose(
    //            applyMiddleware(...additionalMiddlewares, ...middlewares),
    //            window.__REDUX_DEVTOOLS_EXTENSION__(),
    //        ),
    //    );


    var initialStore = {};
    if (false) {
        initialStore = JSON.parse(window.__REDUX__SERVER__STORE__);
    }
    var enhancerList = [_redux.applyMiddleware.apply(undefined, _toConsumableArray(additionalMiddlewares).concat(_toConsumableArray(_middlewares2.default)))];
    if (typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__()) {
        enhancerList.push(window.__REDUX_DEVTOOLS_EXTENSION__());
    }
    var enhancers = _redux.compose.apply(undefined, enhancerList);
    var store = (0, _redux.createStore)(_reducers2.default, initialStore, enhancers);
    return store;
}

exports.default = initStore;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(3);

var _reactRouterRedux = __webpack_require__(5);

var _tasks = __webpack_require__(49);

var _tasks2 = _interopRequireDefault(_tasks);

var _projects = __webpack_require__(50);

var _projects2 = _interopRequireDefault(_projects);

var _auth = __webpack_require__(51);

var _auth2 = _interopRequireDefault(_auth);

var _users = __webpack_require__(52);

var _users2 = _interopRequireDefault(_users);

var _comments = __webpack_require__(53);

var _comments2 = _interopRequireDefault(_comments);

var _taskModal = __webpack_require__(54);

var _taskModal2 = _interopRequireDefault(_taskModal);

var _SSR = __webpack_require__(55);

var _SSR2 = _interopRequireDefault(_SSR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appReducer = (0, _redux.combineReducers)({
	routerReducer: _reactRouterRedux.routerReducer,
	tasks: _tasks2.default,
	projects: _projects2.default,
	users: _users2.default,
	comments: _comments2.default,
	taskModal: _taskModal2.default,
	auth: _auth2.default,
	SSR: _SSR2.default
});

var rootReducer = function rootReducer(state, action) {
	if (action.type === 'LOGOUT') {
		state = undefined;
		// localStorage.removeItem('auth-token');
	}
	return appReducer(state, action);
};

exports.default = rootReducer;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = tasks;

var _reactAddonsUpdate = __webpack_require__(8);

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _tasks = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
    taskList: [],
    tasks: {},
    isLoading: false,
    form: {
        isLoading: false
    }
};

function tasks() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    var newStore = store;
    if (action.payload && action.payload.entities && action.payload.entities.tasks) {
        newStore = (0, _reactAddonsUpdate2.default)(store, {
            tasks: { $merge: action.payload.entities.tasks }
        });
    }

    switch (action.type) {
        case _tasks.START_TASK_LOADING:
            {
                return (0, _reactAddonsUpdate2.default)(newStore, {
                    isLoading: { $set: true }
                });
            }
        case _tasks.SUCCESS_TASK_LOADING:
            {
                if (action.payload.addTasks) {
                    return (0, _reactAddonsUpdate2.default)(newStore, {
                        isLoading: { $set: false },
                        taskList: { $push: action.payload.result }
                    });
                } else {
                    return (0, _reactAddonsUpdate2.default)(newStore, {
                        isLoading: { $set: false },
                        taskList: { $set: action.payload.result }
                    });
                }
            }
        case _tasks.ERROR_TASK_LOADING:
            {
                return (0, _reactAddonsUpdate2.default)(newStore, {
                    isLoading: { $set: false }
                });
            }
        case _tasks.START_ADD_TASK:
            {
                return (0, _reactAddonsUpdate2.default)(newStore, {
                    form: { isLoading: { $set: true } }
                });
            }
        case _tasks.SUCCESS_ADD_TASK:
            {
                return (0, _reactAddonsUpdate2.default)(newStore, {
                    form: { isLoading: { $set: false } },
                    taskList: { $push: action.payload.result }
                });
            }
        case _tasks.ERROR_ADD_TASK:
            {
                return (0, _reactAddonsUpdate2.default)(newStore, {
                    form: { isLoading: { $set: false } }
                });
            }
        default:
            return newStore;
    }
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = projects;

var _reactAddonsUpdate = __webpack_require__(8);

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _projects = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
    projectList: [],
    projects: {},
    isLoading: false,
    selectedProject: 0,
    size: 0,
    previous: '',
    next: ''
};

function projects() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    var newStore = store;
    if (action.payload && action.payload.entities && action.payload.entities.projects) {
        newStore = (0, _reactAddonsUpdate2.default)(store, {
            projects: { $merge: action.payload.entities.projects }
        });
    }

    switch (action.type) {
        case _projects.START_PROJECT_LOADING:
            {
                return (0, _reactAddonsUpdate2.default)(newStore, {
                    isLoading: { $set: true }
                });
            }
        case _projects.SUCCESS_PROJECT_LOADING:
            {
                if (action.payload.addProjects) {
                    return (0, _reactAddonsUpdate2.default)(newStore, {
                        isLoading: { $set: false },
                        projectList: { $push: action.payload.result }
                    });
                } else {
                    return (0, _reactAddonsUpdate2.default)(newStore, {
                        isLoading: { $set: false },
                        projectList: { $set: action.payload.result }
                    });
                }
            }

        case _projects.ERROR_PROJECT_LOADING:
            {
                return (0, _reactAddonsUpdate2.default)(newStore, {
                    isLoading: { $set: false }
                });
            }
        case _projects.START_ADD_PROJECT:
            {
                return (0, _reactAddonsUpdate2.default)(newStore, {
                    isLoading: { $set: true }
                });
            }
        case _projects.SUCCESS_ADD_PROJECT:
            {
                return (0, _reactAddonsUpdate2.default)(newStore, {
                    isLoading: { $set: false },
                    projectList: { $push: action.payload.result }
                });
            }
        case _projects.ERROR_ADD_PROJECT:
            {
                return (0, _reactAddonsUpdate2.default)(newStore, {
                    isLoading: { $set: false }
                });
            }
        case _projects.SELECT_PROJECT:
            {
                return (0, _reactAddonsUpdate2.default)(newStore, {
                    selectedProject: { $set: action.selectedProject }
                });
            }
        default:
            return newStore;
    }
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = auth;

var _reactAddonsUpdate = __webpack_require__(8);

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _reactRouterRedux = __webpack_require__(5);

var _auth = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getInitialState = function getInitialState() {
    // const token = localStorage.getItem('auth-token');
    // let isAuthenticated = false;
    // if (token) {
    //     isAuthenticated = true;
    // } // fixme 
    // const authentication = {isAuthenticated, token}

    return {
        user: { user: {}, isLoading: false },
        isLoading: false
        // authentication
    };
};

function auth() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getInitialState();
    var action = arguments[1];

    var newStore = store;

    switch (action.type) {
        case _auth.START_LOGIN:
            {
                return (0, _reactAddonsUpdate2.default)(newStore, {
                    isLoading: { $set: true }
                });
            }
        case _auth.SUCCESS_LOGIN:
            {
                // localStorage.setItem('auth-token', token);

                return (0, _reactAddonsUpdate2.default)(newStore, {
                    isLoading: { $set: false }
                });
            }
        case _auth.ERROR_LOGIN:
            {
                return (0, _reactAddonsUpdate2.default)(newStore, {
                    isLoading: { $set: false }
                });
            }

        case _auth.START_CURRENT_USER_LOADING:
            {
                return (0, _reactAddonsUpdate2.default)(newStore, {
                    user: { isLoading: { $set: true } }
                });
            }
        case _auth.SUCCESS_CURRENT_USER_LOADING:
            {
                return (0, _reactAddonsUpdate2.default)(newStore, {
                    user: { user: { $set: action.payload }, isLoading: { $set: false } }
                });
            }
        case _auth.ERROR_CURRENT_USER_LOADING:
            {
                return (0, _reactAddonsUpdate2.default)(newStore, {
                    user: { isLoading: { $set: false } }
                });
            }

        default:
            return newStore;
    }
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = projects;

var _reactAddonsUpdate = __webpack_require__(8);

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {  } from './../actions/users';


var initialState = {
    usersList: [],
    users: {},
    isLoading: false
};

function projects() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    var newStore = store;
    if (action.payload && action.payload.entities && action.payload.entities.users) {
        newStore = (0, _reactAddonsUpdate2.default)(store, {
            users: { $merge: action.payload.entities.users }
        });
    }

    switch (action.type) {
        default:
            return newStore;
    }
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = comments;

var _reactAddonsUpdate = __webpack_require__(8);

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _comments = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
    commentList: [],
    comments: {},
    isLoading: false
};

function comments() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    var newStore = store;
    if (action.payload && action.payload.entities && action.payload.entities.comments) {
        newStore = (0, _reactAddonsUpdate2.default)(store, {
            comments: { $merge: action.payload.entities.comments }
        });
    }

    switch (action.type) {
        case _comments.START_COMMENT_LOADING:
            {
                return (0, _reactAddonsUpdate2.default)(newStore, {
                    isLoading: { $set: true }
                });
            }
        case _comments.SUCCESS_COMMENT_LOADING:
            {
                if (action.payload.addComments) {
                    return (0, _reactAddonsUpdate2.default)(newStore, {
                        isLoading: { $set: false },
                        commentList: { $push: action.payload.result }
                    });
                } else {
                    return (0, _reactAddonsUpdate2.default)(newStore, {
                        isLoading: { $set: false },
                        commentList: { $set: action.payload.result }
                    });
                }
            }
        case _comments.ERROR_COMMENT_LOADING:
            {
                return (0, _reactAddonsUpdate2.default)(newStore, {
                    isLoading: { $set: false }
                });
            }
        case _comments.SUCCESS_ADD_COMMENT:
            {
                console.log(action.payload);
                return (0, _reactAddonsUpdate2.default)(newStore, {
                    commentList: { $push: action.payload.result }
                });
            }
        default:
            return newStore;
    }
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = taskModal;

var _reactAddonsUpdate = __webpack_require__(8);

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _taskModal = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
    showModal: false,
    selectedTask: 0
};

function taskModal() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    var newStore = store;

    switch (action.type) {
        case _taskModal.CLOSE_TASK_MODAL:
            {
                return (0, _reactAddonsUpdate2.default)(newStore, {
                    showModal: { $set: false }
                });
            }
        case _taskModal.OPEN_TASK_MODAL:
            {
                return (0, _reactAddonsUpdate2.default)(newStore, {
                    showModal: { $set: true },
                    selectedTask: { $set: action.selectedTask }
                });
            }

        default:
            return newStore;
    }
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = SSR;

var _reactAddonsUpdate = __webpack_require__(8);

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _serverFlag = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

function SSR() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    var newStore = store;
    if (true) {
        newStore = {
            serverRendering: true
        };
    }
    switch (action.type) {
        case _serverFlag.SET_SSR_FLAG:
            {
                return (0, _reactAddonsUpdate2.default)(newStore, {
                    serverRendering: { $set: false }
                });
            }
        default:
            return newStore;
    }
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reduxApiMiddleware = __webpack_require__(7);

exports.default = [_reduxApiMiddleware.apiMiddleware];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.headerMiddleware = undefined;

var _reduxApiMiddleware = __webpack_require__(7);

// создаем функцию принимающую токе и возвращающую мидлварь, что бы добавлять Authorization хедер к нащим
// запросам от сервера
var headerMiddleware = exports.headerMiddleware = function headerMiddleware(token) {
    return function (store) {
        return function (next) {
            return function (action) {
                if ((0, _reduxApiMiddleware.isRSAA)(action)) {
                    action[_reduxApiMiddleware.CALL_API]['headers'] = { 'Authorization': 'token ' + token };
                }
                return next(action);
            };
        };
    };
};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ })
/******/ ]);
//# sourceMappingURL=serverBundle.js.map