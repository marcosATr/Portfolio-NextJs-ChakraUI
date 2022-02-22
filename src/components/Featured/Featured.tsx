import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { ItemProps } from "../../pages";
import Works from "./Works";

export interface FeaturedProps {
  projects: ItemProps[];
}

export default function Featured(props:FeaturedProps) {
  return (
    <Container py="8" maxW="container.lg">
      <Flex justifyContent="space-between" align="center">
          <Box>
            <Heading fontSize="xl" fontWeight="normal">
              Latest Projects
            </Heading>
          </Box>
          <Box>
            <Link href="/projects"><a>View All</a></Link>
          </Box>
        </Flex>
      <Works projects={props.projects}/>
    </Container>
  );
}
