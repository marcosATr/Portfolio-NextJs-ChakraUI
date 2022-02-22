import { Box, Container, Divider, Flex, Heading, HStack, Image, Tag, Text, VStack } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Link from "next/link";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import ReactHtmlParser from "react-html-parser";
import fs from "fs/promises";
import showdown from "showdown";
import slugify from "slugify";

export default function works({ allWorks }) {
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
              <Box key={work.metadata.title}>
                <Flex direction={["column", "column", "row"]}>
                  <Link href={`/projects/${work.metadata.slug}`} passHref>
                    <a>
                      <Image alt={work.metadata.title} src={work.metadata.featured} maxW={["100%", "245px"]} borderRadius="8px" />
                    </a>
                  </Link>
                  <VStack pl={4} align="flex-start" spacing={8}>
                    <Link href={`/projects/${work.metadata.slug}`} passHref>
                      <a>
                        <Heading fontSize="2xl" pt={[4, 4, 0]}>
                          {work.metadata.title}
                        </Heading>
                      </a>
                    </Link>
                    <HStack>
                      <Text>{work.metadata.date} </Text>
                      <Tag colorScheme="twitter">{work.metadata.stack}</Tag>
                    </HStack>
                    <Text>{ReactHtmlParser(work.metadata.description)}</Text>
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
  //getting the latest two posts
  const allWorks = [];
  const seg = "src/content/projects/";
  const folderFiles = await fs.readdir(seg);
  for await (const file of folderFiles) {
    const converter = new showdown.Converter({ metadata: true });
    const filepath = seg + file;
    const content = await fs.readFile(filepath, "utf8");
    const html = converter.makeHtml(content);
    const metadata = converter.getMetadata();
    metadata["slug"] = slugify(metadata['title']).toLowerCase();
    allWorks.push({
      html,
      metadata,
    });
  }

  return {
    props: {
      allWorks,
    },
    revalidate: 60 * 60 * 24,
  };
};
