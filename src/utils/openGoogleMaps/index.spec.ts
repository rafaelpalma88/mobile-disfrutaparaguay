import { Linking } from 'react-native'
import { openGoogleMaps } from '.'

describe('openGoogleMaps function', () => {
  it('should generate correct URL and call Linking.openURL', () => {
    const latitude = '40.7128'
    const longitude = '-74.0060'
    const expectedURL = `geo:${latitude},${longitude}`

    openGoogleMaps(latitude, longitude)

    expect(Linking.openURL).toHaveBeenCalledWith(expectedURL)
  })
})
