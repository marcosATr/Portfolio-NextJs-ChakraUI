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
        },
      },
    },
  },
});
