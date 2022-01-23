import { Container, Flex, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";

export default function RecentPosts() {
  return (
    <Container maxW="container.lg">
      <SimpleGrid columns={2} spacing={10} padding="0" my={4}>
        <VStack bg="white" p={6} boxShadow="sm" align="flex-start" spacing={5}>
          <Heading fontSize="2xl">Making a design system from scratch</Heading>
          <Text>04 Março | NextJs, React</Text>
          <Text>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text>
        </VStack>
        <VStack bg="white" p={6} boxShadow="sm" align="flex-start" spacing={5}>
          <Heading fontSize="2xl">Creating pixel perfect icons in figma.</Heading>
          <Text>04 Março | NextJs, React</Text>
          <Text>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text>
        </VStack>
      </SimpleGrid>
    </Container>
  );
}
