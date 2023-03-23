import { call, put, takeEvery } from 'redux-saga/effects'

const Userfetch = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const res = await data.json()
    return res
}

function* FetchUser() {
    try {
        const data = yield call(Userfetch)
        yield put({ type: "GET_USERDATA", payload : data})
    } catch (error) {
       alert(error);
    }
}

function* Userswatcher() {
    yield takeEvery('FETCH_USERS', FetchUser)
}

export default Userswatcher