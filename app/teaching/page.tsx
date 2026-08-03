import { siteContent as c } from "@/content/site";
import Link from "next/link";

export default function TeachingPage() {
  const mentoring = [
    { name: "Rui Zheng", stage: "current PhD student", current: "National University of Singapore", project: "Flexible and synthesizable MOFs: from CO₂ adsorption-induced anisotropic mechanical response to machine-learning-potential studies of HKUST-1 hydrolytic properties.", link: "https://doi.org/10.1039/D6TA01626J", inProgress: true, quote: "Xiaoyu has guided me in moving beyond running simulations to ask deeper questions about how framework structure, flexibility, and stability are connected. His thoughtful feedback has helped me develop independent computational workflows, interpret results with greater chemical insight, and turn them into clear scientific stories." },
    { name: "Tianyu Guo", stage: "former BSc student", current: "PhD researcher at HKUST, Hong Kong SAR", project: "From chemisorption to physisorption: computational discovery of N-rich COFs for CH₃I capture.", link: "https://doi.org/10.1016/j.cej.2025.170758", quote: "Xiaoyu helped me turn an undergraduate project into a rigorous research story. His guidance taught me how to connect molecular simulation with chemical interpretation and gave me the confidence to pursue doctoral research." },
    { name: "Mingyue Ma", stage: "former MSc student", current: "Micron, Singapore", project: "Amine-functionalized MOFs for CO₂/H₂ separation and LLM-assisted mapping of the Zn-MOF literature.", quote: "Xiaoyu encouraged me to connect molecular simulation with emerging AI tools. His clear and patient feedback helped me approach unfamiliar problems independently and prepared me to work confidently across disciplines." },
    { name: "Yixu Cheng", stage: "former MSc student", current: "Nanguang, Macao SAR", project: "Molecular design of anion-pillared MOFs for CO₂/N₂ separation.", quote: "Xiaoyu taught me to look beyond numerical results and ask what controls separation at the molecular level. His guidance helped me become more systematic, critical, and confident in computational research." },
    { name: "Daeun Jung", stage: "former BSc student", current: "quality assurance professional at PharmaResearch, South Korea", project: "Open-copper-site MOFs for high-capacity C₂H₂ storage.", quote: "Working with Xiaoyu introduced me to a structured way of solving scientific problems—from checking data carefully to explaining results clearly. Those habits continue to support my work in quality assurance." },
  ];

  return (
    <>
      <header className="site-header"><div className="nav-wrap"><Link className="brand" href="/"><strong>Xiaoyu</strong> Wu</Link><nav aria-label="Main navigation"><Link href="/#about">about</Link><Link href="/#research">research</Link><Link href="/publications">publications</Link><Link href="/conferences">conferences</Link><Link className="active" href="/teaching">teaching</Link><a href="/Xiaoyu_Wu_CV.pdf" target="_blank" rel="noreferrer">cv</a></nav></div></header>

      <main className="site-main mentoring-page">
        <header className="publications-intro">
          <h1>teaching &amp; mentorship</h1>
          <div><p>Good education develops more than technical skill. I aim to help students build scientific judgment, confidence, intellectual generosity, and the independence to define important questions of their own.</p></div>
        </header>

        <section className="teaching-philosophy">
          <div className="section-label"><p>approach to learning</p><h2>teaching philosophy</h2></div>
          <div><h3>Connect chemical principles, evidence, and practice.</h3><p>I approach chemistry teaching as an integration of molecular understanding, quantitative reasoning, experimental observation, and computational thinking. Whether in a lecture, laboratory, or research setting, I help students understand why a method works, recognise its assumptions, evaluate evidence critically, and communicate conclusions clearly.</p><p>My pedagogy combines scaffolded instruction with inquiry- and problem-based learning. I begin with clear learning goals and guided examples, then gradually remove support as students tackle authentic chemical questions. Low-stakes questions, short reflections, and timely formative feedback help reveal misconceptions before they become barriers to learning.</p><p>In laboratory and research supervision, I use pre-task prediction, careful observation, error analysis, and post-task reflection to connect practice with theory. I also provide multiple ways to participate and demonstrate understanding, creating an environment in which students with different backgrounds can contribute, ask questions, and develop confidence.</p></div>
        </section>

        <section className="teaching-experience" aria-labelledby="teaching-experience-title">
          <div className="section-label"><p>teaching assistant &amp; co-supervisor</p><h2 id="teaching-experience-title">teaching experience</h2></div>
          <div>
            <h3>Building confidence across foundational chemistry.</h3>
            <p>I supported students in connecting fundamental concepts with disciplined scientific practice: working through chemical reasoning, guiding laboratory preparation and technique, encouraging careful interpretation of results, and giving constructive feedback on scientific communication.</p>
            <ul><li>Introduction to Chemistry</li><li>Introductory Inorganic Chemistry</li><li>Introductory Physical Chemistry</li><li>Introductory Organic Chemistry I &amp; II</li><li>Laboratory Techniques</li><li>Preparative Chemistry</li><li>Analytical Chemistry</li></ul>
          </div>
        </section>

        <section className="mentoring-experience" aria-labelledby="experience-title">
          <div><p>mentoring in practice</p><h2 id="experience-title">Helping students take their next scientific step.</h2></div>
          <div className="mentee-list">{mentoring.map((person) => <article key={person.name}><div><h3>{person.name}</h3><p>{person.stage} · {person.stage.startsWith("current") ? "at" : "now"} {person.current}</p></div><p>{person.project} {person.link && <a href={person.link} target="_blank" rel="noreferrer">view publication ↗</a>} {person.inProgress && <span className="mentee-progress">additional manuscript under review</span>}</p>{person.quote && <blockquote>“{person.quote}”</blockquote>}</article>)}</div>
        </section>

        <section className="mentoring-note"><h2>the group I hope to build</h2><p>I envision AIR-lab as a supportive, ambitious, and interdisciplinary environment where chemists, materials scientists, and computational researchers learn from one another. Different starting points are welcome; curiosity, care, and a commitment to growth matter most.</p><a href={`mailto:${c.person.email}`}>start a conversation →</a></section>
      </main>
      <footer className="footer"><span>© {new Date().getFullYear()} {c.person.name}</span><Link href="/">← back to profile</Link></footer>
    </>
  );
}
