import 'styled-components'
import light from '../themes/light'
import dark from '../themes/dark'

declare module 'styled-components' {
  type ThemeType = typeof light

  export interface DefaultTheme extends ThemeType {}
}
