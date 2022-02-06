import { Box, Container, Divider, Flex, Heading, HStack, Image, Tag, Text, VStack } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Link from "next/link";
import { PagesProps } from ".";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import ReactHtmlParser from "react-html-parser";


interface WorkProps {
  allWorks: PagesProps[];
}

export default function works({ allWorks }: WorkProps) {
  return (
    <>
      <Nav />
      <Container py="8" maxW="container.lg">
        <VStack align="flex-start" py={8} spacing={8}>
          <Heading fontSize="5xl" lineHeight="4rem">
            Projects
          </Heading>
          {allWorks.map((work) => {
            return (
              <Box key={work.id}>
                <Flex direction={["column", "column", "row"]}>
                  <Link href={`/projects/${work.slug}/${work.id}`} passHref>
                    <a>
                      <Image alt={work.image.alt} src={work.image.imageUrl} maxW={["100%", "245px"]} borderRadius="8px" />
                    </a>
                  </Link>
                  <VStack pl={4} align="flex-start" spacing={8}>
                    <Link href={`/projects/${work.slug}/${work.id}`} passHref>
                      <a>
                        <Heading fontSize="2xl" pt={[4, 4, 0]}>
                          {work.title}
                        </Heading>
                      </a>
                    </Link>
                    <HStack>
                      <Text>{work.createdAt} </Text>
                      {work.tags.map((tag) => {
                        return (
                          <Tag key={tag.ulli} colorScheme="twitter">
                            {tag.ulli}
                          </Tag>
                        );
                      })}
                    </HStack>
                    <Text>{ReactHtmlParser(work.excerpt)}</Text>
                  </VStack>
                </Flex>
                <Divider mt={8} />
              </Box>
            );
          })}
        </VStack>
      </Container>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  //getting the latest two works
  const works: PagesProps[] = await fetch("https://api-portfolio-marcos.herokuapp.com/works").then((res) => res.json());

  function convertTime(d: string) {
    const date = new Date(Date.parse(d));
    return date.toUTCString().slice(5, 16);
  }

  const allWorks = [];

  for await (const work of works) {
    const workDetails = await fetch(`https://api-portfolio-marcos.herokuapp.com/works/${work.id}`).then((res) => res.json());
    const workExcerpt = workDetails.find((i) => i.text);

    const featuredImage = workDetails.find((i) => i.imageUrl);
    const workTags = workDetails.filter((i) => i.ulli);
    const createdAt = convertTime(work.createdAt);
    const newWork = {
      ...work,
      image: featuredImage,
      tags: workTags,
      createdAt: createdAt,
      excerpt: workExcerpt.text.slice(0, 250) + "...",
    };
    allWorks.push(newWork);
  }

  return {
    props: {
      allWorks,
    },
    revalidate: 60 * 60,
  };
};
