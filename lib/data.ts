import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Smartphone,
  Globe,
  PenTool,
  Bot,
  ShieldCheck,
  Cloud,
  TrendingUp,
  Lightbulb,
  Layers,
  HeadphonesIcon,
  Sparkles,
  Code2,
  Building2,
  Lock,
  RefreshCw,
  Target,
  Eye,
  Heart,
  Compass,
  Palette,
  Workflow,
  CheckCircle2,
  Rocket,
  BarChart3,
} from "lucide-react";

export const company = {
  name: "DevElse Services Pvt Ltd",
  shortName: "DevElse",
  email: "develoopit25@gmail.com",
  phone: "+91 7738039366",
  whatsapp: "917738039366",
  tagline: "Transforming Ideas Into Digital Excellence",
  secondaryTagline: "From Mobile Apps to Intelligent AI Solutions",
  foundedNote: "A newly established technology company with a clear vision for AI-driven innovation.",
};

export type ValueHighlight = { icon: LucideIcon; title: string; description: string };

export const valueHighlights: ValueHighlight[] = [
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Fresh thinking applied to every product — built for how businesses work today.",
  },
  {
    icon: Brain,
    title: "AI-First Approach",
    description: "Artificial intelligence woven into architecture from day one, not added as an afterthought.",
  },
  {
    icon: Code2,
    title: "Modern Technology Stack",
    description: "Current frameworks and cloud-native tools chosen for performance and longevity.",
  },
  {
    icon: Layers,
    title: "End-to-End Product Development",
    description: "From discovery through launch and beyond — one team across the full lifecycle.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Responsive, human support when you need it — before, during, and after launch.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description: "Systems designed to grow with your business, not hold it back.",
  },
];

export type AboutBlock = { icon: LucideIcon; title: string; description: string };

export const aboutVision = {
  title: "Our Vision",
  description:
    "To become a trusted partner for businesses building intelligent, scalable digital products — where AI and modern engineering create lasting competitive advantage.",
};

export const aboutMission = {
  title: "Our Mission",
  description:
    "To help companies turn ideas into production-ready software through transparent collaboration, cutting-edge technology, and an unwavering focus on quality.",
};

export const companyValues: AboutBlock[] = [
  {
    icon: Sparkles,
    title: "Innovation",
    description: "We explore new technologies and approaches so your product stays ahead of the curve.",
  },
  {
    icon: Heart,
    title: "Customer-Centric Development",
    description: "Your goals drive every decision — we build what your business actually needs.",
  },
  {
    icon: Brain,
    title: "AI-Driven Future",
    description: "We believe AI will reshape every industry and help our clients lead that change.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Integrity",
    description: "Honest communication, secure practices, and craftsmanship you can rely on.",
  },
];

export type TrustIndicator = { icon: LucideIcon; title: string; description: string };

export const trustIndicators: TrustIndicator[] = [
  {
    icon: Brain,
    title: "AI-First Development",
    description: "Every project evaluated for where intelligence creates real business value.",
  },
  {
    icon: Code2,
    title: "Modern Technology Stack",
    description: "Flutter, Next.js, Python, cloud platforms — chosen per project, not forced.",
  },
  {
    icon: Building2,
    title: "Enterprise-Ready Solutions",
    description: "Architecture and security practices built for serious business requirements.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Infrastructure that handles growth without costly rewrites.",
  },
  {
    icon: Lock,
    title: "Secure Development Practices",
    description: "Authentication, data protection, and compliance considered from the start.",
  },
  {
    icon: RefreshCw,
    title: "Agile Methodology",
    description: "Short cycles, visible progress, and working builds you can react to early.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "A team you can reach after launch — not a faceless ticket queue.",
  },
  {
    icon: Rocket,
    title: "Future-Proof Technology",
    description: "Stacks and patterns chosen for where your product needs to go, not just today.",
  },
];

export type ServiceGroup = {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  slug: string;
  image: string;
  imageAlt: string;
};

