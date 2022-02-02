import { GetStaticProps } from "next";
import Featured from "../components/Featured/Featured";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Recent from "../components/Recent/Recent";
import Head from "next/head";


interface Ulli {
  ulli: string;
}
export interface PagesProps {
  title: string;
  slug: string;
  id: string;
  createdAt: string;
  excerpt?: string;
  image?: {
    imageUrl: string;
    alt: string;
  };
  tags: Ulli[];
}

interface HomeProps {
  item1: PagesProps;
  item2: PagesProps;
  work1: PagesProps;
  work2: PagesProps;
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
      <Recent item1={props.item1} item2={props.item2} />
      <Featured work1={props.work1} work2={props.work2} />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pages: PagesProps[] = await fetch("https://api-portfolio-marcos.herokuapp.com/pages").then((res) => res.json());
  const latest = pages.slice(-2);
  let [item1, item2] = latest;
  const post1 = await fetch(`https://api-portfolio-marcos.herokuapp.com/pages/${item1.id}`).then((res) => res.json());
  const post2 = await fetch(`https://api-portfolio-marcos.herokuapp.com/pages/${item2.id}`).then((res) => res.json());

  const post1Excerpt = post1.find((i) => i.text);
  item1["excerpt"] = post1Excerpt.text.slice(0, 165) + "...";

  const post2Excerpt = post2.find((i) => i.text);
  item2["excerpt"] = post2Excerpt.text.slice(0, 165) + "...";

  //convert time
  function convertTime(d: string) {
    const date = new Date(Date.parse(d));
    return date.toUTCString().slice(5, 16);
  }

  item1.createdAt = convertTime(item1.createdAt);
  item2.createdAt = convertTime(item2.createdAt);

  //getting the latest two works
  const works: PagesProps[] = await fetch("https://api-portfolio-marcos.herokuapp.com/works").then((res) => res.json());
  const latestWorks = works.slice(-2);
  let [work1, work2] = latestWorks;
  //fetching works details
  const work1Details = await fetch(`https://api-portfolio-marcos.herokuapp.com/works/${work1.id}`).then((res) => res.json());
  const work2Details = await fetch(`https://api-portfolio-marcos.herokuapp.com/works/${work2.id}`).then((res) => res.json());
  
  const work1Excerpt = work1Details.find((i) => i.text);

  work1["excerpt"] = work1Excerpt.text.slice(0, 165) + "...";

  const work2Excerpt = work2Details.find((i) => i.text);
  work2["excerpt"] = work2Excerpt.text.slice(0, 165) + "...";

  //getting featured images
  const featuredImage1 = work1Details.find((i) => i.imageUrl);
  work1["image"] = featuredImage1;

  const featuredImage2 = work2Details.find((i) => i.imageUrl);
  work2["image"] = featuredImage2;

  work1['tags'] = work1Details.filter((i) => i.ulli)
  work2['tags'] = work2Details.filter((i) => i.ulli)

  //converting time
  work1.createdAt = convertTime(work1.createdAt);
  work2.createdAt = convertTime(work2.createdAt);

  return {
    props: {
      item1,
      item2,
      work1,
      work2,
    },
    revalidate: 60 * 60 * 24,
  };
};
