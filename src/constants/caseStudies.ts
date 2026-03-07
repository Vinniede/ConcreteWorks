export interface CaseStudyVideo {
  id: string;
  title: string;
  youtubeId: string;
  clientName: string;
  role: string;
  location: string;
  projectType: "residential" | "commercial" | "municipal";
  summary: string;
  highlights: string[];
}

export interface InstallationProof {
  id: string;
  title: string;
  image: string;
  location: string;
  projectType: "residential" | "commercial" | "municipal";
  completedOn: string;
  areaServed: string;
  materials: string;
  outcome: string;
}

export const trustMetrics = [
  { label: "Verified Client Interviews", value: "20+" },
  { label: "Completed Installations", value: "500+" },
  { label: "Average Rating", value: "4.9/5" },
  { label: "On-Time Delivery", value: "98%" },
];

export const caseStudyVideos: CaseStudyVideo[] = [
  {
    id: "video-1",
    title: "Driveway Transformation Interview",
    youtubeId: "M7lc1UVf-VE",
    clientName: "John Kariuki",
    role: "Property Owner",
    location: "Riverside, Nairobi",
    projectType: "residential",
    summary:
      "Client review after full driveway resurfacing with interlocking pavers and improved drainage.",
    highlights: ["Verified client", "Post-install interview", "6-month follow-up"],
  },
  {
    id: "video-2",
    title: "Commercial Plaza Surface Upgrade",
    youtubeId: "ysz5S6PUM-U",
    clientName: "Sarah Mwangi",
    role: "Architect",
    location: "Westlands, Nairobi",
    projectType: "commercial",
    summary:
      "Architect feedback on durability, aesthetics, and traffic flow after plaza paving completion.",
    highlights: ["Certified handover", "High-footfall area", "Slip-resistant finish"],
  },
  {
    id: "video-3",
    title: "Municipal Road Section Review",
    youtubeId: "aqz-KE-bpKQ",
    clientName: "David Ochieng",
    role: "Municipal Engineer",
    location: "Nairobi County",
    projectType: "municipal",
    summary:
      "Engineering review covering installation quality, drainage edge control, and curb alignment.",
    highlights: ["Engineer interview", "Public road section", "Performance verified"],
  },
];

export const installationProofs: InstallationProof[] = [
  {
    id: "proof-1",
    title: "Luxury Residential Driveway",
    image: "/images/Luxury Residential Driveway.jpg",
    location: "Karen, Nairobi",
    projectType: "residential",
    completedOn: "March 2025",
    areaServed: "420 sqm",
    materials: "Uni pavers + kerb edging",
    outcome: "Improved drainage and cleaner vehicle access in all weather.",
  },
  {
    id: "proof-2",
    title: "Commercial Plaza Access Lanes",
    image: "/images/commercial plaza.jpg",
    location: "Westlands, Nairobi",
    projectType: "commercial",
    completedOn: "November 2024",
    areaServed: "1,100 sqm",
    materials: "Heavy-duty cabro + directional markings",
    outcome: "Smoother pedestrian movement and reduced maintenance patches.",
  },
  {
    id: "proof-3",
    title: "Road Paving and Kerb Alignment",
    image: "/images/Road Paving.jpg",
    location: "Nairobi County",
    projectType: "municipal",
    completedOn: "July 2024",
    areaServed: "2.4 km segment",
    materials: "Road-grade pavers + reinforced kerbs",
    outcome: "Stronger shoulder support and reliable lane edge containment.",
  },
  {
    id: "proof-4",
    title: "Estate Internal Streets",
    image: "/images/Estate Development.jpeg",
    location: "Kiambu",
    projectType: "residential",
    completedOn: "January 2026",
    areaServed: "3,200 sqm",
    materials: "Running-bond paving blocks",
    outcome: "Consistent finish across phases with controlled runoff paths.",
  },
];