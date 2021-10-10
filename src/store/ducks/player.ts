import { createAction, createReducer } from '@reduxjs/toolkit'
import { Audio } from 'expo-av'
import { Sound } from '../../constants/sounds'

export type CurrentPlayingSoundType = {
  id: Sound['fileName']
  audioSound: Audio.Sound
}

interface PlayerState {
  sounds: Sound[]
  currentPlayingSound?: CurrentPlayingSoundType
}

const setSounds = createAction<Sound[]>('sounds/setSounds')
const initSound = createAction<Sound>('sounds/initSound')
const setSound = createAction<CurrentPlayingSoundType>('sounds/setSound')
const play = createAction<void>('sounds/play')
const pause = createAction<void>('sounds/pause')

export const playerActions = {
  setSounds,
  initSound,
  setSound,
  play,
  pause,
}

const initialState: PlayerState = {
  sounds: [],
  currentPlayingSound: undefined,
}

export const playerReducer = createReducer(initialState, {
  [setSounds.type]: (state, { payload }) => ({
    ...state,
    sounds: payload,
  }),
  [setSound.type]: (state, { payload }) => {
    return {
      ...state,
      currentPlayingSound: payload,
    }
  },
})
