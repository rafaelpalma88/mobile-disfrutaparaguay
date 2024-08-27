import { useState } from 'react'
import { Input } from '@components/Input'
import {
  Center,
  Text,
  VStack,
  Pressable,
  Icon,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  View,
  Box,
  Flex,
  HStack,
} from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'
import LogoDisfrutaParaguay from '@assets/logoDisfrutaParaguay.svg'
import { useForm, Controller } from 'react-hook-form'
import { AuthNavigatorRoutesProps } from 'src/routes/auth.routes'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppNavigatorRoutesProps } from 'src/routes/app.routes'

type FormDataProps = {
  email: string
  password: string
}

export function SignIn() {
  const [show, setShow] = useState(false)

  const navigation = useNavigation<
    AppNavigatorRoutesProps & AuthNavigatorRoutesProps
  >()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function handleSignIn({ email, password }: FormDataProps) {
    console.log('email -> ', email)
    console.log('password -> ', password)
    if (
      email === 'rafaelcostapalma@protonmail.com' &&
      password === 'teste123'
    ) {
      AsyncStorage.setItem('@disfrutaparaguay-accesstoken', 'token-exemplo')
      navigation.navigate('events')
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg='gray.900'>
        <Center
          style={{
            flex: 1,
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          <View marginBottom={30}>
            <LogoDisfrutaParaguay
              width={300} // Largura personalizada do SVG
              height={100} // Altura personalizada do SVG
            />
          </View>

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              //  mudar cor cursor quando está digitando para facilitar para o usuário
              <Input
                placeholder='E-mail'
                onBlur={onBlur}
                onChangeText={(text) => onChange(text.toLowerCase())}
                value={value}
                keyboardType='email-address'
                caretHidden
              />
            )}
            name='email'
          />
          {errors.email && <Text color='red.500'>This is required.</Text>}

          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                secureTextEntry={!show}
                autoCapitalize='none'
                type={show ? 'text' : 'password'}
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Icon
                      as={
                        <MaterialIcons
                          name={show ? 'visibility' : 'visibility-off'}
                        />
                      }
                      size={5}
                      mr='3'
                      color='muted.400'
                    />
                  </Pressable>
                }
                placeholder='Password'
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name='password'
          />
          <HStack width='100%' justifyContent='flex-end' marginBottom={10}>
            <Text
              color='gray.300'
              onPress={() => navigation.navigate('forgotpassword')}
            >
              Forgot password?
            </Text>
          </HStack>
          <Button
            variant='solid'
            text='Entrar'
            onPress={handleSubmit(handleSignIn)}
          />
          {/* By clicking the start button, I agree to Kemi’s Terms of Service , Privacy Policy. */}
        </Center>

        <Center
          style={{
            paddingTop: 30,
            paddingRight: 30,
            paddingBottom: 50,
            paddingLeft: 30,
          }}
        >
          <Text color='white' style={{ marginTop: 10, marginBottom: 10 }}>
            Still don't have access?
          </Text>
          <Button
            variant='outline'
            text='Solicite acesso'
            onPress={() => {
              navigation.navigate('signup')
            }}
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}
