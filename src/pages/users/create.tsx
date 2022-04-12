import {Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack} from "@chakra-ui/react";
import {Header} from "../../components/Header";
import {Sidebar} from "../../components/Sidebar";
import {Input} from "../../components/Form/Input";
import Link from 'next/link'
import {SubmitHandler, useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export default function CreateUser() {
  const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().required('E-mail is required').email('E-mail invalid'),
    password: yup.string().required('Password is required').min(6, 'At least 6 characters'),
    password_confirmation: yup.string().oneOf([
      null, yup.ref('password')
    ], 'Passwords must match')
  })

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserFormSchema)
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
  }

  return (
    <>
      <Box>
        <Header />
        <Flex
          w='100%'
          my='6'
          maxWidth={1480}
          mx='auto'
          px='6'
        >
          <Sidebar />
          <Box
            as='form'
            flex='1'
            borderRadius={8}
            bg='gray.800'
            p={['6', '8']}
            onSubmit={handleSubmit(handleCreateUser)}
          >
            <Heading
              size='lg'
              fontWeight='normal'
            >
              Create user
            </Heading>
            <Divider
              my='6'
              borderColor='gray.700'
            />
            <VStack spacing={['6', '8']}>
              <SimpleGrid
                minChildWidth='240px'
                spacing={['6', '8']}
                w='100%'
              >
                <Input
                  name='name'
                  label='Full name'
                  type='text'
                  error={errors.name}
                  {...register('name')}
                />
                <Input
                  name='email'
                  label='E-mail'
                  type='email'
                  error={errors.email}
                  {...register('email')}
                />
              </SimpleGrid>

              <SimpleGrid
                minChildWidth='240px'
                spacing={['6', '8']}
                w='100%'
              >
                <Input
                  name='password'
                  label='Password'
                  type='password'
                  error={errors.password}
                  {...register('password')}
                />
                <Input
                  name='password_confirmation'
                  label='Password confirmation'
                  type='password'
                  error={errors.password_confirmation}
                  {...register('password_confirmation')}
                />
              </SimpleGrid>
            </VStack>

            <Flex mt='8' justify='flex-end'>
              <HStack spacing='4'>
                <Link href='/users' passHref>
                  <Button as='a' colorScheme='whiteAlpha'>Cancel</Button>
                </Link>
                <Button
                  type='submit'
                  colorScheme='pink'
                  isLoading={isSubmitting}
                >
                  Save
                </Button>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  )
}
