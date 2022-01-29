import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { PagesProps } from "../..";
import ReactHtmlParser from "react-html-parser";
import { Code, Container, Heading, Image, Tag, Text } from "@chakra-ui/react";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";

const Blog = ({ postDetails }) => {
  function convertTime(d: string) {
    const date = new Date(Date.parse(d));
    return date.toUTCString().slice(5, 16);
  }

  const res = [];

  postDetails.map((item, ind) => {
    if (item.metadata) {
      res.push(
        <Heading key={item.metadata.id} size="2xl" py={4}>
          {item.metadata.title}
        </Heading>
      );
      res.push(
        <Text py={4}>
          <Tag borderRadius="full" variant="solid" colorScheme="red">
            {convertTime(item.metadata.createdAt)}
          </Tag>
        </Text>
      );
    }
    if (item.text) {
      res.push(
        <Text key={ind} py={4}>
          {ReactHtmlParser(item.text)}
        </Text>
      );
    }
    if (item.imageUrl) {
      res.push(<Image key={ind} alt={item.alt} src={item.imageUrl} py={4}></Image>);
    }
    if (item.code) {
      res.push(
        <Code key={ind} py={4}>
          {item.code}
        </Code>
      );
    }
    if (item.h1) {
      res.push(
        <Heading key={ind} size="2xl" py={4}>
          {item.h1}
        </Heading>
      );
    }
    if (item.h2) {
      res.push(
        <Heading key={ind} size="xl" py={4}>
          {item.h2}
        </Heading>
      );
    }
    if (item.h3) {
      res.push(
        <Heading key={ind} size="lg" py={4}>
          {item.h3}
        </Heading>
      );
    }
  });

  return (
    <>
      <Nav />
      <Container maxW="container.lg">{res}</Container>
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const posts: PagesProps[] = await fetch("https://api-portfolio-marcos.herokuapp.com/pages").then((res) => res.json());
  const paths = posts.map((post) => ({
    params: { slug: post.slug, id: post.id },
  }));
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postDetails = await fetch(`https://api-portfolio-marcos.herokuapp.com/pages/${params.id}`).then((res) => res.json());
  // console.log(postDetails)
  return {
    props: {
      postDetails,
    },
  };
};

export default Blog;
