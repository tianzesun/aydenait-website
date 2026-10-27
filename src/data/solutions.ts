// AI solutions we offer. Shared by the Home and Services pages, the service pages and the footer.
import type { IconName } from "../components/Icon";

export type Solution = {
  icon: IconName;
  title: string;
  desc: string;
  proof: string;
  // Detail page at /services/<slug> (also add the URL to public/sitemap.xml)
  slug: string;
  useCases: { title: string; text: string }[];
  // Slug of the product in src/data/projects.ts that shows this work, if there is one
  relatedProduct?: string;
};

export const solutions: Solution[] = [
  {
    icon: "chat",
    title: "AI Assistants & Chatbots",
    desc: "Assistants that answer questions from your documents, policies or data, and show the source for every answer.",
    proof: "Hey Markham answers residents' questions from publicly available city data.",
    slug: "ai-assistants",
    relatedProduct: "hey-markham",
    useCases: [
      { title: "Student and staff assistants", text: "Answer questions from your official policies and course material, with the source shown for every answer." },
      { title: "Resident and public information", text: "Help residents find accurate answers in official public data, without replacing the sources they rely on." },
      { title: "Internal knowledge assistants", text: "Help your staff find answers in your own documents, policies and data instead of searching by hand." },
      { title: "On the tools you already use", text: "Add the assistant to your website, learning platform or internal applications." },
    ],
  },
  {
    icon: "clipboardCheck",
    title: "AI-Assisted Review & Scoring",
    desc: "Score, grade or triage submissions against your own criteria, with a person approving every result.",
    proof: "DeepRubric grades programming assignments against professors' rubrics.",
    slug: "ai-review-scoring",
    relatedProduct: "deeprubric",
    useCases: [
      { title: "Grading against your rubric", text: "Rubric-based scoring for programming and written work, with instructor review before any mark is released." },
      { title: "Triage against your criteria", text: "Score or sort incoming submissions against criteria you define, so staff see what needs attention first." },
      { title: "Consistency analytics", text: "See where results are inconsistent across reviewers, criteria and groups." },
      { title: "A person approves every result", text: "The AI proposes a score with its reasoning; your staff decide the outcome." },
    ],
  },
  {
    icon: "search",
    title: "Detection & Risk Analysis",
    desc: "Find similarities, anomalies and risks hidden in large volumes of documents, code or records.",
    proof: "CodeProvenance detects code similarity and AI-written code.",
    slug: "detection-risk-analysis",
    relatedProduct: "codeprovenance",
    useCases: [
      { title: "Academic integrity", text: "Code similarity and AI-authorship detection that produces reviewable evidence, not just a percentage." },
      { title: "Similarity across large collections", text: "Find matching or closely related content across large volumes of documents, code or records." },
      { title: "Anomaly and risk flags", text: "Highlight unusual items for a person to review, instead of leaving them buried in the data." },
      { title: "Evidence you can defend", text: "Every flag comes with the evidence behind it, so decisions can be explained and reviewed." },
    ],
  },
  {
    icon: "automation",
    title: "Planning & Workflow Automation",
    desc: "Replace spreadsheets and manual steps with rule-driven systems your staff can trust.",
    proof: "Our workload platform runs course assignments and term planning.",
    slug: "workflow-automation",
    relatedProduct: "faculty-workload",
    useCases: [
      { title: "Workload and term planning", text: "Course assignments, service roles and policy-based workload calculations in one place." },
      { title: "Rules from your own policies", text: "Calculations follow your organization's rules, so every result can be traced back to the rule behind it." },
      { title: "Replace spreadsheets and manual steps", text: "Move recurring work out of spreadsheets and email into a system that keeps everything current." },
      { title: "Decisions stay with your staff", text: "The system does the calculations and paperwork; people make the decisions." },
    ],
  },
  {
    icon: "chartBar",
    title: "Analytics & Decision Support",
    desc: "Turn data, news and signals into analysis your team can act on, with the reasoning visible.",
    proof: "AlphOpt combines market data, news and sentiment for strategy analysis.",
    slug: "analytics-decision-support",
    relatedProduct: "alphopt",
    useCases: [
      { title: "Market, news and sentiment analysis", text: "Combine market data, news and sentiment into analysis that supports research and decisions." },
      { title: "Learning analytics", text: "Course and rubric analytics that show where students struggle and where grading is inconsistent." },
      { title: "Analysis of your own data", text: "Turn the data your organization already collects into analysis your team can act on." },
      { title: "Reasoning you can see", text: "Results show how they were reached, so your team can check them before acting." },
    ],
  },
  {
    icon: "puzzle",
    title: "AI Inside Your Existing Systems",
    desc: "Add AI to the tools you already use, such as your website, learning platform, CRM or internal apps.",
    proof: "Cloud or on-premises, built to fit your stack and your policies.",
    slug: "ai-integration",
    useCases: [
      { title: "Websites and learning platforms", text: "Add AI features to your website or learning management system." },
      { title: "Identity and student systems", text: "Connect with the identity provider and student systems you already run, so staff sign in the way they do today." },
      { title: "CRMs and internal applications", text: "Bring AI into the CRM and internal tools your team already uses every day." },
      { title: "Cloud or on premises", text: "Deploy where your policies require, built to fit your technology stack." },
    ],
  },
];

// How an engagement runs. Shared by the Home page and the service pages.
export const engagementSteps = [
  { title: "Free Consultation", desc: "A 30-minute conversation about your objectives, data and constraints." },
  { title: "Assessment & Proposal", desc: "A written recommendation covering scope, timeline, cost and risks." },
  { title: "Pilot", desc: "A working prototype on your own use case, so results can be evaluated before further investment." },
  { title: "Launch & Support", desc: "Production deployment, staff training, and ongoing monitoring and improvement." },
];
