import { Container, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { RecentProps } from "./Recent";
import ReactHtmlParser from "react-html-parser";

export default function RecentPosts(props: RecentProps) {
  return (
    <Container maxW="container.lg">
      <SimpleGrid columns={[1, 2, 2]} spacing={10} padding="0" my={4}>
        <Link href={`/blog/${props.item1.slug}/${props.item1.id}`}>
          <a>
            <VStack bg="white" p={6} boxShadow="sm" align="flex-start" spacing={5} minH='100%'>
              <Heading fontSize="2xl">{props.item1.title}</Heading>
              <Text>{props.item1.createdAt}</Text>
              <Text>{ReactHtmlParser(props.item1.excerpt)}</Text>
            </VStack>
          </a>
        </Link>
        <Link href={`/blog/${props.item2.slug}/${props.item2.id}`}>
          <a>
            <VStack bg="white" p={6} boxShadow="sm" align="flex-start" spacing={5} minH='100%'>
              <Heading fontSize="2xl">{props.item2.title}</Heading>
              <Text>{props.item2.createdAt}</Text>
              <Text>{ReactHtmlParser(props.item2.excerpt)}</Text>
            </VStack>
          </a>
        </Link>
      </SimpleGrid>
    </Container>
  );
}
