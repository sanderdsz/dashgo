import {Avatar, Box, Flex, Text} from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({showProfileData}: ProfileProps) {
  return (
    <>
      <Flex
        align='center'
      >
        {showProfileData && (
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
        )}
        <Avatar
          size='md'
          name='Sander Zuchinalli'
          src='https://github.com/sanderdsz.png'
        />
      </Flex>
    </>
  )
}
