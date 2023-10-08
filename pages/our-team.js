import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const OurTeam = () => (
  <Layout title="Magneconn | Our Team">
    <Container>
      <Heading as="h1" fontSize={35} mt={12} mb={12} textAlign={"center"} color={"_yellow"}>
        Abous us
      </Heading>
      <Section delay={0.1} mb={7} >
        <Paragraph>
          Welcome to our team page!
        </Paragraph>
      </Section>
      <Section delay={0.2} mb={12} >
        <Paragraph color={"white"}>
          Thanks for chenking us out. We are <span style={{ color: "yellow" }}>Next Space Lab</span>! A small startup and hackaton team from Ukraine. We are spread all around the globe but still gathering every so often to do something cool.
        </Paragraph>
        <br />
        <Paragraph color={"white"}>
          Some more text about us.
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default OurTeam
export { getServerSideProps } from '../components/chakra'
