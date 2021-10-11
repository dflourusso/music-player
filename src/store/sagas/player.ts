import { Audio } from "expo-av";
import { END, eventChannel } from "redux-saga";
import { call, fork, put, select, take, takeEvery } from "redux-saga/effects";
import { RootState } from "..";
import { Sound } from "../../constants/sounds";
import * as audio from "../../utils/audio";
import { CurrentPlayingSoundType, playerActions } from "../ducks/player";

function currentPlayingSoundSelector(
  state: RootState
): CurrentPlayingSoundType | undefined {
  return state.playerReducer.currentPlayingSound;
}

function audioSoundSelector(state: RootState): Audio.Sound | undefined {
  return state.playerReducer.currentPlayingSound?.audioSound;
}

function soundsSelector(state: RootState): Sound[] {
  return state.playerReducer.sounds;
}

type currentPlayingSoundSelectorType = ReturnType<
  typeof currentPlayingSoundSelector
>;
type audioSoundSelectorType = ReturnType<typeof audioSoundSelector>;
type soundsSelectorType = ReturnType<typeof soundsSelector>;

export function* unloadPrevious() {
  const audioSound = (yield select(
    audioSoundSelector
  )) as audioSoundSelectorType;
  if (audioSound) {
    try {
      yield call([audioSound, audioSound.stopAsync]);
      yield call([audioSound, audioSound.unloadAsync]);
    } catch (error) {
      console.log(error);
    }
  }
}

export function* initSound(action: any) {
  yield call(unloadPrevious);
  const audioSound = (yield call(
    [audio, audio.createAudioSound],
    action.payload
  )) as Audio.Sound;
  if (audioSound) {
    yield put(
      playerActions.setSound({
        id: action.payload.fileName,
        audioSound: audioSound,
      })
    );
  }
}

function progressEmitter(audioSound: Audio.Sound) {
  return eventChannel((emit) => {
    audioSound.setOnPlaybackStatusUpdate(emit);
    return () => {
      emit(END);
    };
  });
}

function* progressListener(channel: any) {
  const audioSound = (yield select(
    audioSoundSelector
  )) as audioSoundSelectorType;

  while (audioSound) {
    const data = yield take(channel);
    yield put(playerActions.setSoundProgress(data));
  }
}

function* trackProgress() {
  const audioSound = (yield select(
    audioSoundSelector
  )) as audioSoundSelectorType;
  if (!audioSound) return;
  const emitter = progressEmitter(audioSound);
  yield fork(progressListener, emitter);
}

export function* play() {
  const audioSound = (yield select(
    audioSoundSelector
  )) as audioSoundSelectorType;

  if (!audioSound) return;
  yield call([audioSound, audioSound.playAsync]);
}

export function* pause() {
  const audioSound = (yield select(
    audioSoundSelector
  )) as audioSoundSelectorType;

  if (!audioSound) return;
  yield call([audioSound, audioSound.pauseAsync]);
}

export function* back() {
  const currentPlayingSound = (yield select(
    currentPlayingSoundSelector
  )) as currentPlayingSoundSelectorType;
  const sounds = (yield select(soundsSelector)) as soundsSelectorType;
  const index = sounds.findIndex((p) => p.fileName === currentPlayingSound?.id);
  const audioSound = sounds[index - 1];

  if (!audioSound) return;
  yield put(playerActions.initSound(audioSound));
}

export function* next() {
  const currentPlayingSound = (yield select(
    currentPlayingSoundSelector
  )) as currentPlayingSoundSelectorType;
  const sounds = (yield select(soundsSelector)) as soundsSelectorType;
  const index = sounds.findIndex((p) => p.fileName === currentPlayingSound?.id);
  const audioSound = sounds[index + 1];

  if (!audioSound) return;
  yield put(playerActions.initSound(audioSound));
}

export function* setPosition(action: any) {
  const audioSound = (yield select(
    audioSoundSelector
  )) as audioSoundSelectorType;

  if (!audioSound) return;
  yield call([audioSound, audioSound.setPositionAsync], action.payload);
}

export function* onComplete(action: any) {
  const { didJustFinish } = action.payload;
  if (didJustFinish) {
    yield put(playerActions.next());
  }
}

export default function* playerSaga() {
  yield takeEvery(playerActions.initSound.type, initSound);
  yield takeEvery(playerActions.setSound.type, play);
  yield takeEvery(playerActions.setSound.type, trackProgress);
  yield takeEvery(playerActions.play.type, play);
  yield takeEvery(playerActions.pause.type, pause);
  yield takeEvery(playerActions.back.type, back);
  yield takeEvery(playerActions.next.type, next);
  yield takeEvery(playerActions.setPosition.type, setPosition);
  yield takeEvery(playerActions.setSoundProgress.type, onComplete);
}
