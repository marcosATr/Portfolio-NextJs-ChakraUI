import { GetStaticProps } from "next";
import Featured from "../components/Featured/Featured";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Recent from "../components/Recent/Recent";

export interface PagesProps {
  title: string;
  slug: string;
  id: string;
  createdAt: string;
  excerpt?: string;
}

interface HomeProps {
  item1: PagesProps;
  item2: PagesProps;
}

export default function Home(props: HomeProps) {
  return (
    <>
      <Nav />
      <Header />
      <Recent item1={props.item1} item2={props.item2} />
      <Featured />
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

  console.log();
  return {
    props: {
      item1,
      item2,
    },
    revalidate: 60 * 60 * 24,
  };
};
