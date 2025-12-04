import { Camera, Palette, Briefcase, Play, Monitor, Layout } from "lucide-react";

// Project Images
import publicFigure1 from "@/assets/projects/public-figure-1.jpg";
import publicFigure2 from "@/assets/projects/public-figure-2.jpg";
import publicFigure3 from "@/assets/projects/public-figure-3.jpg";

import productPhoto1 from "@/assets/projects/product-photo-1.jpg";
import productPhoto2 from "@/assets/projects/product-photo-2.jpg";

import bandung1 from "@/assets/projects/bandung-1.png";
import bandung2 from "@/assets/projects/bandung-2.png";
import bandung3 from "@/assets/projects/bandung-3.png";
import bandung4 from "@/assets/projects/bandung-4.png";

import tellTails1 from "@/assets/projects/tell-tails-1.png";
import tellTails2 from "@/assets/projects/tell-tails-2.png";
import tellTails3 from "@/assets/projects/tell-tails-3.png";
import tellTails4 from "@/assets/projects/tell-tails-4.png";

import logoStar1 from "@/assets/projects/logo-star-1.png";
import logoStar2 from "@/assets/projects/logo-star-2.png";
import logoStar3 from "@/assets/projects/logo-star-3.png";
import logoStar4 from "@/assets/projects/logo-star-4.png";

import bakmiHaiyu1 from "@/assets/projects/bakmi-haiyu-1.jpg";
import bakmiHaiyu2 from "@/assets/projects/bakmi-haiyu-2.png";
import bakmiHaiyu3 from "@/assets/projects/bakmi-haiyu-3.png";

import ptTba1 from "@/assets/projects/pt-tba-1.png";
import ptTba2 from "@/assets/projects/pt-tba-2.png";
import ptTba3 from "@/assets/projects/pt-tba-3.png";
import ptTba4 from "@/assets/projects/pt-tba-4.png";

import ashoeUi1 from "@/assets/projects/ashoe-ui-1.png";
import ashoeUi2 from "@/assets/projects/ashoe-ui-2.png";

import gestalt1 from "@/assets/projects/gestalt-1.png";

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  overview: string;
  objective: string;
  process: string[];
  result: string;
  icon: any;
  score: number;
  tags: string[];
  thumbnail: string;
  images: string[];
}

