import { siteContent as c } from "@/content/site";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGithub, SiOrcid, SiWhatsapp } from "react-icons/si";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#about"><strong>Xiaoyu</strong> Wu</a>
          <nav aria-label="Main navigation">
            <a href="#about">about</a>
            <a href="#research">research</a>
            <a href="/publications">publications</a>
            <a href="/conferences">conferences</a>
            <a href="/teaching">teaching</a>
            <a href="/Xiaoyu_Wu_CV.pdf" target="_blank" rel="noreferrer">cv</a>
          </nav>
        </div>
      </header>

      <main className="site-main">
        <section className="about" id="about">
          <div className="about-copy">
            <h1>Xiaoyu Wu</h1>
            <p className="affiliation">{c.person.current}</p>
            <div className="bio">
              <p>I obtained my PhD in Chemistry from the University of Liverpool and am now research staff at the National University of Singapore, working on <strong>AI for reticular chemistry</strong> and the <strong>digital discovery of nanoporous materials</strong>.</p>
              <p>{c.person.intro} {c.person.applications}.</p>
            </div>
            <p className="air-note"><span>AIR-lab</span> {c.person.airNote} <a href="#research-vision">Learn more →</a></p>
            <div className="social-links" aria-label="Contact and social profiles">
              <a href={`mailto:${c.person.email}`} aria-label="Email Xiaoyu Wu" title="Email"><MdEmail aria-hidden="true" /></a>
              <a href={c.person.whatsapp} target="_blank" rel="noreferrer" aria-label="Message Xiaoyu Wu on WhatsApp" title="WhatsApp"><SiWhatsapp aria-hidden="true" /></a>
              <a href={c.person.linkedin} target="_blank" rel="noreferrer" aria-label="Xiaoyu Wu on LinkedIn" title="LinkedIn"><FaLinkedinIn aria-hidden="true" /></a>
              <a href={c.person.github} target="_blank" rel="noreferrer" aria-label="Xiaoyu Wu on GitHub" title="GitHub"><SiGithub aria-hidden="true" /></a>
              <a href={c.person.orcid} target="_blank" rel="noreferrer" aria-label="Xiaoyu Wu on ORCID" title="ORCID"><SiOrcid aria-hidden="true" /></a>
            </div>
          </div>
          <figure className="profile-visual">
            <Image src="/xiaoyu-wu.jpg" alt="Xiaoyu Wu" width={1079} height={1435} priority unoptimized />
            <figcaption>Frugal in resources, ambitious in ideas</figcaption>
          </figure>
        </section>

        <section className="content-section" id="research">
          <article className="research-feature" id="research-vision">
            <div className="research-feature-copy"><span>AIR-lab · Independent research vision</span><h3>Building a predictive science of reticular materials.</h3><p>My independent vision for AIR-lab is to unite reticular chemistry, molecular simulation, and artificial intelligence in a single discovery cycle: proposing chemically realistic materials, revealing how their structures govern function, and prioritising the most promising candidates for experiment.</p><p>The goal is to move digital materials discovery beyond large-scale screening—toward models that reason with chemistry and predictions that can accelerate separations, carbon capture, sensing, and sustainable molecular technologies.</p><div className="vision-papers"><strong>selected papers</strong><a href="https://doi.org/10.1002/adfm.202519565" target="_blank" rel="noreferrer"><em>Adv. Funct. Mater.</em> (2026) 36 (14): e19565 ↗</a><a href="https://doi.org/10.1016/j.cej.2025.167021" target="_blank" rel="noreferrer"><em>Chem. Eng. J.</em> (2025) 521: 167021 ↗</a><a href="https://doi.org/10.1039/D4SC05616G" target="_blank" rel="noreferrer"><em>Chem. Sci.</em> (2024) 15 (40): 16467–16479 ↗</a><a className="full-list-link" href="/publications">see full list →</a></div></div>
            <figure><Image src="/nbo-mof-101-2.webp" alt="Molecular structure of an NbO-topology metal-organic framework" width={1400} height={1400} unoptimized /><figcaption>Reticular chemistry</figcaption></figure>
          </article>
        </section>

      </main>
      <footer className="footer"><span>© {new Date().getFullYear()} {c.person.name}</span><span>Digital discovery of nanoporous materials.</span></footer>
    </>
  );
}
