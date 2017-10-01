// import 'babel-polyfill';

// import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import { SUCCESS_LOGIN, currentUser} from './../actions/auth.js';

// function* fetchUser(action) {
//   try {
//   	  console.log('fetchUser');
//       const user = yield call(currentUser);
//       yield put({type: "USER_FETCH_SUCCEEDED", user: user});
//    } catch (e) {
//       yield put({type: "USER_FETCH_FAILED", message: e.message});
//    }
//   // const user = yield call(currentUser);
// }

// function* fetchUserSaga() {
// 	console.log('fetchUserSaga');
// 	console.log(SUCCESS_LOGIN);
// 	while (true) {
//   yield takeEvery(SUCCESS_LOGIN, fetchUser);
// }
// }

// export default fetchUserSaga;