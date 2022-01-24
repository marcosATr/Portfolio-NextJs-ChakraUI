import { Button, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

export default function Header() {
  return (
    <Container maxW="container.lg">
      <Flex py={16} direction={["column-reverse", "column-reverse", "row"]}>
        <VStack align={["center", "center", "flex-start"]} textAlign={["center", "center", "left"]} spacing={8} w={["100%", "100%", "60%"]}>
          <Heading fontSize="5xl" lineHeight="4rem">
            Hi, I'm Marcos, a frontend developer from Brazil
          </Heading>
          <Text>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text>
          <Button colorScheme="red">Contact me</Button>
        </VStack>
        <Flex align="center" justifyContent={["center", "center", "flex-end"]} w={["100%", "100%", "40%"]} py={8}>
          <Image src="/img/Ellipse 1.png" alt="me photo" borderRadius="full" boxShadow="-7px 15px 0px #EDF7FA"></Image>
        </Flex>
      </Flex>
    </Container>
  );
}
