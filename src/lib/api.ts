export interface Stat {
  value: string;
  label: string;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface Edge {
  title: string;
  description: string;
  icon: string;
}

export interface Domain {
  title: string;
  description: string;
}

export interface Segmentation {
  title: string;
  subtitle: string;
  items?: string[];
}

export interface TargetAudience {
  title: string;
  description: string;
  icon: string;
}

export interface CATStep {
  step: number;
  title: string;
  description: string;
  deliverables: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  logo: string;
}

export interface NavLink {
  label: string;
  href: string;
}

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getNavLinks(): Promise<NavLink[]> {
  await delay(100);
  return [
    { label: "Home", href: "#hero" },
    { label: "Stats", href: "#stats" },
    { label: "Clients", href: "#partnerships" },
    { label: "Accredian Edge", href: "#edge" },
    { label: "Domains", href: "#domains" },
    { label: "CAT Framework", href: "#cat" },
    { label: "FAQs", href: "#faq" },
    { label: "Testimonials", href: "#testimonials" },
  ];
}

export async function getStats(): Promise<Stat[]> {
  await delay(100);
  return [
    { value: "10K+", label: "Professionals trained for exceptional career success" },
    { value: "200+", label: "Sessions delivered with unmatched learning excellence" },
    { value: "5K+", label: "Active learners engaged in dynamic courses" },
  ];
}

export async function getPartners(): Promise<Partner[]> {
  await delay(100);
  const names = [
    "Reliance", "HCL", "IBM", "CRIF", "ADP", "Bayer",
    "Tata", "Infosys", "Wipro", "Tech Mahindra", "Cognizant", "Accenture",
  ];
  return names.map((name) => ({ name, logo: `/images/${name.toLowerCase()}.png` }));
}

export async function getEdges(): Promise<Edge[]> {
  await delay(100);
  return [
    { title: "Tailored Solutions", description: "Programs customized to your organization's goals and challenges.", icon: "🎯" },
    { title: "Innovative Framework", description: "Proprietary methods for impactful, application-driven results.", icon: "💡" },
    { title: "Diverse Offerings", description: "Courses across industries, skill levels, and emerging fields.", icon: "📚" },
    { title: "Flexible Delivery", description: "Online and offline options tailored to your needs.", icon: "🔄" },
    { title: "Expert Guidance", description: "Learn from industry leaders with real-world success.", icon: "👨‍🏫" },
    { title: "Advanced Technology", description: "State-of-the-art LMS for seamless learning experiences.", icon: "⚙️" },
    { title: "Proven Impact", description: "Trusted by leading organizations for measurable ROI.", icon: "📊" },
  ];
}

export async function getDomains(): Promise<Domain[]> {
  await delay(100);
  return [
    { title: "Product & Innovation Hub", description: "Drive product-led growth with innovation frameworks and design thinking." },
    { title: "Gen-AI Mastery", description: "Harness generative AI to transform business processes and decision-making." },
    { title: "Leadership Elevation", description: "Build strategic leadership capabilities for senior management." },
    { title: "Tech & Data Insights", description: "Deepen technical expertise in data science, AI, and cloud computing." },
    { title: "Operations Excellence", description: "Optimize business operations with lean and agile methodologies." },
    { title: "Digital Enterprise", description: "Accelerate digital transformation across your organization." },
    { title: "Fintech Innovation Lab", description: "Master financial technologies from blockchain to digital payments." },
  ];
}

export async function getSegmentations(): Promise<Segmentation[]> {
  await delay(100);
  return [
    { title: "Program Specific", subtitle: "Certificate, Executive, Post Graduate Certificate" },
    { title: "Industry Specific", subtitle: "IT, Healthcare, Retail, Finance, Education, Manufacturing" },
    { title: "Topic Specific", subtitle: "Machine Learning, Design, Analytics, Cybersecurity, Cloud" },
    { title: "Level Specific", subtitle: "Senior Leadership, Mid-Career Professionals, Freshers" },
  ];
}

export async function getTargetAudiences(): Promise<TargetAudience[]> {
  await delay(100);
  return [
    { title: "Tech Professionals", description: "Enhance expertise, embrace tech, drive innovation.", icon: "💻" },
    { title: "Non-Tech Professionals", description: "Adapt digitally, collaborate in tech environments.", icon: "🤝" },
    { title: "Emerging Professionals", description: "Develop powerful skills for rapid career growth.", icon: "🚀" },
    { title: "Senior Professionals", description: "Strengthen leadership, enhance strategic decisions.", icon: "🏆" },
  ];
}

export async function getCATSteps(): Promise<CATStep[]> {
  await delay(100);
  return [
    {
      step: 1,
      title: "Skill Gap Analysis",
      description: "Assess team skill gaps and developmental needs through comprehensive evaluation.",
      deliverables: ["Skills assessment report", "Gap analysis matrix", "Priority recommendations"],
    },
    {
      step: 2,
      title: "Customized Training Plan",
      description: "Create a tailored roadmap addressing organizational goals and team requirements.",
      deliverables: ["Learning roadmap", "Content curriculum", "Timeline & milestones"],
    },
    {
      step: 3,
      title: "Flexible Program Delivery",
      description: "Deliver adaptable programs aligned with industry and organizational needs.",
      deliverables: ["Live sessions", "Self-paced modules", "ROI measurement"],
    },
  ];
}

export async function getFAQs(): Promise<FAQ[]> {
  await delay(100);
  return [
    {
      question: "What types of corporate training programs does Accredian offer?",
      answer: "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
    },
    {
      question: "What domain specializations are available?",
      answer: "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI.",
    },
    {
      question: "How are the training programs delivered?",
      answer: "Programs are delivered through live instructor-led sessions, self-paced modules, or a blended approach — online or on-site at your premises.",
    },
    {
      question: "How do you measure training ROI?",
      answer: "We provide real-time analytics dashboards, completion rates, skill assessments, and quarterly business reviews to track progress and measure ROI.",
    },
    {
      question: "How long does it take to onboard?",
      answer: "We can onboard your entire team in under a week. Our dedicated success managers handle everything end-to-end.",
    },
  ];
}

export async function getTestimonials(): Promise<Testimonial[]> {
  await delay(100);
  return [
    {
      quote: "Accredian Enterprise transformed how we approach L&D. Within 6 months, we saw a 40% increase in internal promotions among participants.",
      author: "Priya Sharma",
      role: "VP, People & Culture",
      company: "Tata Consultancy Services",
      logo: "/images/tata.png",
    },
    {
      quote: "The ROI has been phenomenal. Our data science teams are 3x more productive after completing the program. The learning dashboard gives us exactly the visibility we needed.",
      author: "Rahul Mehta",
      role: "Chief Learning Officer",
      company: "Infosys",
      logo: "/images/infosys.png",
    },
    {
      quote: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded.",
      author: "Anita Desai",
      role: "Head of L&D",
      company: "Bayer",
      logo: "/images/bayer.png",
    },
  ];
}
