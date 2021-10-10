import React, { useCallback } from 'react'
import BackButton from '../../../components/Buttons/BackButton'
import NextButton from '../../../components/Buttons/NextButton'
import PauseButton from '../../../components/Buttons/PauseButton'
import PlayButton from '../../../components/Buttons/PlayButton'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { playerActions } from '../../../store/ducks/player'
import { millisToMinutesAndSeconds } from '../../../utils/time'
import { Container, Content, ProgressText } from './styles'

const SoundControls: React.FC = () => {
  const dispatch = useAppDispatch()
  const progress = useAppSelector((state) => state.playerReducer.soundProgress)

  const pause = useCallback(() => {
    dispatch(playerActions.pause())
  }, [dispatch])

  const play = useCallback(() => {
    dispatch(playerActions.play())
  }, [dispatch])

  const back = useCallback(() => {
    dispatch(playerActions.back())
  }, [dispatch])

  const next = useCallback(() => {
    dispatch(playerActions.next())
  }, [dispatch])

  return (
    <Container>
      <ProgressText>
        {millisToMinutesAndSeconds(progress?.positionMillis ?? 0)} -{' '}
        {millisToMinutesAndSeconds(progress?.durationMillis ?? 0)}
      </ProgressText>
      <Content>
        <BackButton onPress={back} />
        {progress?.isPlaying ? (
          <PauseButton onPress={pause} />
        ) : (
          <PlayButton onPress={play} />
        )}
        <NextButton onPress={next} />
      </Content>
    </Container>
  )
}

export default SoundControls
