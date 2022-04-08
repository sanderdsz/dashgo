import {Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr} from "@chakra-ui/react";
import {Header} from "../../components/Header";
import {Sidebar} from "../../components/Sidebar";
import {RiAddLine, RiPencilLine} from "react-icons/all";

export default function UserList () {
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
            flex='1'
            borderRadius={8}
            bg='gray.800'
            p='8'
          >
            <Flex
              mb='8'
              justify='space-between'
              align='center'
            >
              <Heading
                size='lg'
                fontWeight='normal'
              >
                Users
              </Heading>
              <Button
                as='a'
                size='sm'
                fontSize='sm'
                colorScheme='pink'
                leftIcon={<Icon as={RiAddLine} fontSize='20'/>}
              >
                Create new user
              </Button>
            </Flex>
            <Table
              colorScheme='whiteAlpha'
            >
              <Thead>
                <Tr>
                  <Th
                    px='6'
                    color='gray.300'
                    width='8'
                  >
                    <Checkbox colorScheme='pink' />
                  </Th>
                  <Th>User</Th>
                  <Th>Registration date</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td px='6'>
                    <Checkbox colorScheme='pink' />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight='bold'>Sander Zuchinalli</Text>
                      <Text
                        fontSize='sm'
                        color='gray.300'
                      >
                        sanderdsz@gmail.com
                      </Text>
                    </Box>
                  </Td>
                  <Td>
                    April 04, 2021
                  </Td>
                  <Td>
                    <Button
                      as='a'
                      size='sm'
                      fontSize='sm'
                      colorScheme='purple'
                      leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                    >
                      Edit
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Flex>
      </Box>
    </>
  )
}