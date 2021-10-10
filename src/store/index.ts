import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './ducks'
import rootSaga from './sagas'

const rootReducer = (state, action) => {
  if (action.type === 'reset') {
    return reducers(undefined, action)
  }

  return reducers(state, action)
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export { store }

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
