import {NavSection} from "./NavSection";
import {NavLink} from "./NavLink";
import {RiContactsFill, RiDashboardLine, RiGitMergeLine, RiInputMethodLine} from "react-icons/ri";
import {Box, Stack} from "@chakra-ui/react";

export function SiderbarNav() {
  return (
    <>
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
    </>
  )
}
