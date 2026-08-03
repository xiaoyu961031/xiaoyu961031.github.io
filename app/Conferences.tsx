import { siteContent as c } from "@/content/site";

export function Conferences() {
  return (
    <div className="conference-list">
      {c.conferences.map((item) => (
        <article className="conference-item" key={`${item.year}-${item.title}`}>
          <div className="conference-meta"><time>{item.year}</time><span>{item.format}</span></div>
          <div><h3>{item.title}</h3><p>{item.event} · {item.location}</p></div>
        </article>
      ))}
    </div>
  );
}
