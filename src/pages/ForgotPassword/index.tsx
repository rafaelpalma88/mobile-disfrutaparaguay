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
}

export function ForgotPassword() {
  const [show, setShow] = useState(false)

  const navigation = useNavigation<AppNavigatorRoutesProps & AuthNavigatorRoutesProps>()

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

  function handleSignIn({ email }: FormDataProps) {
    console.log('email -> ', email)
   
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="gray.900">
        <Center
          style={{
            flex: 1,
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
         <View marginBottom={30}>
            <Text color="white">Password recovery</Text>
            <Text color="white">Preencha o campo abaixo e iremos reenviar um link para atualização de senha no seu email de cadastro</Text>
          </View>

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              //  mudar cor cursor quando está digitando para facilitar para o usuário
              <Input
                placeholder="E-mail"
                onBlur={onBlur}
                onChangeText={(text) => onChange(text.toLowerCase())} 
                value={value}
                keyboardType="email-address"
              />
            )}
            name="email"
          />
          {errors.email && <Text color="red.500">This is required.</Text>}

          <Button
            variant="solid"
            text="Update password"
            onPress={handleSubmit(handleSignIn)}
          />
          <HStack width='100%' justifyContent="flex-end" marginTop={5}>
            <Text color="gray.300" onPress={() => navigation.navigate('signin')}>
              &lt; Voltar
            </Text>
          </HStack>
        </Center>
      </VStack>
    </ScrollView>
  )
}