export const services: ServiceGroup[] = [
  {
    icon: Compass,
    slug: "product-discovery",
    title: "Product Discovery & Strategy",
    description: "Turn ideas into a clear, actionable product roadmap before a single line of code is written.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    imageAlt: "Team collaborating on product strategy",
    items: ["Requirement Gathering", "Product Consulting", "Business Analysis", "Technical Planning"],
  },
  {
    icon: Palette,
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description: "Research-led interfaces that users understand instantly and teams can scale confidently.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    imageAlt: "UI/UX design workspace",
    items: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: Smartphone,
    slug: "development",
    title: "Development",
    description: "Robust mobile, web, and custom software built for performance, maintainability, and scale.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
    imageAlt: "Software development on laptop",
    items: [
      "Mobile App Development",
      "Web Development",
      "Custom Software Development",
      "AI Application Development",
    ],
  },
  {
    icon: Bot,
    slug: "ai-automation",
    title: "AI & Automation",
    description: "Intelligent systems that automate workflows, enhance decisions, and unlock new capabilities.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    imageAlt: "AI and automation technology",
    items: ["AI Chatbots", "AI Agents", "Workflow Automation", "Generative AI Solutions"],
  },
  {
    icon: CheckCircle2,
    slug: "quality-assurance",
    title: "Quality Assurance",
    description: "Rigorous testing across functionality, performance, and security before anything goes live.",
    image: "https://images.unsplash.com/photo-1516321318424-f06f85e504b3?w=1200&q=80",
    imageAlt: "Quality assurance testing",
    items: ["Manual Testing", "Automation Testing", "Performance Testing", "Security Testing"],
  },
  {
    icon: Cloud,
    slug: "deployment-devops",
    title: "Deployment & DevOps",
    description: "Reliable cloud infrastructure, automated pipelines, and monitoring from day one.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    imageAlt: "Cloud deployment and infrastructure",
    items: ["Cloud Deployment", "CI/CD", "Monitoring", "Infrastructure Management"],
  },
  {
    icon: BarChart3,
    slug: "maintenance-growth",
    title: "Maintenance & Growth",
    description: "Ongoing support, enhancements, and optimization to keep your product competitive.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    imageAlt: "Product growth analytics dashboard",
    items: ["Ongoing Support", "Feature Enhancements", "Performance Optimization", "Product Scaling"],
  },
];

export type ProcessStep = { title: string; description: string; icon: LucideIcon };

export const process: ProcessStep[] = [
  {
    icon: Eye,
    title: "Discovery",
    description: "Understanding your goals, users, and constraints.",
  },
  {
    icon: Target,
    title: "Strategy",
    description: "Defining scope, milestones, and technical approach.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Wireframes and prototypes you can see and refine.",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Iterative builds with visible progress every sprint.",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Intelligence wired in where it adds real value.",
  },
  {
    icon: ShieldCheck,
    title: "Testing",
    description: "Functional, performance, and security validation.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Production deployment with monitoring in place.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Support",
    description: "Ongoing improvements and scaling after launch.",
  },
];

export type AICategory = { icon: LucideIcon; title: string; items: string[] };

export const aiSolutions: AICategory[] = [
  {
    icon: Bot,
    title: "AI Chatbots",
    items: ["Website Chatbots", "Customer Support Bots", "WhatsApp AI Bots", "Internal Knowledge Assistants", "RAG-Based AI Systems"],
  },
  {
    icon: Workflow,
    title: "AI Agents",
    items: ["Sales Agents", "HR Agents", "Customer Service Agents", "Multi-Agent Systems", "Autonomous Workflow Agents"],
  },
  {
    icon: Sparkles,
    title: "Enterprise AI",
    items: ["Document Processing", "Predictive Analytics", "Business Intelligence", "Data Extraction", "AI Automation"],
  },
  {
    icon: Globe,
    title: "Custom AI Products",
    items: ["AI SaaS Platforms", "AI Marketplaces", "AI Mobile Applications", "AI CRMs", "AI Productivity Tools"],
  },
];

export const technologies = {
  "Artificial Intelligence": ["OpenAI GPT", "Claude AI", "Google Gemini", "LangChain", "LangGraph", "CrewAI", "AutoGen", "Hugging Face", "TensorFlow", "PyTorch"],
  Mobile: ["Flutter", "React Native", "Kotlin", "Swift"],
  Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "NestJS", "Python", "FastAPI", ".NET", "ServerPod"],
  Databases: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Supabase"],
  "Cloud & DevOps": ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "GitHub Actions"],
};

export type FAQItem = { question: string; answer: string };

export const faqs: FAQItem[] = [
  {
    question: "How much does software development cost?",
    answer: "It depends on scope — a focused MVP and a multi-platform enterprise system sit at very different price points. We scope your specific requirements first and give you a clear, itemized estimate before any commitment.",
  },
  {
    question: "How long does development take?",
    answer: "Most MVPs take 6–10 weeks; larger platforms with AI integration typically run 3–6 months. We provide a milestone-based timeline during discovery, with working builds along the way.",
  },
  {
    question: "Do you develop AI applications?",
    answer: "Yes — AI-driven development is core to what we do, covering chatbots, autonomous agents, RAG systems, computer vision, and predictive analytics using models like GPT, Claude, and Gemini.",
  },
  {
    question: "Do you provide maintenance?",
    answer: "Yes. Every engagement includes a maintenance and support plan after launch, covering fixes, monitoring, and incremental improvements.",
  },
  {
    question: "Which technologies do you use?",
    answer: "Our stack spans Flutter and native mobile, Next.js and React on the web, Node.js/Python/.NET on the backend, and AI frameworks like LangChain and CrewAI — chosen per project.",
  },
  {
    question: "Can you modernize existing systems?",
    answer: "Yes — we take over legacy codebases, address technical debt, and migrate systems to modern, scalable architecture without disrupting what's already working.",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "AI Solutions", href: "/ai-solutions" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

export const budgetRanges = [
  "Under ₹1,00,000",
  "₹1,00,000 – ₹5,00,000",
  "₹5,00,000 – ₹15,00,000",
  "₹15,00,000+",
  "Not sure yet",
];

export const serviceOptions = services.map((s) => s.title).concat(["Something else"]);
