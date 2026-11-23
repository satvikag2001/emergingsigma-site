import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import PdfViewer from "@/components/PdfViewer";
import { pageMetadata } from "@/lib/metadata";
import {
  CATEGORY_TAGS,
  KIND_TAGS,
  RESOURCES,
  docPath,
  formatDate,
  pageDescription,
  pageTitle,
  pdfPath,
  shortName,
} from "@/lib/resources";

// One static page per catalog entry; any other id is a 404 (static export).
export const dynamicParams = false;

export function generateStaticParams() {
  return RESOURCES.map((r) => ({ id: r.id }));
}

type Props = { params: Promise<{ id: string }> };

function resource(id: string) {
  const r = RESOURCES.find((x) => x.id === id);
  if (!r) notFound();
  return r;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const r = resource((await params).id);
  return pageMetadata({
    title: pageTitle(r),
    description: pageDescription(r),
    path: docPath(r.id),
  });
}

export default async function DocumentPage({ params }: Props) {
  const r = resource((await params).id);
  const pdf = pdfPath(r.id);
  const meta = [r.number, formatDate(r.date)].filter(Boolean).join(" · ");

  return (
    <>
      <Breadcrumbs
        trail={[
          { name: "Resources", href: "/resources" },
          { name: shortName(r), href: docPath(r.id) },
        ]}
      />
      <div className="page-hero doc-hero">
        <div className="wrap">
          <h1>{r.title}</h1>
          {meta && <p className="doc-meta">{meta}</p>}
          <div className="doc-tags">
            <span className="tag">{CATEGORY_TAGS[r.category]}</span>
            <span className="tag tag-g">{KIND_TAGS[r.kind]}</span>
            {r.status === "draft" && <span className="tag tag-d">Draft</span>}
          </div>
          <div className="doc-actions">
            <a className="btn btn-light" href={pdf} download>
              Download PDF
            </a>
            <a className="btn btn-outline" href={pdf} target="_blank" rel="noopener">
              Open PDF in new tab
            </a>
          </div>
        </div>
      </div>
      <section className="sec doc-sec">
        <div className="wrap">
          <PdfViewer src={pdf} />
        </div>
      </section>
    </>
  );
}
