import {Box, Stack} from "@chakra-ui/react";
import {PaginationItem} from "./PaginationItem";

export function Pagination() {
  return (
    <>
      <Stack
        direction={['column', 'row']}
        mt='8'
        justify='space-between'
        align='center'
        spacing='6'
      >
        <Box>
          <strong>0</strong> - <strong>10</strong> of <strong>100</strong>
        </Box>
        <Stack direction='row'>
          <PaginationItem
            number={1}
            isCurrent
          />
          <PaginationItem
            number={2}
          />
          <PaginationItem
            number={3}
          />
        </Stack>
      </Stack>
    </>
  )
}
