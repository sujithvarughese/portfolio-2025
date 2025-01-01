import { RiJavascriptFill } from "react-icons/ri";
import { FaReact, FaNode, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { TbApiApp, TbBinaryTree, TbFileTypeSql } from 'react-icons/tb'
import { SiHtml5, SiMui, SiCss3, SiBootstrap, SiMongodb, SiOpenai, SiChakraui, SiStyledcomponents, SiExpo, SiFirebase, SiGraphql, SiJest, SiPostman, SiTailwindcss, SiJetbrains, SiGoogleanalytics, SiPython } from 'react-icons/si'
import { DiScrum } from 'react-icons/di'
import { MdDns } from 'react-icons/md'
import { FaAws, FaGitAlt, FaJava } from 'react-icons/fa'
import { IoIosRocket } from 'react-icons/io'
import { VscVscode } from 'react-icons/vsc'
import { Badge, Flex } from '@mantine/core'


const IconPill = ({ name, variant, styles }) => {
  return (
    <Badge pill variant="gradient" style={{ margin: "2px" }}>
      <Flex
        direction="horizontal"
        style={{
          padding: "2px",
          fontSize: "14px",
          ...styles
      }}>
        <span>{name}</span>
        {logos[name]}
      </Flex>
    </Badge>
  )
}

export default IconPill

export const logos = {
  "JavaScript": <RiJavascriptFill />,
  "Python": <SiPython />,
  "Java": <FaJava />,
  "OpenAI": <SiOpenai />,
  "React": <FaReact />,
  "React Native": <FaReact />,
  "Expo": <SiExpo />,
  "NodeJS": <FaNode />,
  "MongoDB": <SiMongodb />,
  "SQL": <TbFileTypeSql />,
  "Firebase": <SiFirebase />,
  "AWS": <FaAws />,
  "Google Analytics": <SiGoogleanalytics />,
  "DNS & Networks": <MdDns />,
  "APIs": <TbApiApp />,
  "GraphQL": <SiGraphql />,
  "Data Structures": <TbBinaryTree />,
  "HTML": <SiHtml5 />,
  "CSS": <SiCss3 />,
  "Material UI": <SiMui />,
  "ChakraUI": <SiChakraui />,
  "Styled Components": <SiStyledcomponents />,
  "Bootstrap": <SiBootstrap />,
  "Tailwind CSS": <SiTailwindcss />,
  "Git": <FaGitAlt />,
  "Postman": <SiPostman />,
  "Scrum": <DiScrum />,
  "Testing": <SiJest />,
  "Deployment": <IoIosRocket />,
  "VSCode": <VscVscode />,
  "JetBrains": <SiJetbrains />,
  "Facebook": <FaFacebookF />,
  "LinkedIn": <FaLinkedinIn />
}

