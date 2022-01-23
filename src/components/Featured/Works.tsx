import { Box, Flex, Heading, HStack, Image, Tag, Text, VStack } from "@chakra-ui/react";

export default function Works() {
  return (
    <VStack align="flex-start" py={8} spacing={8}>
      <Flex>
        <Image alt="" src="/img/Rectangle 30.png " />
        <VStack pl={4} align="flex-start" spacing={8}>
          <Heading fontSize="2xl">Making a design system from scratch</Heading>
          <HStack>
            <Text> 2021   - </Text>
            <Tag colorScheme='twitter'>React</Tag>
            <Tag colorScheme='twitter'>Next.Js</Tag>
            <Tag colorScheme='twitter'>Nest</Tag>
          </HStack>
          <Text>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet</Text>
        </VStack>
      </Flex>

      <Flex>
        <Image alt="" src="/img/Rectangle 30.png " />
        <VStack pl={4} align="flex-start" spacing={8}>
          <Heading fontSize="2xl">Making a design system from scratch</Heading>
          <Text>04 Março | NextJs, React</Text>
          <Text>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet</Text>
        </VStack>
      </Flex>
    </VStack>
  );
}
