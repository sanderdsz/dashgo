import {Flex, Icon, Input, HStack, Text, Box, Avatar} from '@chakra-ui/react'
import {RiNotificationLine, RiSearchLine, RiUserAddLine} from 'react-icons/ri'

export function Header () {
  return (
    <>
      <Flex
        w='100%'
        as='header'
        maxWidth={1480}
        h='20'
        mx='auto'
        mt='4'
        px='6'
        align='center'
      >
        <Text
          fontSize='3xl'
          fontWeight='bold'
          w='64'
          letterSpacing='tight'
        >dashgo<Text ml='1' as='span' color='pink.500'>.</Text>
        </Text>
        <Flex
          as='label'
          flex='1'
          py='4'
          px='8'
          ml='6'
          maxWidth={400}
          alignSelf='center'
          position='relative'
          bg='gray.800'
          borderRadius='full'
        >
          <Input
            color='gray.50'
            variant='unstyled'
            mr='4'
            px='4'
            placeholder='Search on platform'
            _placeholder={{color: 'gray.50'}}
          />
          <Icon
            as={RiSearchLine}
            fontSize='20'
          />
        </Flex>
        <Flex
          align='center'
          ml='auto'
        >
          <HStack
            spacing='4'
            mx='8'
            pr='8'
            py='1'
            color='gray.300'
            borderRightWidth={1}
            borderColor='gray.700'
          >
            <Icon
              as={RiNotificationLine}
              fontSize='20'
            />
            <Icon
              as={RiUserAddLine}
              fontSize='20'
            />
          </HStack>
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
        </Flex>
      </Flex>
    </>
  )
}