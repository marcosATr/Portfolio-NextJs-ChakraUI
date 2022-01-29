import { GetStaticProps } from "next";
import { PagesProps } from "../..";
import { Container} from "@chakra-ui/react";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import PostProcessor from "../../../components/PostProcessor/PostProcessor";
import Head from 'next/head';

export interface Article {
  text?: string;
  ulli?:string;
  code?:string;
  h1?:string;
  h2?:string;
  h3?:string;
  metadata?: {
    id?:string;
    createdAt?:string;
    slug?:string;
    title?:string;
  };
  imageUrl?:string;
  alt?:string;
}

export interface BlogProps {
  postDetails: Article[];
}

const Works = ({ postDetails}:BlogProps) => {


  return (
    <>
    <Head>
        <title>{postDetails[0].metadata.title}</title>
        <meta property="og:title" content={`${postDetails[0].metadata.title}`} key={`${postDetails[0].metadata.title}`} />
      </Head>
      <Nav />
      <Container maxW="container.lg"><PostProcessor postDetails={postDetails} /></Container>
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const posts: PagesProps[] = await fetch("https://api-portfolio-marcos.herokuapp.com/works").then((res) => res.json());
  const paths = posts.map((post) => ({
    params: { slug: post.slug, id: post.id },
  }));
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postDetails = await fetch(`https://api-portfolio-marcos.herokuapp.com/works/${params.id}`).then((res) => res.json());
  // console.log(postDetails)
  return {
    props: {
      postDetails,
    },
  };
};

export default Works;
