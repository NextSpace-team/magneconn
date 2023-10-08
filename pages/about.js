import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const About = () => (
  <Layout title="Magneconn | About Us">
    <Container>
      <Heading as="h1" fontSize={35} mt={12} mb={12} textAlign={"center"} color={"_yellow"}>
          Welcome to our little project!
      </Heading>
      <Section delay={0.1} mb={7} >
        <Paragraph >
          Our project provides a web solution which helps to determine the impact of magnetic reconnection on humanity. Usage of our own constant K for calculation helps us optimise data processing speed. Program itself is built around our constant K, and its main goal is to provide an easy way to analyse data.
        </Paragraph>
      </Section>
      <Section delay={0.2} mb={12} >
        <Paragraph>

          We use Go coding language for program to run optimally. Data after processing provides an easy way to analyse information received in convenient graphs.
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default About
export { getServerSideProps } from '../components/chakra'
