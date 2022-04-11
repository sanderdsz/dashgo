import {Text} from "@chakra-ui/react";

export function Logo() {
  return (
    <>
      <Text
        fontSize='3xl'
        fontWeight='bold'
        w='64'
        letterSpacing='tight'
      >dashgo<Text ml='1' as='span' color='pink.500'>.</Text>
      </Text>
    </>
  )
}
