import { siteContent as c } from "@/content/site";
import Link from "next/link";
import { Publications } from "../Publications";

export default function PublicationsPage() {
  return (
    <>
      <header className="site-header">
        <div className="nav-wrap">
          <Link className="brand" href="/"><strong>Xiaoyu</strong> Wu</Link>
          <nav aria-label="Main navigation">
            <Link href="/#about">about</Link>
            <Link href="/#research">research</Link>
            <Link className="active" href="/publications">publications</Link>
            <Link href="/conferences">conferences</Link>
            <Link href="/teaching">teaching</Link>
            <a href="/Xiaoyu_Wu_CV.pdf" target="_blank" rel="noreferrer">cv</a>
          </nav>
        </div>
      </header>
      <main className="site-main publications-page">
        <header className="publications-intro">
          <h1>publications</h1>
          <div><p>Xiaoyu Wu is highlighted; † indicates equal contribution and * corresponding authorship.</p><p className="publication-count"><strong>18 (co-)first or corresponding-authored</strong> papers, with 2 additional papers in progress.</p></div>
        </header>
        <Publications />
        <section className="papers-in-progress" aria-labelledby="in-progress-title">
          <h2 id="in-progress-title">in progress</h2>
          <div>
            <article>
              <span>under review · Journal of the American Chemical Society</span>
              <h3>Linker Functionalization in HKUST-1 Metal–Organic Frameworks: Insights into Synthesizability and Hydrolytic Properties from Machine Learning Potentials</h3>
              <p>Rui Zheng, <strong>Xiaoyu Wu<sup>*</sup></strong>, Jianwen Jiang<sup>*</sup></p>
            </article>
            <article>
              <span>under review · Separation and Purification Technology</span>
              <h3>Spatially Aware Deep Learning for Isotopologue Separation: Predicting <sup>12</sup>CH<sub>4</sub>/<sup>13</sup>CH<sub>4</sub> Selectivity in Metal–Organic Frameworks via Grid–Crystal Residual Networks</h3>
              <p>Chenrui Li<sup>†</sup>, <strong>Xiaoyu Wu<sup>*</sup></strong>, Tianyu Guo, Linjiang Chen, Lin-Bing Sun<sup>*</sup>, Zhenghao Wu<sup>*</sup>, Lifeng Ding<sup>*</sup></p>
            </article>
          </div>
        </section>
      </main>
      <footer className="footer"><span>© {new Date().getFullYear()} {c.person.name}</span><Link href="/">← back to profile</Link></footer>
    </>
  );
}
