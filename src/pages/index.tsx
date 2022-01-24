import Featured from "../components/Featured/Featured";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Recent from "../components/Recent/Recent";

export default function Home() {
  return (
    <>
      <Nav/>
      <Header />
      <Recent/>
      <Featured/>
      <Footer/>
    </>
  );
}
