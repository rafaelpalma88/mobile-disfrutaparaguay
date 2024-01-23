import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base'

interface Props extends IButtonProps {
  text: string
  variant?: 'solid' | 'outline'
}

export function Button({ text, variant = 'solid', ...rest }: Props) {
  return (
    <NativeBaseButton
      w="full"
      // bg={variant === 'outline' ? 'transparent' : 'green.700'}
      bg={variant === 'outline' ? 'transparent' : '#0038A8'}
      borderWidth={variant === 'outline' ? 1 : 0}
      borderColor="#0038A8"
      rounded="sm"
      testID="button"
      {...rest}
    >
      <Text
        // color={variant === 'outline' ? '#0038A8' : 'white'}
        color={variant === 'outline' ? 'white' : 'white'}
        fontFamily="heading"
        fontSize="sm"
      >
        {text}
      </Text>
    </NativeBaseButton>
  )
}
