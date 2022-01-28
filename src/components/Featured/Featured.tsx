import { Box, Container, Heading } from "@chakra-ui/react";
import { PagesProps } from "../../pages";
import Works from "./Works";

export interface FeaturedProps {
  work1: PagesProps;
  work2: PagesProps;
}

export default function Featured(props:FeaturedProps) {
  return (
    <Container py="8" maxW="container.lg">
      <Box>
        <Heading fontSize="xl" fontWeight="normal">
          Featured Work
        </Heading>
      </Box>
      <Works work1={props.work1} work2={props.work2}/>
    </Container>
  );
}
