import { Box, IconButton } from "@chakra-ui/react";
import { IoLogoGithub } from "react-icons/io5";

const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontSize="sm"
      fontFamily="Raleway, sans-serif"
      fontWeight="regular"
      color="_yellow"
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      padding="1rem"
      zIndex="999"
    >
      <span>
        &copy;Magneconn | Next Space Lab | {new Date().getFullYear()}
      </span>
      <IconButton
        as="a"
        href="https://github.com/kenjitheman/projx.c"
        target="_blank"
        variant="ghost"
        aria-label="GitHub"
        icon={<IoLogoGithub />}
        color="_yellow"
        fontSize="2.4rem"
        position="absolute"
        bottom="0.5rem"
        right="0.5rem"
      />
    </Box>
  );
};

export default Footer;
