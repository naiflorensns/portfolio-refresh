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
    id: "trans-luxury-hotel", title: "Marketing Communication Internship", client: "The Trans Luxury Hotel", category: "Internship",
    description: "3-month internship as Graphic Designer & Videographer",
    overview: "Saya melakukan internship selama 3 bulan sebagai Marketing Communication Intern di The Trans Luxury Hotel, Bandung. Dalam posisi ini saya bekerja sebagai Graphic Designer dan Videographer untuk kebutuhan konten sosial media hotel, termasuk pembuatan konten Instagram Feed, Reels, dan TikTok. Saya membuat desain visual, mengedit video, mendokumentasikan kegiatan hotel, serta bekerja sama dengan tim marketing untuk pelaksanaan kampanye digital.",
    objective: "To contribute to the hotel's digital marketing efforts through high-quality visual content and video production.",
    process: ["Social media content planning", "Graphic design for Instagram Feed", "Video production for Reels and TikTok", "Event documentation and photography", "Video editing and post-production", "Collaboration with marketing team"],
    result: "Successfully created engaging visual content that enhanced the hotel's social media presence during the internship period (July-September 2025).",
    icon: Building2, score: 12000, tags: ["Internship", "Graphic Design", "Videography", "Social Media"],
    thumbnail: transHotelLogo, images: [transHotelLogo, transHotel1, transHotel2, transHotel3, transHotel4, transHotel5],
    videos: [{ platform: "instagram", url: "https://www.instagram.com/thetransluxuryhotel", title: "Instagram Reels (Juli-September 2025)" }, { platform: "tiktok", url: "https://www.tiktok.com/@thetransluxuryhotel", title: "TikTok Content (Juli-September 2025)" }]
  },
  "public-figure-content": {
    id: "public-figure-content", title: "Public Figure Content", client: "Revalina S. Temat", category: "Videography",
    description: "Professional videography for SEVISI Virtual Assistant",
    overview: "Created engaging video content for public figure Revalina S. Temat, focusing on SEVISI Virtual Assistant promotional materials and social media content.",
    objective: "To produce high-quality video content that effectively communicates the value proposition of SEVISI.",
    process: ["Pre-production planning", "Professional video shooting", "Post-production editing", "Sound design", "Final delivery"],
    result: "Successfully delivered engaging videos that increased brand awareness.", icon: Camera, score: 10000, tags: ["Videography", "Content Creation"],
    thumbnail: publicFigure1, images: [publicFigure1, publicFigure2, publicFigure3]
  },
  "product-photography": {
    id: "product-photography", title: "Foto Product", client: "Mid Semester Project", category: "Photography",
    description: "High-quality product photography for OMNIA, ASAFF, and ANNIV brands",
    overview: "A comprehensive product photography project showcasing items from OMNIA, ASAFF, and ANNIV brands with professional lighting and styling.",
    objective: "To capture products in their best light for marketing purposes.",
    process: ["Product analysis", "Set design", "Professional photography", "Image editing", "Final export"],
    result: "Delivered a cohesive collection of product images.", icon: Camera, score: 8500, tags: ["Photography", "Product"],
    thumbnail: productPhoto1, images: [productPhoto1, productPhoto2]
  },
  "campus-design-portfolio": {
    id: "campus-design-portfolio", title: "Campus Design Portfolio", client: "Campus Project", category: "Design",
    description: "Various design projects including 3D modeling, rebranding, poster design, and digital imaging",
    overview: "Kumpulan karya desain selama perkuliahan yang mencakup berbagai teknik dan media. Project ini meliputi: pembuatan desain 3D, rebranding logo Lacoste, pembuatan poster untuk acara imajinasi seperti Musezoic (museum dinosaurus), interpretasi visual berupa merchandise dan apparel, pembuatan digital imaging seperti Orange Cup, serta ilustrasi komposisi kota Bandung yang menampilkan Museum Geologi, Stasiun Bosscha, Gedung Merdeka dengan suasana pandemi.",
    objective: "Mengeksplorasi berbagai teknik desain dari 3D modeling, branding, poster design, merchandise design, hingga digital imaging untuk mengasah kemampuan kreatif dan teknis.",
    process: ["3D modeling exploration", "Logo rebranding Lacoste", "Poster design Musezoic", "Merchandise interpretation", "Digital imaging Orange Cup", "City illustration Bandung"],
    result: "Berbagai karya desain yang menunjukkan kemampuan di berbagai bidang visual design.", icon: Palette, score: 9200, tags: ["3D Design", "Rebranding", "Poster", "Digital Imaging", "Illustration"],
    thumbnail: orangeCup, images: [orangeCup, bandung1, bandung2, bandung3, bandung4]
  },
  "tell-tails": {
    id: "tell-tails", title: "Tail n Tails", client: "Pro Train Petcamp", category: "Branding",
    description: "Complete branding and packaging for Tail n Tails Dog Park & Cafe",
    overview: "Tail n Tails adalah project desain untuk grand opening Dog Park & Café milik seorang dog trainer profesional bernama Pro Train Petcamp. Saya membuat berbagai kebutuhan desain meliputi: desain kaos, desain packaging, signage untuk café dan untuk area dog training, serta beberapa visual promosi. Selain itu, saya juga mengelola Instagram Tail n Tails selama acara berlangsung, termasuk membuat konten video, melakukan editing, serta menjadi videographer pada hari grand opening.",
    objective: "To create a distinctive and memorable brand identity.",
    process: ["Brand discovery", "Logo design", "Packaging design", "T-shirt design", "Signage design", "Instagram management", "Videography"],
    result: "Successfully delivered a cohesive brand system.", icon: Briefcase, score: 11000, tags: ["Branding", "Packaging", "Videography"],
    thumbnail: tellTails1, images: [tellTails1, tellTails2, tellTails3, tellTails4]
  },
  "logo-star": {
    id: "logo-star", title: "Logo Band STAR", client: "SMA Labs School Jakarta", category: "Branding",
    description: "Logo design for PENSI SMA band",
    overview: "Logo Band Star adalah project desain logo untuk band sekolah yang tampil di acara pentas seni (pensi) Labschool Jakarta. Logo ini dibuat untuk band dengan genre punk rock, sehingga visualnya dibuat lebih abstrak, liar, dan enerjik dengan sentuhan gaya metal ala Metallica. Logo ditampilkan untuk kebutuhan promosi acara dan identitas visual band selama pensi berlangsung.",
    objective: "To create a distinctive logo representing the band's punk rock identity.",
    process: ["Band concept discussion", "Sketch development", "Digital logo creation", "Color variations", "Final delivery"],
    result: "A striking logo used across all PENSI promotional materials.", icon: Palette, score: 7500, tags: ["Logo Design", "Branding"],
    thumbnail: logoStar1, images: [logoStar1, logoStar2, logoStar3, logoStar4]
  },
  "bakmi-haiyu": {
    id: "bakmi-haiyu", title: "Bakmi Haiyu", client: "Haiyu Café", category: "Branding",
    description: "Logo design and GSM for Bakmi Haiyu restaurant",
    overview: "Bakmi Haiyu adalah brand mie yang berlokasi di Bandung. Awalnya brand ini bernama Haiyu Café, kemudian mereka membuka lini brand baru bernama Bakmi Haiyu yang terletak di Jl. Sultan Agung No. 13, Bandung Wetan, Bandung. Dalam project ini saya mendesain logo baru Bakmi Haiyu beserta Graphic Standard Manual sebagai pedoman identitas visual brand.",
    objective: "To design a memorable logo representing Bakmi Haiyu's quality.",
    process: ["Restaurant concept understanding", "Typography exploration", "Symbol development", "Color palette", "GSM creation"],
    result: "A distinctive logo and GSM for Bakmi Haiyu.", icon: Briefcase, score: 8000, tags: ["Logo Design", "F&B", "GSM"],
    thumbnail: bakmiHaiyu1, images: [bakmiHaiyu1, bakmiHaiyu2, bakmiHaiyu3]
  },
  "pt-teman-berkah": {
    id: "pt-teman-berkah", title: "PT Teman Berkah Anugrah", client: "Corporate Project", category: "Branding",
    description: "Graphic Standard Manual and Stationery Design",
    overview: "PT Teman Berkah Anugrah adalah perusahaan pertambangan. Dalam project ini, saya mendesain identitas visual lengkap termasuk logo perusahaan, stationery, dan Graphic Standard Manual. Desain dibuat profesional, kuat, dan merepresentasikan karakter industri pertambangan yang stabil dan terpercaya.",
    objective: "To establish a professional corporate identity.",
    process: ["Logo concept development", "Stationery design", "Color specification", "Typography selection", "GSM creation"],
    result: "A complete corporate identity system.", icon: Briefcase, score: 9000, tags: ["GSM", "Corporate Identity"],
    thumbnail: ptTba1, images: [ptTba1, ptTba2, ptTba3, ptTba4]
  },
  "ashoe-ui": {
    id: "ashoe-ui", title: "A-SHOE UI Design", client: "UI/UX Project", category: "Design",
    description: "Mobile app UI design for smart shoe application",
    overview: "UI design for A-SHOE, a smart shoe companion app featuring step tracking, walking steadiness monitoring, and Bluetooth connectivity.",
    objective: "To create an intuitive mobile app interface.",
    process: ["User research", "UI design system", "Screen design", "Prototype", "Final refinement"],
    result: "A clean mobile app UI.", icon: Monitor, score: 8500, tags: ["UI Design", "Mobile App"],
    thumbnail: ashoeUi1, images: [ashoeUi1, ashoeUi2]
  },
  "gestalt-project": {
    id: "gestalt-project", title: "Gestalt Design", client: "Campus Project - Final Exam", category: "Design",
    description: "Design exploration using Gestalt principles",
    overview: "Project Gestalt adalah tugas Ujian Akhir Semester pada perkuliahan Desain. Gestalt dalam desain adalah prinsip persepsi visual yang menjelaskan bagaimana elemen-elemen disusun sehingga dipahami sebagai bentuk yang utuh. Pada project ini saya membuat karya berdasarkan beberapa prinsip Gestalt yaitu: Proximity, Continuity, Similarity, Closure, dan Figure–Ground. Setiap prinsip divisualisasikan dalam bentuk desain grafis yang berbeda.",
    objective: "To demonstrate understanding of Gestalt design principles.",
    process: ["Study of Gestalt principles", "Concept sketching", "Typography exploration", "Principle visualizations", "Final presentation"],
    result: "An educational design piece demonstrating Gestalt principles.", icon: Layout, score: 7000, tags: ["Design Theory", "Typography"],
    thumbnail: gestalt1, images: [gestalt1]
  }
};

export const projectsList = Object.values(projectsData);
