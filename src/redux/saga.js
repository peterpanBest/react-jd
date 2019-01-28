import * as at from "./actionType";
import { call, put, takeEvery, all } from "redux-saga/effects";
import axios from "axios";

function* helloSaga() {
  console.log("Hello, Saga !");
}

function* testAjax(action) {
    console.log(action)
    const p = function () {
        return axios.post("http://stgexpsvr.perfect365.com/perfect365/perfect365web/services", doData())
            .then(function (data) {
                return data;
            })
            .catch(function (error) {
                return error;
            }) 
    }

    const res = yield call(p);

    yield put({      // dispatch一个action到reducer， payload是请求返回的数据
        type: at.GET_INFO_SUCCESS,
        payload: res
    })
}

function* watchTestAjax() {     // 在store.js中，执行了 sagaMiddleware.run(rootSaga)
    yield takeEvery(at.GET_INFO, testAjax)
}

function doData() {
  var param = {
    sysPara: { code: 10059 },
    bizPara: { top: 8, score: 0, hashTagContent: "#365VIP" }
  };
  var fd = new FormData();
  fd.append("sysPara", JSON.stringify(param.sysPara));
  fd.append("bizPara", JSON.stringify(param.bizPara));
  return fd;
}
export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchTestAjax()
    ])
} 