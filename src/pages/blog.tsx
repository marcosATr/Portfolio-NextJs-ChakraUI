import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";

export default function blog() {
  return (
    <>
      <Nav />
      <Container py="8" maxW="container.lg">
        <VStack align="flex-start">
          <Heading fontSize="5xl" lineHeight="4rem">
            Blog
          </Heading>

          <VStack bg="white" py={6} boxShadow="sm" align="flex-start" spacing={5}>
            <Heading fontSize="2xl">Making a design system from scratch</Heading>
            <Text>04 Março | NextJs, React</Text>
            <Text>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text>
          </VStack>

          <VStack bg="white" py={6} boxShadow="sm" align="flex-start" spacing={5}>
            <Heading fontSize="2xl">Making a design system from scratch</Heading>
            <Text>04 Março | NextJs, React</Text>
            <Text>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text>
          </VStack>
        </VStack>
      </Container>
      <Footer />
    </>
  );
}
