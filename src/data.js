/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ================================================================== */

export const PROFILE = {
  first: "Jay",
  last: "Pindipol",
  fullName: "Jay Pindipol",
  tagline: "Multi-Instrumentalist • Section Leader • Honors Musician",
  location: "North Brunswick, New Jersey",
  email: "",
  phone: "",
  bio: [
    "I believe that growth comes from consistency. Whether performing on the marching field, leading my section through rehearsals, or tackling challenging coursework, I strive to approach every opportunity with focus, curiosity, and a commitment to continuous improvement.",
    "Music has shaped the way I think—teaching me discipline, collaboration, and resilience—while my interest in economics and physics has strengthened my analytical mindset. Beyond the classroom, I enjoy contributing to my community through service initiatives and value experiences that allow me to learn, lead, and make a meaningful impact.",
    "I am driven by the pursuit of continuous improvement and the opportunity to contribute to something larger than myself. Whether performing as part of an ensemble, leading my peers, or solving complex problems, I value dedication, collaboration, and purposeful growth.",
  ],
  quote:
    "Music has shown me that excellence is never achieved alone. Every rehearsal, every performance, and every leadership opportunity has reinforced the importance of preparation, trust, and working toward a common goal.",
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    codeforces: "",
    fide: "",
    imo: "",
    wespa: "",
    twitter: "",
  },
  cv: "/placeholder.jpg",
  photo: "/placeholder.png",
  aboutPhoto: "/about_photo.jpeg",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Work Experience", to: "/work" },
      { label: "Areas of Interest", to: "/publications" },
    ],
  },

  { label: "Achievements", to: "/awards" },
  { label: "Community & Leadership", to: "/volunteering" },
  { label: "Musical Journey", to: "/sports" },
];

/* ---- Experience (renders as "Involvement & Leadership" cards) ---- */

export const EXPERIENCE = [
  {
    slug: "interact-rotary-club",
    role: "Member",
    org: "Interact Rotary Club",
    logo: "/logos/interact-rotary.png",
    location: "North Brunswick, New Jersey",
    dates: "Since 2022",
    meta: "Since 2022 · North Brunswick, New Jersey ·",
    badge: "Community Service",
    desc: "Contributed to community initiatives while developing leadership, empathy, and a strong sense of civic responsibility through ongoing service work.",
    bullets: [
      "Worked alongside volunteers on a community clean-up initiative to improve local public spaces",
      "Helped organize a blood donation drive encouraging participation in life-saving campaigns",
      "Volunteered with senior citizens through elder care outreach, fostering compassion and connection",
    ],
    tags: ["Community Service", "Leadership", "Civic Responsibility", "Volunteering"],
    featured: true,
  },
  {
    slug: "section-leader-wind-ensemble",
    role: "Section Leader",
    org: "School Band Program — Honors Wind Ensemble",
    logo: "/logos/band-program.png",
    location: "North Brunswick, New Jersey",
    dates: "Ongoing",
    meta: "Ongoing · North Brunswick, New Jersey ·",
    badge: "Leadership",
    desc: "Selected to guide and mentor fellow musicians, helping coordinate rehearsals, support section members, and foster a collaborative ensemble environment as one of only two tuba players in a school of nearly 2,000 students.",
    bullets: [
      "Led and mentored fellow musicians as a selected Section Leader",
      "Chosen for the Honors Wind Ensemble in recognition of musical proficiency and dedication",
      "Completed four years of continuous participation across marching, jazz, percussion, and concert ensembles",
    ],
    tags: ["Section Leadership", "Mentoring", "Ensemble Performance", "Discipline"],
    featured: true,
  },
];

/* ---- Projects (renders as "Community Initiatives") ---- */

export const PROJECTS = [
  {
    name: "Community Clean-Up Initiative",
    org: "Interact Rotary Club",
    meta: "Since 2022",
    desc: "Worked alongside volunteers to improve local public spaces and promote environmental stewardship.",
    tags: ["Community Service", "Environmental Stewardship", "Teamwork"],
    featured: true,
  },
  {
    name: "Blood Donation Drive",
    org: "Interact Rotary Club",
    meta: "Since 2022",
    desc: "Supported the organization of community blood donation campaigns, encouraging participation in life-saving initiatives.",
    tags: ["Community Organizing", "Public Health Advocacy"],
    featured: true,
  },
  {
    name: "Elder Care Outreach",
    org: "Interact Rotary Club",
    meta: "Since 2022",
    desc: "Volunteered with senior citizens through engagement activities that fostered compassion, respect, and meaningful connections.",
    tags: ["Community Care", "Empathy", "Outreach"],
    featured: false,
  },
  {
    name: "Social Outreach Programs",
    org: "Interact Rotary Club",
    meta: "Since 2022",
    desc: "Participated in service initiatives addressing community needs through collaboration, volunteering, and collective action.",
    tags: ["Service", "Collaboration", "Community Impact"],
    featured: false,
  },
];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "🎼",
    title: "Honors Wind Ensemble",
    meta: "School Band Program",
    detail: "Chosen for advanced ensemble participation in recognition of musical proficiency and dedication.",
    link: "",
    featured: true,
  },
  {
    icon: "🎵",
    title: "One of Two Tuba Players",
    meta: "School of nearly 2,000 students",
    detail: "Served in a unique role supporting one of New Jersey's largest high school band programs as one of only two tuba players in the school.",
    link: "",
    featured: true,
  },
  {
    icon: "📚",
    title: "AP Music Theory",
    meta: "Academic Excellence",
    detail: "Achieved outstanding performance in advanced music studies, complementing a rigorous AP and Honors curriculum spanning Mathematics, Physics, Economics, English, History, and Music.",
    link: "",
    featured: false,
  },
];

