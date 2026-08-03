"use client";

import { useEffect, useMemo, useState } from "react";

type Publication = {
  year: string;
  title: string;
  authors: string;
  journal: string;
  status_or_note: string;
  doi_or_link: string;
  tags: string;
};

const PAGE_SIZE = 10;

function parseCsv(text: string): Publication[] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    const next = text[index + 1];
    if (character === '"' && quoted && next === '"') {
      field += '"';
      index += 1;
    } else if (character === '"') {
      quoted = !quoted;
    } else if (character === "," && !quoted) {
      row.push(field.trim());
      field = "";
    } else if ((character === "\n" || character === "\r") && !quoted) {
      if (character === "\r" && next === "\n") index += 1;
      row.push(field.trim());
      if (row.some(Boolean)) rows.push(row);
      row = [];
      field = "";
    } else {
      field += character;
    }
  }
  if (field || row.length) {
    row.push(field.trim());
    rows.push(row);
  }

  const [headers, ...data] = rows;
  if (!headers) return [];
  return data.map((values) => Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""])) as Publication);
}

function AuthorList({ authors }: { authors: string }) {
  return (
    <p className="publication-authors">
      {authors.split(";").map((rawAuthor, index, list) => {
        const roles = rawAuthor.match(/\[([^\]]+)\]/)?.[1].split(",") ?? [];
        const equal = roles.includes("cf");
        const corresponding = roles.includes("cor");
        const name = rawAuthor.replace(/\[(cf|cor)(,cor)?\]/g, "").trim();
        return <span key={`${name}-${index}`} className={name === "Xiaoyu Wu" ? "self-author" : undefined}>{name}{(equal || corresponding) && <sup className="author-marker">{equal ? "†" : ""}{corresponding ? "*" : ""}</sup>}{index < list.length - 1 ? ", " : ""}</span>;
      })}
    </p>
  );
}

export function Publications() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch("/publications.csv")
      .then((response) => response.text())
      .then((text) => setPublications(parseCsv(text)));
  }, []);

  const pageCount = Math.max(1, Math.ceil(publications.length / PAGE_SIZE));
  const visible = useMemo(() => publications.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE), [page, publications]);

  if (!publications.length) return <p className="publication-loading">Loading publications…</p>;

  return (
    <>
      <div className="publication-list">
        {visible.map((paper, index) => (
          <article className="publication" key={`${paper.year}-${paper.title}`}>
            <div className="pub-number">{page * PAGE_SIZE + index + 1}</div>
            <div>
              <h3>{paper.doi_or_link ? <a href={paper.doi_or_link} target="_blank" rel="noreferrer">{paper.title}</a> : paper.title}</h3>
              <AuthorList authors={paper.authors} />
              <p className="venue">{paper.journal}{paper.status_or_note ? ` · ${paper.status_or_note}` : ""}, {paper.year}</p>
              <div className="paper-tags">{paper.tags.split(";").filter(Boolean).map((tag) => <span className="topic" key={tag}>{tag.trim()}</span>)}</div>
            </div>
            {paper.doi_or_link && <a className="paper-link" href={paper.doi_or_link} target="_blank" rel="noreferrer" aria-label={`Open ${paper.title}`}>↗</a>}
          </article>
        ))}
      </div>
      <div className="publication-pagination" aria-label="Publication pages">
        <div className="pagination-back">
          <button type="button" disabled={page === 0} onClick={() => setPage(0)}>⇤ First 10</button>
          <button type="button" disabled={page === 0} onClick={() => setPage((current) => Math.max(0, current - 1))}>← Previous 10</button>
        </div>
        <span>{page + 1} / {pageCount} · {publications.length} publications</span>
        <button type="button" disabled={page >= pageCount - 1} onClick={() => setPage((current) => Math.min(pageCount - 1, current + 1))}>Next 10 →</button>
      </div>
    </>
  );
}
