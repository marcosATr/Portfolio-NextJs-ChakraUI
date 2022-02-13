import { GetStaticProps } from "next";
import { PagesProps } from "../..";
import { Container } from "@chakra-ui/react";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import PostProcessor from "../../../components/PostProcessor/PostProcessor";
import Head from 'next/head';

export interface Article {
  text?: string;
  ulli?: string;
  code?: string;
  h1?: string;
  h2?: string;
  h3?: string;
  metadata?: {
    id?: string;
    createdAt?: string;
    slug?: string;
    title?: string;
  };
  imageUrl?: string;
  alt?: string;
}

export interface BlogProps {
  postDetails: Article[];
}

const Blog = ({ postDetails }: BlogProps) => {
  return (
    <>
      <Head>
        <title>{postDetails[0].metadata.title}</title>
        <meta property="og:title" content={`${postDetails[0].metadata.title}`} key={`${postDetails[0].metadata.title}`} />
      </Head>
      <Nav />
      <Container maxW="container.lg">
        <article>
          <PostProcessor postDetails={postDetails} />
        </article>
      </Container>
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
 
};

export default Blog;
