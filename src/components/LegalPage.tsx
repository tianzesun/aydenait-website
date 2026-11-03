import type { ReactNode } from "react";

// Shared layout for the Security, Privacy and Terms pages. Their text is plain h2, p and ul elements, styled here,
// and the first paragraph is shown as the lead.
const LegalPage = ({ label, title, updated, children }: { label: string; title: string; updated: string; children: ReactNode }) => (
  <article className="bg-[#0b1120] text-blue-100">
    <header className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.12),transparent_65%)]" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-16">
        <p className="text-sm font-medium text-cyan-300 mb-4">{label}</p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">{title}</h1>
        <p className="text-sm text-blue-300">Last updated: {updated}</p>
      </div>
    </header>

    <div className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-12 gap-6 py-16">
        <div
          className="lg:col-span-8 lg:col-start-5 text-lg leading-relaxed text-blue-200
            [&>p:first-child]:text-2xl [&>p:first-child]:text-white [&>p:first-child]:mb-8
            [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:pt-10 [&_h2]:border-t [&_h2]:border-white/10
            [&_li]:mb-2 [&_li]:marker:text-cyan-400
            [&_a]:text-cyan-300 [&_a]:underline-offset-4 [&_a:hover]:text-white"
        >
          {children}
        </div>
      </div>
    </div>
  </article>
);

export default LegalPage;