/* ---- Areas of Interest ---- */

export const ARTICLES = [
  {
    title: "Music & Multi-Instrument Performance",
    outlet: "Tuba, saxophone, and percussion across concert, marching, jazz, and percussion ensembles",
    link: "",
  },
  {
    title: "Leadership & Mentorship",
    outlet: "Guiding and mentoring fellow musicians as a selected Section Leader",
    link: "",
  },
  {
    title: "Economics & Physics",
    outlet: "Analytical interests that strengthen problem-solving alongside a rigorous AP and Honors curriculum",
    link: "",
  },
  {
    title: "Community Service & Civic Engagement",
    outlet: "Volunteering through Interact Rotary Club on clean-up, outreach, and donation initiatives",
    link: "",
  },
];

/* ---- Leadership, community & personal growth ---- */

export const VOLUNTEER = {
  stats: [
    { value: "4", label: "Years of Continuous Music Participation" },
    { value: "3", label: "Instruments Played" },
    { value: "2022", label: "Interact Rotary Member Since" },
  ],
  orgs: [
    {
      name: "Community Clean-Up Initiative",
      role: "Interact Rotary Club · Since 2022",
      desc: "Worked alongside volunteers to revitalize local public spaces, contributing to community-driven initiatives that fostered environmental awareness, sustainability, and neighborhood well-being.",
    },
    {
      name: "Blood Donation Drive",
      role: "Interact Rotary Club · Since 2022",
      desc: "Contributed to the successful organization of community blood donation campaigns by supporting event coordination, volunteer efforts, and public awareness initiatives that encouraged greater participation.",
    },
    {
      name: "Elder Care Outreach",
      role: "Interact Rotary Club · Since 2022",
      desc: "Engaged with senior citizens through volunteer activities that encouraged companionship, strengthened community bonds, and fostered empathy, respect, and meaningful human connections.",
    },
    {
      name: "Social Outreach Programs",
      role: "Interact Rotary Club · Since 2022",
      desc: "Actively participated in service initiatives focused on addressing community needs through teamwork, volunteer efforts, and collective action, contributing to positive and lasting community impact.",
    },

  ],
};

/* ---- Musical Journey (renders on the /sports route) ---- */

export const SPORTS = [
  {
    icon: "🎵",
    name: "Music — Multi-Instrumentalist",
    desc: "Music has been the cornerstone of my high school experience, shaping the way I lead, collaborate, and pursue excellence. My primary instrument is tuba, and I also perform on saxophone and percussion across concert, marching, jazz, and percussion ensembles — one of only two tuba players in a school of nearly 2,000 students.",
  },
  {
    icon: "🏕",
    name: "Training & Commitment",
    desc: "Annual Summer Marching Rehearsal Program preseason training focused on musical preparation, marching precision, and ensemble coordination, alongside Summer Band Camp — an intensive full-day program dedicated to advanced field drills, sectional rehearsals, leadership development, and performance readiness.",
  },
  {
    icon: "🎤",
    name: "Performance Experience",
    desc: "Performed at football season halftime shows, school concerts and music showcases, orchestra and choir concerts, graduation ceremonies, and community parades — across Marching Band, Honors Wind Ensemble, Jazz Band, and Winter Percussion Ensemble.",
  },
];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Music",
    items: ["Tuba", "Saxophone", "Percussion", "Ensemble Performance"],
  },
  {
    group: "Leadership & Community",
    items: ["Section Leadership", "Mentoring", "Rehearsal Coordination", "Community Service", "Event Organization"],
  },
  {
    group: "Academic Interests",
    items: ["Economics", "Physics", "Analytical Thinking"],
  },
  {
    group: "Core Strengths",
    items: ["Discipline", "Collaboration", "Resilience", "Composure Under Pressure", "Continuous Improvement"],
  },
];

/* ---- Education ---- */

export const EDUCATION = [
  {
    school: "",
    location: "North Brunswick, New Jersey",
    level: "Rigorous AP & Honors Curriculum",
    dates: "",
    gpa: "",
    coursework: ["AP Music Theory", "Mathematics", "Physics", "Economics", "English", "History", "Music"],
  },
];

export const TEST_SCORES = [];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work Experience", to: "/work" },
  { label: "Areas of Interest", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Leadership & Community", to: "/volunteering" },
  { label: "Musical Journey", to: "/sports" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
];
