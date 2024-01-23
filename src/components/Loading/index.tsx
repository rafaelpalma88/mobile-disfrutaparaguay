import { Center, Spinner, VStack } from 'native-base'

export function Loading() {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Center flex={1} my={24}>
        <Spinner color="white" size="lg" />
      </Center>
    </VStack>
  )
}
