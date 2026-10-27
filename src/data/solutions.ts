// AI solutions we offer. Shared by the Home and Services pages and the footer.
import type { IconName } from "../components/Icon";

export type Solution = { icon: IconName; title: string; desc: string; proof: string };

export const solutions: Solution[] = [
  {
    icon: "chat",
    title: "AI Assistants & Chatbots",
    desc: "Assistants that answer questions from your documents, policies or data, and show the source for every answer.",
    proof: "Hey Markham answers residents' questions from publicly available city data.",
  },
  {
    icon: "clipboardCheck",
    title: "AI-Assisted Review & Scoring",
    desc: "Score, grade or triage submissions against your own criteria, with a person approving every result.",
    proof: "DeepRubric grades programming assignments against professors' rubrics.",
  },
  {
    icon: "search",
    title: "Detection & Risk Analysis",
    desc: "Find similarities, anomalies and risks hidden in large volumes of documents, code or records.",
    proof: "CodeProvenance detects code similarity and AI-written code.",
  },
  {
    icon: "automation",
    title: "Planning & Workflow Automation",
    desc: "Replace spreadsheets and manual steps with rule-driven systems your staff can trust.",
    proof: "Our workload platform runs course assignments and term planning.",
  },
  {
    icon: "chartBar",
    title: "Analytics & Decision Support",
    desc: "Turn data, news and signals into analysis your team can act on, with the reasoning visible.",
    proof: "AlphOpt combines market data, news and sentiment for strategy analysis.",
  },
  {
    icon: "puzzle",
    title: "AI Inside Your Existing Systems",
    desc: "Add AI to the tools you already use, such as your website, learning platform, CRM or internal apps.",
    proof: "Cloud or on-premises, built to fit your stack and your policies.",
  },
];
