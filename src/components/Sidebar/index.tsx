import {Box, Stack} from "@chakra-ui/react";
import {RiContactsFill, RiDashboardLine, RiGitMergeLine, RiInputMethodLine} from "react-icons/ri";
import {NavSection} from "./NavSection";
import {NavLink} from "./NavLink";

export function Sidebar() {
  return (
    <>
      <Box
        as='aside'
        w='64'
        mr='8'
      >
        <Stack
          spacing='12'
          align='flex-start'
        >
          <NavSection title={'HOME'}>
            <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
            <NavLink icon={RiContactsFill}>Users</NavLink>
          </NavSection>
          <Box>
            <NavSection title={'AUTOMATIZATION'}>
              <NavLink icon={RiInputMethodLine}>Forms</NavLink>
              <NavLink icon={RiGitMergeLine}>Automatization</NavLink>
            </NavSection>
          </Box>
        </Stack>
      </Box>
    </>
  )
}
