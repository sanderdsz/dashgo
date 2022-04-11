import {Avatar, Box, Flex, Text} from "@chakra-ui/react";

export function Profile() {
  return (
    <>
      <Flex
        align='center'
      >
        <Box>
          <Text
            mr='4'
            textAlign='right'
          >
            Sander
          </Text>
          <Text
            color='gray.300'
            fontSize='small'
          >
            sanderdsz@gmail.com
          </Text>
        </Box>
        <Avatar
          size='md'
          name='Sander Zuchinalli'
          src='https://github.com/sanderdsz.png'
        />
      </Flex>
    </>
  )
}
