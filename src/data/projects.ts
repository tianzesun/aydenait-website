// Products we've built. Shared by the Home and Products pages.
// Keep claims here to what has been approved for public use.
export type Project = {
  title: string;
  sector: "Higher Education" | "Civic Services" | "Financial Services";
  summary: string;
  desc: string;
  highlights: string[];
  // Where it is in use, shown on the card and product page. Only with that institution's approval.
  deployment?: string;
  // Release stage when it isn't in full production yet, e.g. "Pilot" or "Beta"
  stage?: string;
  // Public live site or demo, linked from the card and product page
  liveUrl?: string;
  // Images live in public/projects/. Use demo data only: no real student, staff or client details.
  screenshots?: { src: string; alt: string }[];
  // Optional detail page at /products/<slug> (also add the URL to public/sitemap.xml).
  // Sections left out are not shown, so only fill in what has been approved for publication.
  productPage?: {
    slug: string;
    challenge: string[];
    approach: { title: string; text: string }[];
    humanReview: string;
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
    desc: "A workload management platform for academic departments, built for a department covering Computer Science, Mathematics and Statistics.",
    highlights: ["Course assignments and term planning", "Faculty workload and service-role tracking", "Policy-based workload calculations"],
    productPage: {
      slug: "faculty-workload",
      challenge: [
        "Every term, academic departments have to assign courses, track service roles and keep each faculty member's teaching load in line with workload policy.",
        "When that work lives in spreadsheets and manual steps, it is slow to update and hard to check, and a mistake affects real people's workloads.",
      ],
      approach: [
        { title: "Course assignments and term planning", text: "Departments plan each term and assign courses in one system instead of separate spreadsheets." },
        { title: "Workload and service-role tracking", text: "Teaching and service roles are tracked for each faculty member, so current workloads are always visible." },
        { title: "Policy-based calculations", text: "Workloads are calculated from the department's own policy rules, including releases, bonuses and overload checks, so every result can be traced back to the rule behind it." },
        { title: "What-if planning", text: "Chairs can model future terms before committing, and see the effect on every faculty member's workload." },
        { title: "Approvals and reports", text: "Assignments move from draft to submitted to approved, and the system produces the reports and letters a dean's office needs." },
      ],
      humanReview: "The system does the calculations; people make the decisions. Course assignments and workload decisions stay with the department.",
    },
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
        { title: "Several similarity engines, one result", text: "Eight similarity signals, from syntax-tree and code-flow comparison to fingerprints and code embeddings, are combined by a learned fusion model into a single result." },
        { title: "AI-authorship detection", text: "A dedicated detector flags code that is likely to be AI-generated, reported in likelihood bands with an honest confidence level." },
        { title: "A review workspace for professors", text: "Professors work through a risk-ordered queue with side-by-side comparison and an explanation of what each engine found." },
        { title: "Evidence a committee can use", text: "Each case produces a per-student evidence file and a printable report with a clear evidence chain, ready for the institution's integrity process." },
      ],
      results: [
        { value: "21.3% → 2.3%", label: "false positives on human-written student code, after retraining the AI detector (internal benchmark)" },
        { value: "8", label: "similarity signals combined into one evidence-backed result" },
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
    productPage: {
      slug: "deeprubric",
      challenge: [
        "Grading a large programming course fairly takes a great deal of time, and keeping marks consistent across many submissions and graders is hard.",
        "AI can speed up grading, but a score nobody has checked is not one a professor can stand behind.",
      ],
      approach: [
        { title: "Professors build the rubric", text: "Each assignment is graded against criteria the professor defines, not a generic model of good code." },
        { title: "AI scores every submission", text: "An AI pipeline scores each submission against the rubric criteria, with academic-integrity checks alongside." },
        { title: "Grading as a team", text: "Professors, teaching assistants and graders work on the same course at once, each with the access their role needs." },
        { title: "Course and rubric analytics", text: "Analytics show where students struggle and where grading is inconsistent, across the course and each rubric." },
      ],
      humanReview: "Every score is reviewed by a person. The AI proposes a score against the rubric; the professor and teaching team decide the grade.",
    },
  },
  {
    title: "ExamFlow",
    sector: "Higher Education",
    stage: "Pilot",
    summary: "Exam administration: rosters, seating and personalized exam documents.",
    desc: "An exam administration system that simplifies exam preparation, seating assignment and personalized exam documents. It works alongside Crowdmark rather than replacing it.",
    highlights: ["Roster import and automatic seating", "Personalized exam PDFs with QR verification", "Seating maps, signature lists and exam-day packages"],
    productPage: {
      slug: "examflow",
      challenge: [
        "Before every exam, staff build rosters, assign seats, prepare a personalized paper for each student and print signature lists and room maps.",
        "Done by hand for large courses, that work takes days, and a single mismatch between a student, a seat and a paper causes problems on exam day.",
      ],
      approach: [
        { title: "Rosters and rooms", text: "Import the student roster, set up rooms and seats, and let ExamFlow assign seating automatically." },
        { title: "Personalized exam papers", text: "Generate a PDF for each student from the Crowdmark template, with a QR code that can be verified on the day." },
        { title: "Everything for exam day", text: "Seating maps, signature lists and a complete administration package are produced in one step." },
      ],
      humanReview: "ExamFlow prepares the documents; staff check and approve them. Access is limited by role, and every action is recorded in an audit log.",
    },
  },
  {
    title: "Hey Markham",
    sector: "Civic Services",
    summary: "A conversational assistant that answers residents' questions from publicly available city data.",
    desc: "An AI city-services assistant built on the City of Markham's publicly available data. Residents ask questions in plain language and get fast, accurate answers they can trace back to the source. An independent project, not affiliated with or endorsed by the City of Markham.",
    highlights: ["Conversational access to city information", "Answers grounded in published municipal data", "Source citations for every answer"],
    stage: "Beta",
    liveUrl: "https://heymarkham.vercel.app/",
    screenshots: [{ src: "/projects/hey-markham.png", alt: "Hey Markham home page with the assistant chat window" }],
    productPage: {
      slug: "hey-markham",
      challenge: [
        "City information is spread across many pages and documents, and residents often don't know where to look for a simple answer.",
        "A general-purpose chatbot can sound confident and still be wrong. Residents need answers they can check.",
      ],
      approach: [
        { title: "Ask in plain language", text: "Residents ask questions the way they would ask a person, without knowing which page or department to search." },
        { title: "Grounded in published data", text: "Answers come from the City of Markham's publicly available data, not from the model's general knowledge." },
        { title: "A source for every answer", text: "Each answer cites where it came from, so residents can go to the original information." },
        { title: "Type or just say \"Hey Markham\"", text: "Residents can ask by voice in the browser on a phone or computer, with nothing to install and no account needed." },
        { title: "No guessing", text: "If the assistant doesn't know, it says so and points residents to the City's Contact Centre." },
      ],
      results: [
        { value: "41", label: "answers checked against official sources in the beta demo, and growing" },
      ],
      humanReview: "Every answer shows its source, so residents can check it for themselves. The city's own published information remains the authority.",
    },
  },
  {
    title: "AlphOpt",
    sector: "Financial Services",
    summary: "Options-strategy analysis and risk management with news and sentiment AI.",
    desc: "An AI options-strategy analysis and risk-management system built on a modern stack. It provides intelligent signal analysis for research and decision support; it does not execute trades.",
    highlights: ["News-analysis AI agent", "Multimodal market-sentiment analyzer", "Real-time sentiment quantification for strategy analysis"],
    productPage: {
      slug: "alphopt",
      challenge: [
        "Options strategies depend on market data, news and sentiment that change by the minute, far faster than anyone can follow by hand.",
        "Signals are only useful for research if the analysis behind them is visible.",
      ],
      approach: [
        { title: "News-analysis AI agent", text: "An AI agent analyzes market news and pulls out the signals that matter for strategy analysis." },
        { title: "Multimodal sentiment analysis", text: "A market-sentiment analyzer works across multiple types of input, not only text." },
        { title: "Real-time sentiment for strategy analysis", text: "Sentiment is quantified in real time and combined with market data for options-strategy and risk analysis." },
      ],
      humanReview: "AlphOpt is for research and decision support; it does not execute trades. Every trading decision stays with the person using it.",
    },
  },
];
