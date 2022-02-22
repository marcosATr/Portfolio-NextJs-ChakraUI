import { Container, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import slugify from "slugify";
import { RecentProps } from "./Recent";
// import ReactHtmlParser from "react-html-parser";

export default function RecentPosts({ posts }: RecentProps) {
  return (
    <Container maxW="container.lg">
      <SimpleGrid columns={[1, 2, 2]} spacing={10} padding="0" my={4}>
        {posts.map((post) => {
          return (
            <Link href={`/blog/${slugify(post.metadata.slug)}`} key={post.metadata.title}>
              <a>
                <VStack bg="white" p={6} boxShadow="sm" align="flex-start" spacing={5} minH="100%">
                  <Heading fontSize="2xl">{post.metadata.title}</Heading>
                  <Text>{post.metadata.date}</Text>
                  <Text>{post.metadata.description}</Text>
                </VStack>
              </a>
            </Link>
          );
        })}
      </SimpleGrid>
    </Container>
  );
}
