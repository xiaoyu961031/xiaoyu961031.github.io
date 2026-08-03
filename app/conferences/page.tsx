import { siteContent as c } from "@/content/site";
import Link from "next/link";
import { Conferences } from "../Conferences";

export default function ConferencesPage() {
  return (
    <>
      <header className="site-header">
        <div className="nav-wrap">
          <Link className="brand" href="/"><strong>Xiaoyu</strong> Wu</Link>
          <nav aria-label="Main navigation">
            <Link href="/#about">about</Link>
            <Link href="/#research">research</Link>
            <Link href="/publications">publications</Link>
            <Link className="active" href="/conferences">conferences</Link>
            <Link href="/teaching">teaching</Link>
            <a href="/Xiaoyu_Wu_CV.pdf" target="_blank" rel="noreferrer">cv</a>
          </nav>
        </div>
      </header>
      <main className="site-main publications-page">
        <header className="publications-intro">
          <h1>conferences</h1>
          <div><p>Selected oral and poster presentations on digital materials discovery, machine learning, and nanoporous materials.</p></div>
        </header>
        <Conferences />
      </main>
      <footer className="footer"><span>© {new Date().getFullYear()} {c.person.name}</span><Link href="/">← back to profile</Link></footer>
    </>
  );
}
