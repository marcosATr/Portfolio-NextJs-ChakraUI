import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function Recent() {
  return (
    <Box bg="gray.100">
      <Container py="8" maxW="container.lg">
        {/* >> 1a linha com conteudo horizontal*/}
        <Flex justifyContent="space-between" align="center">
          <Box>
            <Heading fontSize='xl' fontWeight='normal'>Recent Posts</Heading>
          </Box>
          <Box>
            <Link href="/">View All</Link>
          </Box>
        </Flex>
        {/* >> 2a linha com duas colunas verticais*/}
        <Flex></Flex>
      </Container>
    </Box>
  );
}
