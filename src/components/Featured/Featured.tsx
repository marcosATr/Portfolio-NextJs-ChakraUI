import { Box, Container, Heading } from "@chakra-ui/react";
import Works from "./Works";

export default function Featured() {
  return (
    <Container py="8" maxW="container.lg">
      <Box>
        <Heading fontSize="xl" fontWeight="normal">
          Featured Work
        </Heading>
      </Box>
      <Works/>
    </Container>
  );
}
