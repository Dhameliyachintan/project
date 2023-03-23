import { all } from "redux-saga/effects"
import Userswatcher from "./Indexsaga"

function* RootSaga() {
    yield all([Userswatcher()])
}
export default RootSaga