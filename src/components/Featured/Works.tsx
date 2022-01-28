import { Flex, Heading, HStack, Image, Tag, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { PagesProps } from "../../pages";

interface FeaturedProps {
  work1: PagesProps;
  work2: PagesProps;
}

export default function Works(props: FeaturedProps) {
  return (
    <VStack align="flex-start" py={8} spacing={8}>
      <Link  href={`/works/${props.work1.slug}`}>
        <a>
          <Flex direction={["column", "column", "row"]}>
            <Image alt={props.work1.image.alt} src={props.work1.image.imageUrl} maxW={["100%","245px"]} borderRadius='8px' />
            <VStack pl={4} align="flex-start" spacing={8}>
              <Heading fontSize="2xl" pt={[4, 4, 0]}>
                {props.work1.title}
              </Heading>
              <HStack>
                <Text>{props.work1.createdAt} </Text>
                {props.work1.tags.map((tag) => {
                  return (
                    <Tag key={tag.ulli} colorScheme="twitter">
                      {tag.ulli}
                    </Tag>
                  );
                })}
              </HStack>
              <Text>{props.work1.excerpt}</Text>
            </VStack>
          </Flex>
        </a>
      </Link>

      <Link  href={`/works/${props.work2.slug}`}>
        <a>
          <Flex direction={["column", "column", "row"]}>
            <Image alt={props.work2.image.alt} src={props.work2.image.imageUrl} maxW={["100%","245px"]} borderRadius='8px' />
            <VStack pl={4} align="flex-start" spacing={8}>
              <Heading fontSize="2xl" pt={[4, 4, 0]}>
                {props.work2.title}
              </Heading>
              <HStack>
                <Text>{props.work2.createdAt} </Text>
                {props.work2.tags.map((tag) => {
                  return (
                    <Tag key={tag.ulli} colorScheme="twitter">
                      {tag.ulli}
                    </Tag>
                  );
                })}
              </HStack>
              <Text>{props.work2.excerpt}</Text>
            </VStack>
          </Flex>
        </a>
      </Link>

    
    </VStack>
  );
}
