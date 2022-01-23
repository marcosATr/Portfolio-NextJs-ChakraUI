import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import RecentPosts from "./RecentPosts";

export default function Recent() {
  return (
    <Box bg="gray.100" py={4}>
      <Container py="4" maxW="container.lg">
        {/* >> 1a linha com conteudo horizontal*/}
        <Flex justifyContent="space-between" align="center">
          <Box>
            <Heading fontSize="xl" fontWeight="normal">
              Recent Posts
            </Heading>
          </Box>
          <Box>
            <Link href="/">View All</Link>
          </Box>
        </Flex>
        {/* >> 2a linha com duas colunas verticais */}
      </Container>
      <RecentPosts />
    </Box>
  );
}
