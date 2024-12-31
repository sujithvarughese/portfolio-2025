import React from 'react'
import { AppShellHeader, Box, Burger, Flex, Image } from '@mantine/core'
import svImage from "../assets/images/profile/sv.jpeg"
const Header = ({ opened, toggle }) => {
  return (
    <AppShellHeader>
      <Flex justify="space-between" align="center" h="100%" mx="12" bg="black">
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <Image src={svImage} alt="SV" height={55} ></Image>
      </Flex>


    </AppShellHeader>
  )
}

export default Header