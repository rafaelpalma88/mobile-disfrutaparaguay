import { Linking } from 'react-native'

export function openGoogleMaps(latitude: string, longitude: string) {
  const url = `geo:${latitude},${longitude}`
  Linking.openURL(url)
}
