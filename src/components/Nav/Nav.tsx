import { Container, Flex, Wrap, WrapItem } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <Container maxW="container.lg">
      <Flex h="46px" w="full" alignItems="center" justifyContent="flex-end" fontWeight="700">
        <Wrap spacing="8">
          <WrapItem><Link href='/'>Home</Link></WrapItem>
          <WrapItem><Link href='/works'>Works</Link></WrapItem>
          <WrapItem><Link href='/blog'>Blog</Link></WrapItem>
        </Wrap>
      </Flex>
    </Container>
  );
}
