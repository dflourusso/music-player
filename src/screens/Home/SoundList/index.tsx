import React, { useCallback, useEffect } from 'react'
import { FlatList } from 'react-native'
import SoundRow from '../../../components/SoundRow'
import SoundCollection, { Sound } from '../../../constants/sounds'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { playerActions } from '../../../store/ducks/player'

export default function Soundlist() {
  const dispatch = useAppDispatch()
  const sounds = useAppSelector((state) => state.playerReducer.sounds)
  const currentPlayingSoundId = useAppSelector(
    (state) => state.playerReducer.currentPlayingSound?.id
  )

  useEffect(() => {
    dispatch(playerActions.setSounds(SoundCollection))
  }, [])

  const onPressSound = useCallback(async (sound: Sound) => {
    dispatch(playerActions.initSound(sound))
  }, [])

  return (
    <FlatList
      contentContainerStyle={{ paddingVertical: 32 }}
      data={sounds}
      keyExtractor={(p) => p.fileName}
      renderItem={({ item }) => (
        <SoundRow
          value={item}
          active={item.fileName === currentPlayingSoundId}
          onPress={() => {
            onPressSound(item)
          }}
        />
      )}
    />
  )
}
