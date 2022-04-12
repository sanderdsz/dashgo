import {Flex, Icon, Input} from "@chakra-ui/react";
import {RiSearchLine} from "react-icons/ri";
import {useRef} from "react";

export function SearchBox() {
  const searchInputRef = useRef<HTMLInputElement>(null)

  return (
    <>
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
          ref={searchInputRef}
        />
        <Icon
          as={RiSearchLine}
          fontSize='20'
        />
      </Flex>
    </>
  )
}
