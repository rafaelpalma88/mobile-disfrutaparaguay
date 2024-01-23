import { Center, Text, VStack } from 'native-base'

export function SignUp() {
  return (
    <VStack flex={1} bg="gray.900">
      <Center style={{ flex: 1, paddingLeft: 30, paddingRight: 30 }} my={24}>
        <Text color="gray.100" fontSize="sm" style={{ marginBottom: 40 }}>
          SignUp
        </Text>
      </Center>
    </VStack>
  )
}
