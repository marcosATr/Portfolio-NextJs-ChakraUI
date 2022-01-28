import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { PagesProps } from "../../pages";
import RecentPosts from "./RecentPosts";



export interface RecentProps {
  item1: PagesProps;
  item2: PagesProps;
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
            <Link href="/">View All</Link>
          </Box>
        </Flex>
      </Container>
      <RecentPosts item1={props.item1} item2={props.item2}/>
    </Box>
  );
}
