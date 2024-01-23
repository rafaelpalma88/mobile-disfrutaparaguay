import styled from 'styled-components/native'
import { Spinner } from 'native-base'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const LoadIndicator = styled(Spinner).attrs((props) => ({}))``
