import {Button, Flex, FormLabel, Input, Stack} from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Flex
        w='100vw'
        h='100vh'
        alignItems='center'
        justifyContent='center'
      >
        <Flex
          as='form'
          width='100%'
          maxWidth={360}
          bg='gray.800'
          p='8'
          borderRadius={8}
          flexDir='column'
        >
          <Stack spacing='4'>
            <div>
              <FormLabel htmlFor='email'>e-mail</FormLabel>
              <Input
                id='email'
                name='email'
                type='email'
                focusBorderColor='pink.500'
                bgColor='gray.900'
                variant='filled'
                _hover={{
                  bgColor: 'gray.900'
                }}
                size='lg'
              />
            </div>
            <div>
              <FormLabel htmlFor='password'>password</FormLabel>
              <Input
                id='password'
                name='password'
                type='password'
                focusBorderColor='pink.500'
                bgColor='gray.900'
                variant='filled'
                _hover={{
                  bgColor: 'gray.900'
                }}
                size='lg'
              />
            </div>
          </Stack>
          <Button
            type='submit'
            mt='6'
            colorScheme='pink'
            size='lg'
          >
            Enter
          </Button>
        </Flex>
      </Flex>
    </>
  )
}
