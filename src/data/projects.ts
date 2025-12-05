import { Camera, Palette, Briefcase, Play, Monitor, Layout, Building2 } from "lucide-react";

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
import orangeCup from "@/assets/projects/orange-cup.jpg";
import transHotelLogo from "@/assets/projects/trans-hotel-logo.png";
import transHotel1 from "@/assets/projects/trans-hotel-1.jpg";
import transHotel2 from "@/assets/projects/trans-hotel-2.jpg";
import transHotel3 from "@/assets/projects/trans-hotel-3.jpg";
import transHotel4 from "@/assets/projects/trans-hotel-4.png";
import transHotel5 from "@/assets/projects/trans-hotel-5.png";

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
  videos?: { platform: "instagram" | "tiktok" | "youtube"; url: string; title: string; }[];
}

export const projectsData: Record<string, Project> = {
  "trans-luxury-hotel": {
    id: "trans-luxury-hotel",
    title: "Marketing Communication Internship",
    client: "The Trans Luxury Hotel",
    category: "Internship",
    description: "3-month internship as Graphic Designer & Videographer",
    overview: "I completed a 3-month internship as a Marketing Communication Intern at The Trans Luxury Hotel, Bandung. In this position, I worked as a Graphic Designer and Videographer for the hotel's social media content needs, including creating Instagram Feed content, Reels, and TikTok videos. I created visual designs, edited videos, documented hotel activities, and collaborated with the marketing team on digital campaign execution.",
    objective: "To contribute to the hotel's digital marketing efforts through high-quality visual content and video production.",
    process: ["Social media content planning", "Graphic design for Instagram Feed", "Video production for Reels and TikTok", "Event documentation and photography", "Video editing and post-production", "Collaboration with marketing team"],
    result: "Successfully created engaging visual content that enhanced the hotel's social media presence during the internship period (July-September 2025).",
    icon: Building2,
    score: 12000,
    tags: ["Internship", "Graphic Design", "Videography", "Social Media"],
    thumbnail: transHotelLogo,
    images: [transHotelLogo, transHotel1, transHotel2, transHotel3, transHotel4, transHotel5],
    videos: [
      { platform: "instagram", url: "https://www.instagram.com/thetransluxuryhotel", title: "Instagram Reels (July-September 2025)" },
      { platform: "tiktok", url: "https://www.tiktok.com/@thetransluxuryhotel", title: "TikTok Content (July-September 2025)" }
    ]
  },
  "public-figure-content": {
    id: "public-figure-content",
    title: "Public Figure Content",
    client: "Revalina S. Temat",
    category: "Videography",
    description: "Professional videography for SEVISI Virtual Assistant",
    overview: "Created engaging video content for public figure Revalina S. Temat, focusing on SEVISI Virtual Assistant promotional materials and social media content.",
    objective: "To produce high-quality video content that effectively communicates the value proposition of SEVISI.",
    process: ["Pre-production planning", "Professional video shooting", "Post-production editing", "Sound design", "Final delivery"],
    result: "Successfully delivered engaging videos that increased brand awareness.",
    icon: Camera,
    score: 10000,
    tags: ["Videography", "Content Creation"],
    thumbnail: publicFigure1,
    images: [publicFigure1, publicFigure2, publicFigure3]
  },
  "product-photography": {
    id: "product-photography",
    title: "Product Photography",
    client: "Mid Semester Project",
    category: "Photography",
    description: "High-quality product photography for OMNIA, ASAFF, and ANNIV brands",
    overview: "A comprehensive product photography project showcasing items from OMNIA, ASAFF, and ANNIV brands with professional lighting and styling.",
    objective: "To capture products in their best light for marketing purposes.",
    process: ["Product analysis", "Set design", "Professional photography", "Image editing", "Final export"],
    result: "Delivered a cohesive collection of product images suitable for marketing campaigns.",
    icon: Camera,
    score: 8500,
    tags: ["Photography", "Product"],
    thumbnail: productPhoto1,
    images: [productPhoto1, productPhoto2]
  },
  "campus-design-portfolio": {
    id: "campus-design-portfolio",
    title: "Campus Design Portfolio",
    client: "Campus Project",
    category: "Design",
    description: "Various design projects including 3D modeling, rebranding, poster design, and digital imaging",
    overview: "A collection of design works completed during my studies, encompassing various techniques and media. This project includes:\n\n• 3D Design\nCreation of 3D objects and visualizations as foundational modeling exercises.\n\n• Lacoste Logo Rebranding\nRedesigning Lacoste's visual identity with a more modern and minimalist design approach.\n\n• \"Musezoic\" Poster\nPoster design for an imaginative music festival called Musezoic—a space-dinosaur themed music festival concept combining galaxy and dinosaur elements.\n\n• Merchandise & Apparel Visual Interpretation\nCreating merchandise and apparel designs based on specific concepts to practice visual identity consistency.\n\n• \"Orange Cup\" Digital Imaging\nPhoto manipulation and digital composition process to produce creative visuals with a beverage theme in an illustrative form.\n\n• Bandung City Composition Illustration\nAn illustration featuring iconic Bandung landmarks such as the Geology Museum, Bosscha Observatory, and Gedung Merdeka.",
    objective: "To explore various design techniques from 3D modeling, branding, poster design, merchandise design, to digital imaging in order to sharpen creative and technical skills.",
    process: ["3D modeling exploration", "Lacoste logo rebranding", "Musezoic poster design", "Merchandise interpretation", "Orange Cup digital imaging", "Bandung city illustration"],
    result: "A diverse body of design work demonstrating proficiency across multiple visual design disciplines.",
    icon: Palette,
    score: 9200,
    tags: ["3D Design", "Rebranding", "Poster", "Digital Imaging", "Illustration"],
    thumbnail: orangeCup,
    images: [orangeCup, bandung1, bandung2, bandung3, bandung4]
  },
  "tell-tails": {
    id: "tell-tails",
    title: "Tail n Tails",
    client: "Pro Train Petcamp",
    category: "Branding",
    description: "Complete branding and packaging for Tail n Tails Dog Park & Cafe",
    overview: "Tail n Tails is a design project for the grand opening of a Dog Park & Café owned by a professional dog trainer called Pro Train Petcamp. I created various design materials including: t-shirt designs, packaging designs, signage for the café and dog training area, as well as promotional visuals. Additionally, I managed Tail n Tails' Instagram during the event, including creating video content, editing, and serving as the videographer on the grand opening day.",
    objective: "To create a distinctive and memorable brand identity for the grand opening event.",
    process: ["Brand discovery", "Logo design", "Packaging design", "T-shirt design", "Signage design", "Instagram management", "Videography"],
    result: "Successfully delivered a cohesive brand system that elevated the grand opening experience.",
    icon: Briefcase,
    score: 11000,
    tags: ["Branding", "Packaging", "Videography"],
    thumbnail: tellTails1,
    images: [tellTails1, tellTails2, tellTails3, tellTails4]
  },
  "logo-star": {
    id: "logo-star",
    title: "Logo Band STAR",
    client: "SMA Labschool Jakarta",
    category: "Branding",
    description: "Logo design for school band performing at PENSI",
    overview: "Logo Band Star is a logo design project for a school band performing at the Labschool Jakarta arts festival (PENSI). The logo was created for a punk rock genre band, so the visual was made more abstract, wild, and energetic with a Metallica-style metal touch. The logo was displayed for event promotional needs and served as the band's visual identity throughout the festival.",
    objective: "To create a distinctive logo representing the band's punk rock identity and energetic stage presence.",
    process: ["Band concept discussion", "Sketch development", "Digital logo creation", "Color variations", "Final delivery"],
    result: "A striking logo that captured the band's raw energy and was used across all PENSI promotional materials.",
    icon: Palette,
    score: 7500,
    tags: ["Logo Design", "Branding"],
    thumbnail: logoStar1,
    images: [logoStar1, logoStar2, logoStar3, logoStar4]
  },
  "bakmi-haiyu": {
    id: "bakmi-haiyu",
    title: "Bakmi Haiyu",
    client: "Haiyu Café",
    category: "Branding",
    description: "Logo design and Graphic Standard Manual for Bakmi Haiyu restaurant",
    overview: "Bakmi Haiyu is a noodle brand located in Bandung. Originally named Haiyu Café, they opened a new brand line called Bakmi Haiyu located at Jl. Sultan Agung No. 13, Bandung Wetan, Bandung. In this project, I designed the new Bakmi Haiyu logo along with a Graphic Standard Manual as a guideline for the brand's visual identity.",
    objective: "To design a memorable logo and comprehensive brand guidelines representing Bakmi Haiyu's quality and character.",
    process: ["Restaurant concept understanding", "Typography exploration", "Symbol development", "Color palette selection", "Graphic Standard Manual creation"],
    result: "A distinctive logo and complete GSM that established Bakmi Haiyu's visual identity.",
    icon: Briefcase,
    score: 8000,
    tags: ["Logo Design", "F&B", "GSM"],
    thumbnail: bakmiHaiyu1,
    images: [bakmiHaiyu1, bakmiHaiyu2, bakmiHaiyu3]
  },
  "pt-teman-berkah": {
    id: "pt-teman-berkah",
    title: "PT Teman Berkah Anugrah",
    client: "Corporate Project",
    category: "Branding",
    description: "Graphic Standard Manual and Stationery Design for mining company",
    overview: "PT Teman Berkah Anugrah is a mining company. In this project, I designed the complete visual identity including the company logo, stationery, and Graphic Standard Manual. The design was made professional, strong, and representative of the stable and trustworthy character of the mining industry.",
    objective: "To establish a professional corporate identity that reflects the company's stability and reliability in the mining industry.",
    process: ["Logo concept development", "Stationery design", "Color specification", "Typography selection", "Graphic Standard Manual creation"],
    result: "A complete corporate identity system that effectively communicates professionalism and industry strength.",
    icon: Briefcase,
    score: 9000,
    tags: ["GSM", "Corporate Identity", "Logo Design"],
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
    objective: "To create an intuitive and user-friendly mobile app interface for smart shoe users.",
    process: ["User research", "UI design system creation", "Screen design", "Interactive prototype", "Final refinement"],
    result: "A clean and functional mobile app UI that enhances the smart shoe user experience.",
    icon: Monitor,
    score: 8500,
    tags: ["UI Design", "Mobile App"],
    thumbnail: ashoeUi1,
    images: [ashoeUi1, ashoeUi2]
  },
  "gestalt-project": {
    id: "gestalt-project",
    title: "Gestalt Design",
    client: "Campus Project - Final Exam",
    category: "Design",
    description: "Design exploration using Gestalt visual perception principles",
    overview: "Project Gestalt is a Final Semester Exam assignment in a Design course. Gestalt in design refers to visual perception principles that explain how elements are arranged so they are understood as a unified whole. In this project, I created works based on several Gestalt principles: Proximity, Continuity, Similarity, Closure, and Figure–Ground. Each principle was visualized in a different graphic design form.",
    objective: "To demonstrate comprehensive understanding of Gestalt design principles through visual application.",
    process: ["Study of Gestalt principles", "Concept sketching", "Typography exploration", "Individual principle visualizations", "Final presentation"],
    result: "An educational design piece successfully demonstrating mastery of Gestalt visual perception principles.",
    icon: Layout,
    score: 7000,
    tags: ["Design Theory", "Typography", "Visual Perception"],
    thumbnail: gestalt1,
    images: [gestalt1]
  }
};

export const projectsList = Object.values(projectsData);
