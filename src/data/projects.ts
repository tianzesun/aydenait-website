// Projects we've built. Shared by the Home and Portfolio pages.
// Keep claims here to what the client has approved for public use.
export type Project = {
  title: string;
  sector: "Higher Education" | "Civic Services" | "Financial Services";
  summary: string;
  desc: string;
  highlights: string[];
  // Images live in public/projects/. Use demo data only: no real student, staff or client details.
  screenshots?: { src: string; alt: string }[];
  // Optional detail page at /portfolio/<slug> (also add the URL to public/sitemap.xml).
  // Sections left out are not shown, so only fill in what has been approved for publication.
  productPage?: {
    slug: string;
    challenge: string[];
    approach: { title: string; text: string }[];
    humanReview: string;
    // Where it is in use, e.g. "In use at ..." — only with that institution's approval
    deployment?: string;
    // Measured outcomes only, e.g. { value: "40%", label: "less time per review" }
    results?: { value: string; label: string }[];
    // Only with the person's written approval
    quote?: { text: string; name: string; role: string };
  };
};

export const projects: Project[] = [
  {
    title: "Faculty Workload Management System",
    sector: "Higher Education",
    summary: "Course assignments, workload tracking and term planning for academic departments.",
    desc: "A workload management platform for a department at the University of Toronto Scarborough, covering Computer Science, Mathematics, and Statistics.",
    highlights: ["Course assignments and term planning", "Faculty workload and service-role tracking", "Policy-based workload calculations"],
  },
  {
    title: "CodeProvenance",
    sector: "Higher Education",
    summary: "Code similarity and AI-authorship detection that produces evidence, not just a score.",
    desc: "Code similarity and AI-authorship detection for schools and universities. The output isn't just a score: it's evidence a faculty member can act on and a committee can defend.",
    highlights: ["Multiple similarity engines combined by a learned fusion model", "AI-generated code detector", "Professor-facing review workspace"],
    productPage: {
      slug: "codeprovenance",
      challenge: [
        "Programming courses now face two integrity questions at once: whether submissions were copied from each other, and whether they were written by AI.",
        "A similarity score on its own doesn't answer either question. Faculty need evidence they can act on, and an academic-integrity committee needs a case it can defend.",
      ],
      approach: [
        { title: "Several similarity engines, one result", text: "Multiple similarity engines compare each submission, and a learned fusion model combines their signals into a single result." },
        { title: "AI-authorship detection", text: "A dedicated detector flags code that is likely to be AI-generated, alongside the similarity results." },
        { title: "A review workspace for professors", text: "Professors work through flagged cases in a review workspace built for faculty, with the evidence behind each result in front of them." },
      ],
      humanReview: "CodeProvenance flags cases; people decide them. A faculty member reviews the evidence before anything goes further, and the outcome rests with the instructor and the institution's own integrity process.",
    },
  },
  {
    title: "DeepRubric",
    sector: "Higher Education",
    summary: "AI-assisted, rubric-based grading for programming courses, with a human in the loop.",
    desc: "An AI-assisted grading platform for programming courses. Professors build rubrics, students submit code, and an AI pipeline scores each submission against the rubric criteria.",
    highlights: ["Human-in-the-loop review of every score", "Academic-integrity checks", "Course and rubric analytics"],
  },
  {
    title: "Hey Markham",
    sector: "Civic Services",
    summary: "A conversational assistant that answers residents' questions from publicly available city data.",
    desc: "An AI city-services assistant built on the City of Markham's publicly available data. Residents ask questions in plain language and get fast, accurate answers they can trace back to the source. An independent project, not affiliated with or endorsed by the City of Markham.",
    highlights: ["Conversational access to city information", "Answers grounded in published municipal data", "Source citations for every answer"],
  },
  {
    title: "AlphOpt",
    sector: "Financial Services",
    summary: "Options-strategy analysis and risk management with news and sentiment AI.",
    desc: "An AI options-strategy analysis and risk-management system built on a modern stack. It provides intelligent signal analysis for research and decision support; it does not execute trades.",
    highlights: ["News-analysis AI agent", "Multimodal market-sentiment analyzer", "Real-time sentiment quantification for strategy analysis"],
  },
];
