import {Flex, Icon, Input, Text} from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'

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
          <Icon as={RiSearchLine} fontSize='20' />
        </Flex>
      </Flex>
    </>
  )
}