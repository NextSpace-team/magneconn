import { forwardRef } from "react";
import Logo from "./logo";
import NextLink from "next/link";
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const LinkItem = ({ href, path, target, children, ...props }) => {
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      color="_yellow"
      fontFamily='Ubuntu, sans-serif'
      fontWeight="regular"
      fontSize="2xl"
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
));

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg="_black"
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center">
          <Heading as="h1" size="2xl" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 3, md: 0 }}
          ml={"25%"}
        >

          <LinkItem href="https://github.com/kenjitheman/wdcg_api" path={path}>
            Get API
          </LinkItem>


          <LinkItem href="/about" path={path}>
            About
          </LinkItem>

          <LinkItem href="/our-team" path={path}>
            Our Team
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="https://github.com/kenjitheman/wdcg_api" ml={1}>
                  Get API
                </MenuItem>
                <MenuItem as={MenuLink} href="/about" ml={1} >
                  About
                </MenuItem>
                <MenuItem as={MenuLink} href="/our-team" ml={1} >
                  Our Team
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
