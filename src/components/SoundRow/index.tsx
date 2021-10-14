import React from 'react'
import { View } from 'react-native'
import { Sound } from '../../constants/sounds'
import { Container, Cover, Subtitle, Title } from './styles'

type SoundRow = {
  value: Sound
  active: boolean
  onPress?: () => void
}

const SoundRow: React.FC<SoundRow> = ({ value, active, onPress = () => {} }) => {
  return (
    <Container onPress={onPress} active={active}>
      <Cover source={require('../../../assets/cover.jpeg')} />
      <View>
        <Title>{value.title}</Title>
        <Subtitle>{value.author}</Subtitle>
      </View>
    </Container>
  )
}

export default SoundRow
