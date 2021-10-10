import { all } from 'redux-saga/effects'
import player from './player'

function* rootSaga() {
  yield all([player()])
}

export default rootSaga
