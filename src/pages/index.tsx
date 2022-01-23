import { Box, Button, Container, Flex, Heading, Image, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import Featured from "../components/Featured/Featured";
import Header from "../components/Header/Header";
import Recent from "../components/Recent/Recent";

export default function Home() {
  return (
    <>
      <Container maxW="container.lg">
        <Flex h="46px" w="full" alignItems="center" justifyContent="flex-end" fontWeight="700">
          <Wrap spacing="8">
            <WrapItem>Works</WrapItem>
            <WrapItem>Blog</WrapItem>
            <WrapItem>Contact</WrapItem>
          </Wrap>
        </Flex>
      </Container>
      <Header />
      <Recent/>
      <Featured/>
    </>
  );
}
