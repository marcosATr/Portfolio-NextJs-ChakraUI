import { Container, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { RecentProps } from "./Recent";

export default function RecentPosts(props: RecentProps) {
  return (
    <Container maxW="container.lg">
      <SimpleGrid columns={[1,2,2]} spacing={10} padding="0" my={4}>
        <VStack bg="white" p={6} boxShadow="sm" align="flex-start" spacing={5}>
          <Heading fontSize="2xl">{props.item1.title}</Heading>
          <Text>{props.item1.createdAt}</Text>
          <Text>{props.item1.excerpt}</Text>
        </VStack>
        <VStack bg="white" p={6} boxShadow="sm" align="flex-start" spacing={5}>
          <Heading fontSize="2xl">{props.item2.title}</Heading>
          <Text>{props.item2.createdAt}</Text>
          <Text>{props.item2.excerpt}</Text>
        </VStack>
      </SimpleGrid>
    </Container>
  );
}
