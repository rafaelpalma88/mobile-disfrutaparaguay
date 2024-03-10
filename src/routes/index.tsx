import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'
import { useEffect, useState } from 'react';
import { Loading } from '@components/Loading';

export function Routes() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function checkToken() {
      try {
        const token = await AsyncStorage.getItem('@disfrutaparaguay-accesstoken');
        if (token) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Error checking token:', error);
      } finally {
        setIsLoading(false);
      }
    }

    checkToken();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
       {isLoggedIn ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}
