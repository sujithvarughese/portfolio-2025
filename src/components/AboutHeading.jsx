import {Divider, Flex, Text} from "@mantine/core";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { RiStackLine } from "react-icons/ri";
import {deploymentSkills, fullStackSkills, softwareSkills} from "../data/data.js";

const AboutHeading = () => {
  return (
    <Flex direction={{ base: "column", sm: "row"}} maw={1000} gap={12}>

      <Flex direction="column" align="center" justify="center" w="100%" gap={16}>
        <Flex direction="row" align="center" justify="center">
          <HiOutlineComputerDesktop size={56} />
          <Text fz={24} fw={700}>Programmer.</Text>
        </Flex>
        <Text fz={14}>{softwareSkills}</Text>
      </Flex>

      <Divider size="xl" orientation="vertical"/>
      <Divider size="xl" />

      <Flex direction="column" align="center" justify="center" w="100%" gap={16}>
        <Flex direction="row" align="center" justify="center">
          <RiStackLine size={56} />
          <Text fz={24} fw={700}>Developer.</Text>
        </Flex>
        <Text fz={14}>{fullStackSkills}</Text>
      </Flex>

      <Divider size="xl" orientation="vertical"/>
      <Divider size="xl" />

      <Flex direction="column" align="center" justify="center" w="100%" gap={16}>
        <Flex direction="row" align="center" justify="center">
          <AiOutlineDeploymentUnit size={56}/>
          <Text fz={24} fw={700}>Engineer.</Text>
        </Flex>
        <Text fz={14}>{deploymentSkills}</Text>
      </Flex>


    </Flex>
  );
};

export default AboutHeading;