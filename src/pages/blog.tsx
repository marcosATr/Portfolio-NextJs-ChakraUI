import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Link from "next/link";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import ReactHtmlParser from "react-html-parser";
import fs from "fs/promises";
import showdown from "showdown";
import slugify from "slugify";
// import { Metadata } from ".";
import Showdown from "showdown";

export default function blog({ allPosts }) {
  return (
    <>
      <Nav />
      <Container py="8" maxW="container.lg">
        <VStack align="flex-start">
          <Heading fontSize="5xl" lineHeight="4rem">
            Blog
          </Heading>
          {allPosts.map((post) => {
            return (
              <VStack key={post.metadata.title} bg="white" py={6} boxShadow="sm" align="flex-start" spacing={5}>
                <Link href={`/blog/${post.metadata.slug}`}>
                  <a>
                    <Heading fontSize="2xl">{post.metadata.title}</Heading>
                  </a>
                </Link>
                <Text>{post.metadata.date}</Text>
                <Text>{ReactHtmlParser(post.metadata.description)}</Text>
              </VStack>
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
  const allPosts = [];
  const seg = "src/content/posts/";
  const folderFiles = await fs.readdir(seg);
  for await (const file of folderFiles) {
    const converter = new showdown.Converter({ metadata: true });
    const filepath = seg + file;
    const content = await fs.readFile(filepath, "utf8");
    const html = converter.makeHtml(content);
    const metadata: string | Showdown.Metadata = converter.getMetadata(false);

    metadata["slug"] = slugify(metadata['title']).toLowerCase();
    allPosts.push({
      html,
      metadata,
    });
  }

  return {
    props: {
      allPosts,
    },
    revalidate: 60 * 60 * 24,
  };
};
