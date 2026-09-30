import { HighlightRoot } from "./Highlight";
import { Hero } from "./Hero";
import { Join } from "./Join";
import { Members } from "./Members";
import { Nav } from "./Nav";
import { Projects } from "./Projects";
import { Reveal } from "./Reveal";
import { About, Footer, Values } from "./Sections";
import { Network, Skills } from "./Skills";
import styles from "./home.module.css";

export function CollectiveHome({ showNetwork = true }) {
  return (
    <HighlightRoot className={styles.root}>
      <Nav />
      <main>
        <Hero />
        <About />
        <Members />
        <Skills />
        {showNetwork && <Network />}
        <Projects />
        <Values />
        <Join />
      </main>
      <Footer />
      <Reveal />
    </HighlightRoot>
  );
}
