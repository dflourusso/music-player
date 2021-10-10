export type Sound = {
  fileName: string
  title: string
  author: string
  file: any
}

const sounds: Sound[] = [
  {
    fileName: 'blank.mp3',
    title: 'Blank',
    author: 'Test',
    file: require('../../assets/sounds/blank.mp3'),
  },
  {
    fileName: 'cloud_9.mp3',
    title: 'Cloud 9',
    author: 'Test',
    file: require('../../assets/sounds/cloud_9.mp3'),
  },
  {
    fileName: 'feel_good.mp3',
    title: 'Feel good',
    author: 'Test',
    file: require('../../assets/sounds/feel_good.mp3'),
  },
  {
    fileName: 'heroes_tonight.mp3',
    title: 'Heroes Tonight',
    author: 'Test',
    file: require('../../assets/sounds/heroes_tonight.mp3'),
  },
  {
    fileName: 'hope.mp3',
    title: 'Hope',
    author: 'Test',
    file: require('../../assets/sounds/hope.mp3'),
  },
  {
    fileName: 'my_heart.mp3',
    title: 'My Heart',
    author: 'Test',
    file: require('../../assets/sounds/my_heart.mp3'),
  },
  {
    fileName: 'on_e_on.mp3',
    title: 'On & On',
    author: 'Test',
    file: require('../../assets/sounds/on_e_on.mp3'),
  },
  {
    fileName: 'sky_high.mp3',
    title: 'Sky High',
    author: 'Test',
    file: require('../../assets/sounds/sky_high.mp3'),
  },
]
export default sounds
