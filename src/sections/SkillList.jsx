
import { skills } from '../data/data.js'
import IconSkill from '../components/IconSkill.jsx'

import { motion } from 'framer-motion'
import { Container, Grid, Text } from '@mantine/core'

const SkillList = () => {
  return (

      <Container
        component={motion.section}
        sx={{ display: { sm: "none"} }}
        initial={{ y: 200 }}
        whileInView={{ y: 0}}
        transition={{ ease: "easeInOut" }}
      >
        <Text variant="h4" textAlign="center" sx={{ marginBottom: 12 }}>Skills</Text>
        <Grid>
          {skills.map(skill =>
            <Grid.Col key={skill} span={3}>
              <IconSkill name={skill} />
            </Grid.Col>)}
        </Grid>
      </Container>


  )
}

export default SkillList