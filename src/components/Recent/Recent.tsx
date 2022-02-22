import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { ItemProps } from "../../pages";
import RecentPosts from "./RecentPosts";



export interface RecentProps {
  posts: ItemProps[];
}
export default function Recent(props:RecentProps) {
  return (
    <Box bg="gray.100" py={4}>
      <Container py="4" maxW="container.lg">
        <Flex justifyContent="space-between" align="center">
          <Box>
            <Heading fontSize="xl" fontWeight="normal">
              Recent Posts
            </Heading>
          </Box>
          <Box>
            <Link href="/blog">View All</Link>
          </Box>
        </Flex>
      </Container>
      <RecentPosts posts={props.posts}/>
    </Box>
  );
}
