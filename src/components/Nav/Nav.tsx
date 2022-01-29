import { Container, Flex, Image, Wrap, WrapItem } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <Container maxW="container.lg">
      <Flex h="46px" w="full" alignItems="center" flexDirection={['column', 'row']} justifyContent="space-between" fontWeight="700" my={4}>
        <Link href="/">
          <a>
            <Image alt="logo" src="/img/Text.png" width="150px" height="auto" py={[4,0]} />
          </a>
        </Link>
        <Wrap spacing="8">
          <WrapItem>
            <Link href="/">Home</Link>
          </WrapItem>
          <WrapItem>
            <Link href="/works">Works</Link>
          </WrapItem>
          <WrapItem>
            <Link href="/blog">Blog</Link>
          </WrapItem>
        </Wrap>
      </Flex>
    </Container>
  );
}
