import { GetStaticProps } from "next";
import Featured from "../components/Featured/Featured";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Recent from "../components/Recent/Recent";
import Head from "next/head";
import { generateLatest } from "../utils/latest";

export interface Metadata {
  title: string;
  date: string;
  featured: string;
  description: string;
  slug?: string;
  stack?: string[];
}
export interface ItemProps {
  metadata: Metadata;
  html?: string;
}

interface HomeProps {
  posts: ItemProps[];
  projects: ItemProps[];
}
export default function Home(props: HomeProps) {
  return (
    <>
      <Head>
        <title>Portfólio - Marcos Augusto</title>
        <meta property="og:title" content="Portfólio - Marcos Augusto" key="Portfólio - Marcos Augusto" />
      </Head>
      <Nav />
      <Header />
      <Recent posts={props.posts} />
      <Featured projects={props.projects} />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await generateLatest("posts");
  const projects = await generateLatest("projects");
  return {
    props: {
      posts,
      projects,
    },
  };
};
