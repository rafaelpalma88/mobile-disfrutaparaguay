import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

function useCustomTheme() {
  const [theme, setTheme] = useState<'LIGHT' | 'DARK'>('LIGHT')

  useEffect(() => {
    getThemeChoosed()
  }, [])

  const obtainTheme = () => {
    return theme
  }

  const changeTheme = async () => {
    if (theme === 'LIGHT') {
      setTheme('DARK')
    } else if (theme === 'DARK') {
      setTheme('LIGHT')
    }
    await salveThemeChoosed()
  }

  async function salveThemeChoosed() {
    try {
      await AsyncStorage.setItem('@descsp', JSON.stringify(theme))
      console.log('JSON.stringify(theme)', JSON.stringify(theme))
    } catch (error) {
      console.error('Erro ao salvar no AsyncStorage: ', error)
    }
  }

  async function getThemeChoosed() {
    try {
      const getAsyncStorageTheme = await AsyncStorage.getItem('@descsp')
      console.log('getAsyncStorageTheme', getAsyncStorageTheme)

      const parsedValue = JSON.parse(getAsyncStorageTheme || '')
      console.log('parsedValue', parsedValue)

      if (parsedValue === 'LIGHT' || parsedValue === 'DARK') {
        setTheme(parsedValue)
      }
    } catch (error) {
      console.error('Erro ao obter no AsyncStorage: ', error)
    }
  }

  return { obtainTheme, changeTheme }
}

export default useCustomTheme
