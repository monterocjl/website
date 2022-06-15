import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    bg: "#000",
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    body: `"Space Grotesk", sans-serif`,
    heading: `"Space Grotesk", sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: "brand.bg",
        color: "white",
      },
    },
  },
});

export default theme;
