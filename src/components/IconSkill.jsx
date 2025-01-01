
import {RiJavascriptFill} from "react-icons/ri";
import {
  SiBootstrap,
  SiChakraui,
  SiCss3,
  SiExpo,
  SiFirebase,
  SiGoogleanalytics,
  SiGraphql,
  SiHtml5, SiJest, SiJetbrains,
  SiMongodb, SiMui,
  SiOpenai, SiPostman,
  SiPython, SiStyledcomponents, SiTailwindcss, SiGooglecloud
} from "react-icons/si";
import {FaAws, FaGitAlt, FaJava} from "react-icons/fa";
import {FaFacebookF, FaLinkedinIn, FaNode, FaReact} from "react-icons/fa6";
import {TbApiApp, TbBinaryTree, TbFileTypeSql} from "react-icons/tb";
import {MdDns} from "react-icons/md";
import {DiScrum} from "react-icons/di";
import {IoIosRocket} from "react-icons/io";
import {VscVscode} from "react-icons/vsc";
import { Avatar, Box, Flex, Image, Text } from '@mantine/core'

const IconSkill = ({ name }) => {
  return (
    <Flex direction="column" justify="center" align="center">
      <Avatar size="lg" gradient>{logos[name]}</Avatar>
      <Text style={{ fontSize: 14, fontWeight: 700 }}>{name}</Text>
    </Flex>
  )
}

const logos = {
  "JavaScript": <RiJavascriptFill size="36px" />,
  "Python": <SiPython size="36px" />,
  "Java": <FaJava size="36px" />,
  "OpenAI": <SiOpenai size="36px" />,
  "React": <FaReact size="36px" />,
  "React Native": <FaReact size="36px" />,
  "Expo": <SiExpo size="36px" />,
  "NodeJS": <FaNode size="36px" />,
  "MongoDB": <SiMongodb size="36px" />,
  "SQL": <TbFileTypeSql size="36px" />,
  "Firebase": <SiFirebase size="36px" />,
  "Amazon Web Services": <FaAws size="36px" />,
  "Google Cloud": <SiGooglecloud size="36px" />,
  "Google Analytics": <SiGoogleanalytics size="36px" />,
  "Network Configuration": <MdDns size="36px" />,
  "API Integration": <TbApiApp size="36px" />,
  "GraphQL": <SiGraphql size="36px" />,
  "Data Structures": <TbBinaryTree size="36px" />,
  "HTML": <SiHtml5 size="36px" />,
  "CSS": <SiCss3 size="36px" />,
  "Material UI": <SiMui size="36px" />,
  "ChakraUI": <SiChakraui size="36px" />,
  "Styled Components": <SiStyledcomponents size="36px" />,
  "Bootstrap": <SiBootstrap size="36px" />,
  "Tailwind CSS": <SiTailwindcss size="36px" />,
  "Git": <FaGitAlt size="36px" />,
  "Postman": <SiPostman size="36px" />,
  "Scrum": <DiScrum size="36px" />,
  "Testing": <SiJest size="36px" />,
  "App Deployment": <IoIosRocket size="36px" />,
  "VSCode": <VscVscode size="36px" />,
  "JetBrains": <SiJetbrains size="36px" />,
  "Facebook": <FaFacebookF size="36px" />,
  "LinkedIn": <FaLinkedinIn size="36px" />
}



export default IconSkill