import React, { useCallback } from 'react'
import { FlatList } from 'react-native'
import SoundRow from '../../../components/SoundRow'
import sounds, { Sound } from '../../../constants/sounds'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { playerActions } from '../../../store/ducks/player'

export default function Soundlist() {
  const dispatch = useAppDispatch()
  const currentPlayingSoundId = useAppSelector(
    (state) => state.playerReducer.currentPlayingSound?.id
  )

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
