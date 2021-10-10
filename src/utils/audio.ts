import { Audio } from 'expo-av'
import { Sound } from '../constants/sounds'

export async function createAudioSound(
  sound: Sound
): Promise<Audio.Sound | undefined> {
  await Audio.setIsEnabledAsync(true)
  try {
    const { sound: audioSound } = await Audio.Sound.createAsync(sound.file)
    return audioSound
  } catch (error) {
    console.log(error)
  }
}
