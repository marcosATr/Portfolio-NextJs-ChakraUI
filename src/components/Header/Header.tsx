import { Button, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  return (
    <Container maxW="container.lg">
      <Flex py={16} direction={["column-reverse", "column-reverse", "row"]}>
        <VStack align={["center", "center", "flex-start"]} textAlign={["center", "center", "left"]} spacing={8} w={["100%", "100%", "60%"]}>
          <Heading fontSize="5xl" lineHeight="4rem">
            Oi, eu sou Marcos, Desenvolvedor Javascript do Rio de Janeiro!
          </Heading>
          <Text>Gosto de gatos, livros e códigos. Meu passatempo é explorar novas tecnologias e bibliotecas.</Text>
          <Link href="https://www.linkedin.com/in/marcos-a-253b14184/">
            <a>
              <Button colorScheme="red">Encontre-me</Button>
            </a>
          </Link>
        </VStack>
        <Flex align="center" justifyContent={["center", "center", "flex-end"]} w={["100%", "100%", "40%"]} py={8}>
          <Image marginTop="-70px" src="https://media4.giphy.com/media/ES4Vcv8zWfIt2/giphy.gif?cid=ecf05e47cx5r6i6txunehxknehsr7f1k7n1jyd7sw1gr44qk&rid=giphy.gif&ct=g" alt="me photo" borderRadius="full" /* boxShadow="-7px 15px 0px #EDF7FA" */></Image>
        </Flex>
      </Flex>
    </Container>
  );
}
