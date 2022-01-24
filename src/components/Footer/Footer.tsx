import { Container, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <Container maxW="container.lg">
      <VStack spacing={8} p={16}>
        <HStack spacing={8}>
          <a href="">
            <Icon fontSize="3xl" as={FaLinkedin} />
          </a>
          <a href="">
            <Icon fontSize="3xl" as={FaGithub} />
          </a>
        </HStack>
        <Text>Thanks for stopping by 😉</Text>
      </VStack>
    </Container>
  );
}