export const projectsData: Record<string, Project> = {
  "public-figure-content": {
    id: "public-figure-content",
    title: "Public Figure Content",
    client: "Revalina S. Temat",
    category: "Videography",
    description: "Professional videography for SEVISI Virtual Assistant",
    overview: "Created engaging video content for public figure Revalina S. Temat, focusing on SEVISI Virtual Assistant promotional materials and social media content.",
    objective: "To produce high-quality video content that effectively communicates the value proposition of SEVISI while maintaining the personal brand of the public figure.",
    process: [
      "Pre-production planning and storyboarding",
      "Professional video shooting with proper lighting",
      "Post-production editing with color grading",
      "Sound design and music integration",
      "Final delivery in multiple formats"
    ],
    result: "Successfully delivered a series of engaging videos that increased brand awareness and engagement across social media platforms.",
    icon: Camera,
    score: 10000,
    tags: ["Videography", "Content Creation"],
    thumbnail: publicFigure1,
    images: [publicFigure1, publicFigure2, publicFigure3]
  },
  "product-photography": {
    id: "product-photography",
    title: "Foto Product",
    client: "Mid Semester Project",
    category: "Photography",
    description: "High-quality product photography for OMNIA, ASAFF, and ANNIV brands",
    overview: "A comprehensive product photography project showcasing items from OMNIA, ASAFF, and ANNIV brands with professional lighting and styling.",
    objective: "To capture products in their best light, highlighting features and creating aspirational imagery for marketing purposes.",
    process: [
      "Product analysis and concept development",
      "Set design and prop styling",
      "Professional photography with various angles",
      "Image editing and retouching",
      "Final export for various platforms"
    ],
    result: "Delivered a cohesive collection of product images that elevated brand perception and improved marketing materials.",
    icon: Camera,
    score: 8500,
    tags: ["Photography", "Product"],
    thumbnail: productPhoto1,
    images: [productPhoto1, productPhoto2]
  },
  "bandung-illustration": {
    id: "bandung-illustration",
    title: "Bandung Illustration",
    client: "Campus Project",
    category: "Design",
    description: "City composition illustrating Bandung's atmosphere during the pandemic",
    overview: "Gambar komposisi kota ini menampilkan suasana kota Bandung di masa kini. Menampilkan Museum Geologi, Stasiun Bosscha, Gedung Merdeka, dan ruko-ruko dengan suasana pandemi.",
    objective: "To create a meaningful visual representation of Bandung that resonates with locals and captures the city's spirit during challenging times.",
    process: [
      "Research on Bandung's iconic landmarks",
      "Sketch development and composition",
      "Digital illustration creation",
      "Color palette selection for mood",
      "Final refinement and details"
    ],
    result: "A beautiful illustration that captures the essence of Bandung and received recognition for its artistic merit.",
    icon: Palette,
    score: 9200,
    tags: ["Illustration", "Design"],
    thumbnail: bandung1,
    images: [bandung1, bandung2, bandung3, bandung4]
  },
  "tell-tails": {
    id: "tell-tails",
    title: "Tell & Tails",
    client: "Grand Project",
    category: "Branding",
    description: "Complete branding and packaging for Tell & Tails Dog Park & Cafe",
    overview: "Development of complete brand identity system for Tell & Tails Dog Park & Cafe including packaging, signage, and brand assets.",
    objective: "To create a distinctive and memorable brand identity that effectively communicates the fun and welcoming atmosphere of the dog park and cafe.",
    process: [
      "Brand discovery and research",
      "Logo and visual identity design",
      "Packaging design (cups, boxes, bags)",
      "Signage and wayfinding design",
      "Brand guidelines creation"
    ],
    result: "Successfully delivered a cohesive brand system that establishes Tell & Tails as a premium dog park and cafe destination.",
    icon: Briefcase,
    score: 11000,
    tags: ["Branding", "Packaging"],
    thumbnail: tellTails1,
    images: [tellTails1, tellTails2, tellTails3, tellTails4]
  },
  "logo-star": {
    id: "logo-star",
    title: "Logo Band STAR",
    client: "SMA Labs School Jakarta",
    category: "Branding",
    description: "Logo design for PENSI SMA band",
    overview: "Logo design project for STAR band at SMA Labs School Jakarta for their PENSI (Pentas Seni) event.",
    objective: "To create a distinctive logo that represents the band's identity and can be used across various promotional materials.",
    process: [
      "Band concept discussion",
      "Sketch and concept development",
      "Digital logo creation",
      "Color variations",
      "Final delivery with usage guidelines"
    ],
    result: "A striking logo that captures the essence of the band and was used across all PENSI promotional materials.",
    icon: Palette,
    score: 7500,
    tags: ["Logo Design", "Branding"],
    thumbnail: logoStar1,
    images: [logoStar1, logoStar2, logoStar3, logoStar4]
  },
  "bakmi-haiyu": {
    id: "bakmi-haiyu",
    title: "Bakmi Haiyu",
    client: "Logo Project",
    category: "Branding",
    description: "Logo design for Bakmi Haiyu restaurant",
    overview: "Creating a memorable logo for Bakmi Haiyu, a noodle restaurant, that reflects the authentic and delicious character of their dishes.",
    objective: "To design a logo that is appetizing, memorable, and represents the quality of Bakmi Haiyu's offerings.",
    process: [
      "Restaurant concept understanding",
      "Typography exploration",
      "Icon and symbol development",
      "Color palette selection",
      "Final logo refinement"
    ],
    result: "A distinctive logo that helps Bakmi Haiyu stand out in the competitive food industry.",
    icon: Briefcase,
    score: 8000,
    tags: ["Logo Design", "F&B"],
    thumbnail: bakmiHaiyu1,
    images: [bakmiHaiyu1, bakmiHaiyu2, bakmiHaiyu3]
  },
  "pt-teman-berkah": {
    id: "pt-teman-berkah",
    title: "PT Teman Berkah Anugrah",
    client: "Corporate Project",
    category: "Branding",
    description: "Graphic Standard Manual and Stationery Design",
    overview: "Complete corporate identity project including logo design, stationery (letterhead, envelope), and graphic standard manual for PT Teman Berkah Anugrah.",
    objective: "To establish a professional corporate identity that reflects unity, integrity, and professionalism.",
    process: [
      "Logo concept development (3 semi-circles symbolizing unity)",
      "Stationery design (Kop Surat, Amplop)",
      "Color code specification",
      "Typography selection (Helvetica Neue Bold)",
      "Graphic Standard Manual creation"
    ],
    result: "A complete corporate identity system that positions PT Teman Berkah Anugrah as a professional and trustworthy company.",
    icon: Briefcase,
    score: 9000,
    tags: ["GSM", "Corporate Identity"],
    thumbnail: ptTba1,
    images: [ptTba1, ptTba2, ptTba3, ptTba4]
  },
  "ashoe-ui": {
    id: "ashoe-ui",
    title: "A-SHOE UI Design",
    client: "UI/UX Project",
    category: "Design",
    description: "Mobile app UI design for smart shoe application",
    overview: "UI design for A-SHOE, a smart shoe companion app featuring step tracking, walking steadiness monitoring, and Bluetooth connectivity.",
    objective: "To create an intuitive and visually appealing mobile app interface for smart shoe users.",
    process: [
      "User research and wireframing",
      "UI design system creation",
      "Screen design (Dashboard, Settings, Stats)",
      "Interactive prototype",
      "Final UI refinement"
    ],
    result: "A clean and modern mobile app UI that enhances the smart shoe user experience.",
    icon: Monitor,
    score: 8500,
    tags: ["UI Design", "Mobile App"],
    thumbnail: ashoeUi1,
    images: [ashoeUi1, ashoeUi2]
  },
  "gestalt-project": {
    id: "gestalt-project",
    title: "Gestalt Design",
    client: "Campus Project",
    category: "Design",
    description: "Design exploration using Gestalt principles",
    overview: "A design project exploring Gestalt principles including Proximity, Continuity, Similarity, Closure, Figure Ground, and more.",
    objective: "To demonstrate understanding and application of Gestalt design principles in visual composition.",
    process: [
      "Study of Gestalt principles",
      "Concept sketching",
      "Typography-based design exploration",
      "Composition refinement",
      "Final presentation"
    ],
    result: "An educational design piece that effectively demonstrates various Gestalt principles.",
    icon: Layout,
    score: 7000,
    tags: ["Design Theory", "Typography"],
    thumbnail: gestalt1,
    images: [gestalt1]
  }
};

export const projectsList = Object.values(projectsData);
