import { SignIn } from '@pages/SignIn'
import { SignUp } from '@pages/SignUp'
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>()

type AuthRoutes = {
  signin: undefined
  signup: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signin" component={SignIn} />
      <Screen name="signup" component={SignUp} />
    </Navigator>
  )
}
