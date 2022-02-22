import showdown from "showdown";
import fs from "fs/promises";
import path from "path";
import { GetStaticProps } from "next";
import { Container } from "@chakra-ui/react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import ReactHtmlParser from "react-html-parser";
import Head from "next/head";
import slugify from "slugify";
import { Metadata } from "..";


interface Info {
   [key: string]: string 
}

const Works = ({metadata, html}) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta property="og:title" content={`${metadata.title}`} key={`${metadata.title}`} />
      </Head>
      <Nav />
      <Container maxW="container.lg">
        <article>
          {ReactHtmlParser(html)}
        </article>
      </Container>
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const seg = "src/content/projects/";
  const posts = await fs.readdir(seg);
  const converter = new showdown.Converter({ metadata: true });

  const paths = [];
  for await (const post of posts) {
    const filepath = path.join(seg, post);
    const content = await fs.readFile(filepath, "utf8");
    const html = converter.makeHtml(content);
    const metadata = converter.getMetadata();
    paths.push({
      params: {
        slug: slugify(metadata['title']).toLowerCase(),
        filename: post,
      },
    });
  }

  return { paths: paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const seg = "src/content/projects/";
  const filepath = path.join(seg, slug + ".md");

  const converter = new showdown.Converter({ metadata: true });
  const content = await fs.readFile(filepath, "utf8");
  const html = converter.makeHtml(content);
  const metadata = converter.getMetadata();

  return {
    props: {
      metadata,
      html
    },
  };
};

export default Works;
