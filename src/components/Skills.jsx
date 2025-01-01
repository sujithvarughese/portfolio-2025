import {softwareSkills, fullStackSkills, deploymentSkills } from "../data/data.js"
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { RiStackLine } from "react-icons/ri";
import { Box, Divider, Flex, Text } from '@mantine/core'




const Skills = () => {

  return (
    <Box>
      <Flex direction={{ base: "column", md: "row" }} my={12} mx={2} gap={16} justify="space-between">

        <Divider size="xl" color="blue" orientation="vertical" />
        <Divider size="xl" color="blue" />

        <Box>
          <Flex flexDirection="row" alignItems="center" justifyContent="center">
            <Box><HiOutlineComputerDesktop size={56} /></Box>
            <Text variant="h4" fontWeight={700}>Programmer.</Text>
          </Flex>
          <Box padding={4} ><Text variant="body1">{softwareSkills}</Text></Box>
        </Box>

        <Divider size="xl" color="blue" orientation="vertical" />
        <Divider size="xl" color="blue" />

        <Box>
          <Flex flexDirection="row" alignItems="center" justifyContent="center">
            <Box ><RiStackLine size={56} /></Box>
            <Text variant="h4" fontWeight={700}>Developer.</Text>
          </Flex>
          <Box padding={4} ><Text variant="body1">{fullStackSkills}</Text></Box>
        </Box>

        <Divider size="xl" color="blue" orientation="vertical" />
        <Divider size="xl" color="blue" />

        <Box>
          <Flex flexDirection="row" alignItems="center" justifyContent="center">
            <Box ><AiOutlineDeploymentUnit size={56}/></Box>
            <Text variant="h4" fontWeight={700}>Engineer.</Text>
          </Flex>
          <Box padding={4} ><Text variant="body1">{deploymentSkills}</Text></Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default Skills