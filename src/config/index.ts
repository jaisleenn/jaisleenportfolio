import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Jaisleen Nijjar — Marketing Student",
  author: "Jaisleen Nijjar",
  description:
    "Based in San Jose, CA, I'm focused on building impactful campaigns through strategy, content, and data. I've gained experience supporting go-to-market initiatives, lead generation, and data-informed decision-making, and I'm eager to continue learning across all areas of marketing.",
  lang: "en",
  siteLogo: "/jaisleen-small.png",
  navLinks: [
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/jaisleen-nijjar/" },
  
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Jaisleen Nijjar",
    specialty: "Marketing Student",
    summary:
      "I'm a marketing student based in San Jose, CA, focused on building impactful campaigns through strategy, content, and data. I've gained experience supporting go-to-market initiatives, lead generation, and data-informed decision-making, and I'm eager to continue learning across all areas of marketing.",
    email: "jaisleen.nijjar@sjsu.edu",
  },
  experience: [
    {
      company: "Cohesity",
      position: "Project Manager",
      startDate: "Aug 2025",
      endDate: "Dec 2025",
      summary: [
        "Managed a team of 8 consultants through a 10-week digital strategy engagement, driving structured workstreams and on-time delivery aligned with client objectives.",
        "Led comprehensive market research and competitive analyses (TikTok, LinkedIn, event marketing), synthesizing insights into data-backed recommendations to elevate Cohesity’s Gen Z and enterprise engagement strategy.",
        "Served as the primary client-facing lead, translating research findings into strategic recommendations and maintaining executive-level communication that reinforced stakeholder confidence and partnership value.",
      ],
    }, 
    {
      company: "Cohesity",
      position: "Social Media Intern",
      startDate: "May 2025",
      endDate: "Present",
      summary: [
        "Boosted intern program visibility via LinkedIn campaigns reaching 104K+ followers, driving 34K+ engagements (+22% YoY) and 31K+ link clicks (+17% YoY) in Q4 FY25.",
        "Led content execution for intern recruiting initiatives across LinkedIn, IG, X, YouTube, and FB, generating 116K+ impressions (+29% YoY) and increasing brand reach.",
        "Built and maintained content calendars and performance dashboards in Sprout Social and Jira, improving cross-team coordination and campaign agility.",
        "Directed internal comms for the Veritas acquisition rollout, achieving a 46% click-to-open rate and engaging 7K+ employees with tailored messaging.",
      ],
    },
    {
      company: "Tesla",
      position: "Marketing Consultant",
      startDate: "Jan 2025",
      endDate: "May 2025",
      summary: [
        "Sourced and qualified 350+ high-value B2B leads to support EV charger expansion across key sectors (healthcare, real estate, hospitality, aviation) in Phoenix, Atlanta, and Tampa.",
        "Executed precision lead-generation campaigns using LinkedIn Sales Navigator, advanced Google search strategies, and CRM tools to connect with decision-makers (facilities, operations, and sustainability leads).",
        "Optimized outreach performance through data-driven analysis of lead quality and campaign metrics, driving sharper targeting, higher engagement, and improved conversion efficiency.",
      ],
    },
    {
      company: "SJSU Marketing Association",
      position: "Social Media Analyst",
      startDate: "Jan 2025",
      endDate: "May 2025",
      summary: [
        "Created 11+ TikToks (22K+ views) and 30+ Instagram posts to grow brand presence and drive student engagement.",
        "Analyzed cross-platform performance using native analytics tools to track reach, follower growth, and campaign success.",
        "Delivered insights via monthly performance reports to refine content strategy and boost engagement.",
        "Captured live content and behind-the-scenes moments at events to highlight campus engagement and build community through social storytelling.",
      ],
    },
    {
      company: "Mendel.ai",
      position: "Marketing Consultant",
      startDate: "Aug 2024",
      endDate: "Dec 2024",
      summary: [
        "Contributed to cross-functional go-to-market strategy for Mendel.ai, aligning content, outreach, and buyer personas across clinical, director, and executive stakeholders, improving engagement and product positioning.",
        "Developed a multichannel content roadmap leveraging LinkedIn, YouTube, and email automation tools (e.g., Sprout Social, Hubspot) to boost thought leadership and brand credibility in AI-powered clinical trials.",
        "Identified and recommended strategic partnership opportunities with major pharma and tech firms to strengthen Mendel's credibility with investors.",
        "Built and executed strategic partnership framework, identifying high-fit pharma and provider targets (e.g., Pfizer, Cleveland Clinic), and crafting tailored messaging to drive enterprise lead generation and pilot program adoption.",
      ],
    },
  ],
  projects: [
    {
      name: "Content & Campaigns",
      summary: "Led LinkedIn campaigns reaching 104K+ followers with 34K+ engagements and 31K+ link clicks, driving significant growth in intern program visibility.",
      linkPreview: "#cohesity-campaign",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/Linkedin.png",
      campaignId: "cohesity-campaign",
    },
    {
      name: "Tesla EV Charger Lead Generation",
      summary: "Sourced and qualified 350+ high-value B2B leads across healthcare, real estate, hospitality, and aviation sectors using LinkedIn Sales Navigator and advanced search strategies.",
      image: "/tesla.png",
      isNdaRestricted: true,
    },
  ],
  about: {
    description: `
      I'm a marketing student focused on building impactful campaigns through strategy, content, and data. I'm currently studying Business Marketing at San José State University and gaining hands-on experience across campaign execution, market research, and performance analysis through internships and consulting projects.

      I've worked on cross-functional marketing initiatives with companies like Cohesity, Tesla, and Mendel.ai, supporting go-to-market efforts, lead generation, and data-informed decision-making. I enjoy learning every stage of the marketing process and am excited to continue growing in roles that blend strategic thinking, creativity, and analytics.
    `,
    image: "/jaisleen-big.png",
  },
};

// #950060
