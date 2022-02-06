import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Link from "next/link";
import { PagesProps } from ".";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import ReactHtmlParser from "react-html-parser";

interface BlogProps {
  allPosts: PagesProps[];
}

export default function blog({ allPosts }: BlogProps) {
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
              <VStack key={post.id} bg="white" py={6} boxShadow="sm" align="flex-start" spacing={5}>
                <Link href={`/blog/${post.slug}/${post.id}`}>
                  <a>
                    <Heading fontSize="2xl">{post.title}</Heading>
                  </a>
                </Link>
                <Text>{post.createdAt}</Text>
                <Text>{ReactHtmlParser(post.excerpt)}</Text>
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
  const posts: PagesProps[] = await fetch("https://api-portfolio-marcos.herokuapp.com/pages").then((res) => res.json());

  function convertTime(d: string) {
    const date = new Date(Date.parse(d));
    return date.toUTCString().slice(5, 16);
  }

  const allPosts = [];

  for await (const post of posts) {
    const postDetails = await fetch(`https://api-portfolio-marcos.herokuapp.com/pages/${post.id}`).then((res) => res.json());
    const postExcerpt = postDetails.find((i) => i.text);

    // const featuredImage = postDetails.find((i) => i.imageUrl); //blogs do not have a featured image
    // const workTags = workDetails.filter((i) => i.ulli);
    const createdAt = convertTime(post.createdAt);
    const newPost = {
      ...post,
      // image: featuredImage,
      // tags: postTags,
      createdAt: createdAt,
      excerpt: postExcerpt ? postExcerpt.text.slice(0, 250) + "..." : null,
    };
    allPosts.push(newPost);
  }

  return {
    props: {
      allPosts,
    },
    revalidate: 60 * 60,
  };
};
