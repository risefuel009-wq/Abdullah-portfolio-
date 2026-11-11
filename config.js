/* ============================================================
   ⚙️ CONFIG — كل حاجة تقدر تعدلها في الملف ده بس
   عدّل النصوص، ضيف مشاريع، غيّر روابطك — وخلاص
   ============================================================ */

const CONFIG = {

  /* ---------- البيانات الأساسية ---------- */
  name: "Abdullah Omran",
  tagline: "Operations • AI Language Evaluation • Voice",
  location: "Alexandria, Egypt",
  email: "abdullahomran.work@gmail.com",
  phone: "+20 120 770 6309",
  availability: "Open to remote opportunities worldwide 🌍",

  /* روابطك — حط اللينكات بتاعتك هنا */
  links: {
    linkedin:  "https://linkedin.com/in/YOUR-LINKEDIN",
    github:    "https://github.com/YOUR-GITHUB",
    email:     "mailto:abdullahomran.work@gmail.com",
    whatsapp:  "https://wa.me/201207706309",
  },

  /* ---------- نبذة عنك ---------- */
  about: {
    heading: "About",
    paragraphs: [
      "I'm a bilingual (Arabic/English) professional with ~5 years of combined experience across recruitment coordination, administrative & port/shipping documentation, and frontline customer service — plus hands-on work in AI text & data evaluation and Egyptian Arabic language review.",
      "I'm known for accuracy, organized record keeping, clear communication, and reliable follow-through under deadlines. An engineering background adds analytical rigor to everything I do.",
      "Native Egyptian Arabic speaker. Fast learner who picks up new tools by doing — comfortable working independently in remote, cross-cultural teams.",
    ],
    stats: [
      { number: "5+",  label: "Years Experience" },
      { number: "2",   label: "Languages" },
      { number: "3",   label: "Industries" },
      { number: "∞",   label: "Willing to Learn" },
    ],
  },

  /* ---------- المهارات ---------- */
  skills: [
    {
      icon: "⚙️",
      title: "Operations & Administration",
      items: ["Administrative support", "Document preparation & tracking", "Data entry & records management", "Process optimization", "Task & project tracking"],
    },
    {
      icon: "🤝",
      title: "Recruitment & Coordination",
      items: ["Candidate sourcing", "Screening support", "Interview scheduling", "Calendar & inbox management", "Stakeholder coordination"],
    },
    {
      icon: "💬",
      title: "Customer Support",
      items: ["Frontline customer service", "Bilingual Arabic/English support", "Accurate transaction handling", "Professional communication"],
    },
    {
      icon: "🤖",
      title: "AI & Language Evaluation",
      items: ["AI-assisted writing & prompting", "Response ranking & RLHF-style evaluation", "Text/data labeling & QA", "Egyptian Arabic dialect evaluation", "Translation & proofreading"],
    },
    {
      icon: "🎙️",
      title: "Voice & Audio",
      items: ["Egyptian Arabic voice recording", "Natural conversational delivery", "Pronunciation accuracy", "Audio editing"],
    },
    {
      icon: "📊",
      title: "Data & Reporting",
      items: ["Excel / Google Sheets", "Formulas & pivot tables", "Basic data visualization", "Reporting"],
    },
  ],

  /* ---------- الخبرات ---------- */
  experience: [
    {
      role: "Recruitment Coordinator",
      company: "Recruitment Operations",
      period: "Mar 2024 – Sep 2026",
      points: [
        "Coordinated end-to-end recruitment — sourcing, screening support, and interview scheduling across multiple stakeholders.",
        "Screened and organized candidate information against role requirements, documenting decisions clearly.",
        "Maintained accurate candidate and hiring records in shared digital systems (CRM-style).",
      ],
    },
    {
      role: "Administrative / Documentation Support",
      company: "Port & Shipping Office",
      period: "Mar 2023 – Mar 2024",
      points: [
        "Handled shipping and logistics paperwork with high accuracy and attention to detail.",
        "Tracked and moved documents between offices, ensuring timely, error-free processing.",
        "Managed records and data in coordination with the team.",
      ],
    },
    {
      role: "Cashier — Customer Service",
      company: "Fahmy Restaurant",
      period: "Sep 2021 – Mar 2023",
      points: [
        "Delivered frontline bilingual-ready customer service in a fast-paced environment.",
        "Handled transactions accurately while maintaining a positive, professional experience.",
      ],
    },
  ],

  /* ---------- التطوع ---------- */
  volunteer: [
    {
      role: "Business Development Team Member",
      org: "AIESEC Egypt",
      period: "Summer 2026 – Present",
      desc: "Supporting outreach, partnership-building, and communication with prospective partners within a structured international organization.",
    },
    {
      role: "Volunteer",
      org: "Green Society",
      period: "Winter 2025 – 2026",
      desc: "Contributed to community and environmental initiatives.",
    },
  ],

  /* ---------- المشاريع ----------
     💡 عشان تضيف مشروع جديد: انسخ بلوك زي اللي تحت، غيّر البيانات، خلاص.
     💡 عشان تشيل مشروع: امسح البلوك بتاعه.
  */
  projects: [
    {
      emoji: "🤖",
      title: "Egyptian Arabic AI Dataset Review",
      category: "AI Language Evaluation",
      desc: "Reviewed and evaluated AI-generated Egyptian Arabic responses for naturalness, dialect accuracy, and cultural nuance. Ranked outputs and provided RLHF-style feedback used to improve model quality.",
      tags: ["RLHF", "Egyptian Arabic", "QA", "Annotation"],
      link: "",
    },
    {
      emoji: "🎙️",
      title: "Egyptian Arabic Voice Sample Library",
      category: "Voice Acting",
      desc: "Independently recorded a personal library of Egyptian Arabic voice material across topics and tones — conversational, narrative, and promotional — with self-review, re-recording, and audio editing.",
      tags: ["Voice Over", "Egyptian Dialect", "Audio Editing"],
      link: "",
    },
    {
      emoji: "📋",
      title: "End-to-End Recruitment Coordination System",
      category: "Operations",
      desc: "Built and maintained a structured candidate tracking workflow using Google Workspace — from sourcing and screening to interview scheduling — keeping stakeholder calendars and records organized across multiple open roles.",
      tags: ["Recruitment", "Google Workspace", "Coordination"],
      link: "",
    },
    {
      emoji: "📦",
      title: "Port Documentation Accuracy Workflow",
      category: "Administration",
      desc: "Managed shipping and logistics documentation with a zero-error mindset — tracking document flow between offices and maintaining organized digital records for fast retrieval.",
      tags: ["Documentation", "Logistics", "Records Management"],
      link: "",
    },
    {
      emoji: "📊",
      title: "Excel Data Analysis Dashboards",
      category: "Data & Reporting",
      desc: "Built Excel dashboards with formulas and pivot tables to organize operational data and produce clear, decision-ready reports. (Certification in progress — Alison.)",
      tags: ["Excel", "Pivot Tables", "Reporting"],
      link: "",
    },
    {
      emoji: "🌍",
      title: "AIESEC Partnership Outreach",
      category: "Business Development",
      desc: "Supporting partner outreach and communication for AIESEC Egypt — drafting messages, following up with prospective partners, and representing the organization professionally.",
      tags: ["Outreach", "Communication", "AIESEC"],
      link: "",
    },
  ],

  /* ---------- التعليم والشهادات ---------- */
  education: {
    degree: "Bachelor of Engineering — In Progress (2025–Present)",
    school: "Higher Institute of Engineering and Technology, King Mariout",
    certs: [
      "Basics of Data Analysis with Excel — Alison (In Progress)",
      "Social Media Marketing Certification — HubSpot Academy (In Progress)",
    ],
  },

  /* ---------- اللغات ---------- */
  languages: [
    { name: "Arabic", level: "Native (Egyptian dialect & MSA)", percent: 100 },
    { name: "English", level: "Strong reading & listening; developing spoken fluency", percent: 75 },
  ],

  /* ---------- الأدوات ---------- */
  tools: ["Google Workspace", "Microsoft Office", "Notion", "Trello", "Slack", "Calendly", "Canva", "ChatGPT", "Claude", "Gemini", "Python (basic)", "Audio Editing"],

  /* ---------- قسم التواصل ---------- */
  contact: {
    heading: "Let's Work Together",
    text: "Looking for a reliable bilingual professional for operations, AI language evaluation, customer support, or voice work? I'd love to hear from you.",
  },
};
