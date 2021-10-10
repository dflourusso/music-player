import { createAction, createReducer } from '@reduxjs/toolkit'
import { Sound } from '../../constants/sounds'

interface PlayerState {
  sounds: Sound[]
}

const setSounds = createAction<Sound[]>('sounds/setSounds')

export const playerActions = {
  setSounds,
}

const initialState: PlayerState = {
  sounds: [],
}

export const playerReducer = createReducer(initialState, {
  [setSounds.type]: (state, action) => state + action.payload,
})
