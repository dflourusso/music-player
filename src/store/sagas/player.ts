import { Audio } from 'expo-av'
import { call, put, select, takeEvery } from 'redux-saga/effects'
import { RootState } from '..'
import { Sound } from '../../constants/sounds'
import * as audio from '../../utils/audio'
import { playerActions } from '../ducks/player'

function audioSoundSelector(state: RootState): Audio.Sound | undefined {
  return state.playerReducer.currentPlayingSound?.audioSound
}
type audioSoundSelectorType = ReturnType<typeof audioSoundSelector> | undefined

export function* unloadPrevious() {
  const audioSound = (yield select(
    audioSoundSelector
  )) as audioSoundSelectorType
  if (audioSound) {
    try {
      yield call([audioSound, audioSound.stopAsync])
      yield call([audioSound, audioSound.unloadAsync])
    } catch (error) {
      console.log(error)
    }
  }
}

export function* initSound(action: any) {
  yield call(unloadPrevious)
  const audioSound = (yield call(
    [audio, audio.createAudioSound],
    action.payload
  )) as Audio.Sound
  if (audioSound) {
    console.log(action.payload)
    yield put(
      playerActions.setSound({
        id: action.payload.fileName,
        audioSound: audioSound,
      })
    )
  }
}

export function* play() {
  const audioSound = (yield select(
    audioSoundSelector
  )) as audioSoundSelectorType

  if (!audioSound) return
  yield call([audioSound, audioSound.playAsync])
}

export function* pause() {
  const audioSound = (yield select(
    audioSoundSelector
  )) as audioSoundSelectorType

  if (!audioSound) return
  yield call([audioSound, audioSound.pauseAsync])
}

export default function* playerSaga() {
  yield takeEvery(playerActions.initSound.type, initSound)
  yield takeEvery(playerActions.setSound.type, play)
  yield takeEvery(playerActions.play.type, play)
  yield takeEvery(playerActions.pause.type, pause)
}
