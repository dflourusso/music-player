import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { theme } from './src/constants/theme'
import Home from './src/screens/Home'
import { store } from './src/store'

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Home />
      </SafeAreaView>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background.primary,
  },
})
