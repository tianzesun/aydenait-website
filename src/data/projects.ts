// Projects we've built. Shared by the Home and Portfolio pages.
// Keep claims here to what the client has approved for public use.
export type Project = {
  title: string;
  sector: "Higher Education" | "Civic Services" | "Financial Services";
  status?: string;
  summary: string;
  desc: string;
  highlights: string[];
  // Images live in public/projects/. Use demo data only: no real student, staff or client details.
  screenshots?: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    title: "Faculty Workload Management System",
    sector: "Higher Education",
    status: "In use at the University of Toronto",
    summary: "Course assignments, workload tracking and term planning for academic departments.",
    desc: "A workload management platform for a department at the University of Toronto Scarborough, covering Computer Science, Mathematics, and Statistics.",
    highlights: ["Course assignments and term planning", "Faculty workload and service-role tracking", "Policy-based workload calculations"],
  },
  {
    title: "CodeProvenance",
    sector: "Higher Education",
    status: "In use at the University of Toronto",
    summary: "Code similarity and AI-authorship detection that produces evidence, not just a score.",
    desc: "Code similarity and AI-authorship detection for schools and universities. The output isn't just a score: it's evidence a faculty member can act on and a committee can defend.",
    highlights: ["Multiple similarity engines combined by a learned fusion model", "AI-generated code detector", "Professor-facing review workspace"],
  },
  {
    title: "DeepRubric",
    sector: "Higher Education",
    status: "In use at the University of Toronto",
    summary: "AI-assisted, rubric-based grading for programming courses, with a human in the loop.",
    desc: "An AI-assisted grading platform for programming courses. Professors build rubrics, students submit code, and an AI pipeline scores each submission against the rubric criteria.",
    highlights: ["Human-in-the-loop review of every score", "Academic-integrity checks", "Course and rubric analytics"],
  },
  {
    title: "Hey Markham",
    sector: "Civic Services",
    summary: "A conversational assistant that answers residents' questions from official city data.",
    desc: "An AI city-services assistant built on the City of Markham's official data. Residents ask questions in plain language and get fast, accurate answers they can trace back to the source.",
    highlights: ["Conversational access to city information", "Answers grounded in official municipal data", "Source citations for every answer"],
  },
  {
    title: "AlphOpt",
    sector: "Financial Services",
    summary: "Options-strategy analysis and risk management with news and sentiment AI.",
    desc: "An AI options-strategy analysis and risk-management system built on a modern stack. It provides intelligent signal analysis for research and decision support; it does not execute trades.",
    highlights: ["News-analysis AI agent", "Multimodal market-sentiment analyzer", "Real-time sentiment quantification for strategy analysis"],
  },
];
