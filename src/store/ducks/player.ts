import { createAction, createReducer } from "@reduxjs/toolkit";
import { Audio, AVPlaybackStatus } from "expo-av";
import { PlaybackStatus } from "../../constants/sound";
import { Sound } from "../../constants/sounds";

export type CurrentPlayingSoundType = {
  id: Sound["fileName"];
  audioSound: Audio.Sound;
};

interface PlayerState {
  sounds: Sound[];
  currentPlayingSound?: CurrentPlayingSoundType;
  soundProgress?: PlaybackStatus;
}

const setSounds = createAction<Sound[]>("sounds/setSounds");
const initSound = createAction<Sound>("sounds/initSound");
const setSound = createAction<CurrentPlayingSoundType>("sounds/setSound");
const setSoundProgress = createAction<AVPlaybackStatus>(
  "sounds/setSoundProgress"
);
const play = createAction<void>("sounds/play");
const pause = createAction<void>("sounds/pause");
const back = createAction<void>("sounds/back");
const next = createAction<void>("sounds/next");
const setPosition = createAction<number>("sounds/setPosition");

const random = createAction<void>("sounds/random");
const replay = createAction<void>("sounds/replay");

export const playerActions = {
  setSounds,
  initSound,
  setSound,
  setSoundProgress,
  play,
  pause,
  back,
  next,
  setPosition,
  random,
  replay,
};

const initialState: PlayerState = {
  sounds: [],
  currentPlayingSound: undefined,
  soundProgress: undefined,
};

export const playerReducer = createReducer(initialState, {
  [setSounds.type]: (state, { payload }) => ({
    ...state,
    sounds: payload,
  }),
  [setSound.type]: (state, { payload }) => {
    return {
      ...state,
      currentPlayingSound: payload,
    };
  },
  [setSoundProgress.type]: (state, { payload }) => {
    return {
      ...state,
      soundProgress: payload,
    };
  },
});
