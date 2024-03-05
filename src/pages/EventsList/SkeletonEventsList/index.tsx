import { Skeleton, VStack } from "native-base";

export function SkeletonEventsList() {
  return (
    <VStack pt={6}>
      {/* Aprimorar este Skeleton, deixar ele mais bonito */}
      <Skeleton
        h={100}
        rounded="md"
        startColor="gray.500"
        endColor="gray.400"
        marginBottom={6}
      />
      <Skeleton
        h={100}
        rounded="md"
        startColor="gray.500"
        endColor="gray.400"
        marginBottom={6}
      />
      <Skeleton
        h={100}
        rounded="md"
        startColor="gray.500"
        endColor="gray.400"
        marginBottom={6}
      />
    </VStack>
  )
}