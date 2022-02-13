import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Heebo",
    body: "Heebo",
  },
  styles: {
    global: {
      body: {
        article: {
          a: {
            color: "yellow.700",
            _hover: {
              color: "red.700",
            },
          },
          p: {
            marginTop: "1rem",
          },
          h1: {
            fontSize: ["2rem","3rem", "4rem"],
            marginBottom: "1rem",
          },
          h2: {
            fontSize: ["1.8rem","2rem", "3rem"],
            marginBottom: "1rem",
          },
          h3: { 
            fontSize: ["1.5rem","1.8rem", "2rem"],
            marginBottom: "1rem",
          },
        },
      },
    },
  },
});
