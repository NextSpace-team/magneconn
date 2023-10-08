import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1" mt={12}>not found | 404</Heading>
      <Text>the page you are looking for was not found</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" color="_yellow">
          homepage
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
