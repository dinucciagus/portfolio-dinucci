import Resume from "../components/resume";
import About from "../components/Aboutme";
import Home from "../components/home";
import Projects from "../components/projects";
import Notwork from "../components/notwork";
import Contact from "../components/Contact";
import NavBar from "../components/navbar";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Agustina Di Nucci | Full Stack Developer</title>
        <link rel="icon" href="../favicon.ico" />
      </Head>
      <NavBar />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Notwork />
      <Contact />
    </>
  );
};

export default index;
