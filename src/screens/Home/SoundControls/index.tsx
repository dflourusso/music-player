import React from 'react'
import { useCallback } from 'react'
import BackButton from '../../../components/Buttons/BackButton'
import NextButton from '../../../components/Buttons/NextButton'
import PauseButton from '../../../components/Buttons/PauseButton'
import PlayButton from '../../../components/Buttons/PlayButton'
import { useAppDispatch } from '../../../hooks'
import { playerActions } from '../../../store/ducks/player'
import { Container, Content, ProgressText } from './styles'

const SoundControls: React.FC = () => {
  const dispatch = useAppDispatch()

  const pause = useCallback(() => {
    dispatch(playerActions.pause())
  }, [dispatch])

  const play = useCallback(() => {
    dispatch(playerActions.play())
  }, [dispatch])

  return (
    <Container>
      <ProgressText>02:36</ProgressText>
      <Content>
        <BackButton />
        <PlayButton onPress={play} />
        <PauseButton onPress={pause} />
        <NextButton />
      </Content>
    </Container>
  )
}

export default SoundControls
