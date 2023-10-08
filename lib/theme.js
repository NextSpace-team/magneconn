import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: () => ({
    "html": {
      height: "100%",
      background: "_black_blue_gradient",
    },
    "body": {
      minHeight: "100%",
      bg: "transparent",
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "rgb(255, 209, 23)",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: () => ({
      color: "rgb(255, 209, 23)",
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: 'Raleway, sans-serif',
};

const colors = {
  grassTeal: "#FFD117",
  _yellow: "#FFD117",
  _red: "#FF5D17",
  _green: "#B9FF17",
  _black: "#041116",
  _black_blue_gradient: "linear-gradient(120deg, #041116 0%, #172C33 100%)",
  _yellow_green_gradient: "linear-gradient(90deg, #FFD117 0%, #B9FF17 100%)",
  _white: "#ffffff",

};

const config = {
  useSystemColorMode: true,
};


const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
