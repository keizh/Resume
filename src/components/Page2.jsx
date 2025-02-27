import { Typography } from "@material-tailwind/react";
import ProjectComp from "../components/ProjectComp";
const projects = [
  {
    name: "WYM ( Watch Your Movie )",
    url: `https://res.cloudinary.com/dddkhewor/image/upload/fl_preserve_transparency/v1740583782/Screenshot_2025-02-26_205832_l5ex75.jpg?_s=public-apps`,
    description: [
      "FRONTEND Project",
      "Uses TMDB API (some features blocked by the Indian government, causing issues).",
      "Displays latest movies, TV shows, trending content, trailers.",
      "Shows where to watch, cast details, and their social media handles.",
      "Provides movie & TV show recommendations.",
    ],
    link: `https://watch-your-movie.netlify.app/`,
    frontendGH: `https://github.com/keizh/WYMnew`,
    backendGH: ``,
    alert: `⚠️ Alert: Might need VPN becaause INDIAN government blocked certain api endpoints of TMDB API `,
    vlink: "",
  },
  {
    name: "India Buy",
    url: `https://res.cloudinary.com/dddkhewor/image/upload/v1740594264/Screenshot_2025-02-26_205832_jwmvcs.png`,
    description: [
      "Frontend-first full-stack application.",
      "User authentication with JWT and encryption",
      "E-commerce features: Add/remove clothes from the cart, place orders.",
      "Custom backend HTTP Server using Node.js, MongoDB, Express, JWT, and bcrypt.",
    ],
    frontendGH: `https://github.com/keizh/project_1_Frontend`,
    backendGH: `https://github.com/keizh/Project_1_backend_V3`,
    link: `https://project-1-frontend-dun.vercel.app/signin`,
    alert: "",
    vlink: "",
  },
  {
    name: "#HashTag",
    url: `https://res.cloudinary.com/dddkhewor/image/upload/v1740594687/Screenshot_2025-02-26_205832_zmudcf.png`,
    description: [
      "Frontend-first full-stack application.",
      "User authentication with JWT and encryption",
      "Social Media features: Add/remove friends , post images , comment on posts , update profile picture",
      "Custom backend HTTP server using Node.js, MongoDB, Express, JWT, and bcrypt.",
    ],
    frontendGH: `https://github.com/keizh/Project_2_frontend`,
    backendGH: `https://github.com/keizh/Project_2_backend`,
    link: `https://socialmediafrontend-five.vercel.app/signin`,
    alert: "",
    vlink: "",
  },
  {
    name: "Work Management",
    url: `https://res.cloudinary.com/dddkhewor/image/upload/v1740595053/Screenshot_2025-02-26_205832_pamehk.png`,
    description: [
      "Frontend-first full-stack application.",
      "Uses GOOGLE OAUTH 2.0 For User Authentication and Authorization",
      "Users can create projects and tasks, assign registered team members, set deadlines, and update task statuses (ongoing, completed, or pending).",
      "Users can view visualization charts that display the number of tasks categorized as ongoing, finished, or pending.",
      "Custom backend HTTP server using Node.js, MongoDB, Express, Google Oauth.",
    ],
    frontendGH: `https://github.com/keizh/workManagement-frontend-v1`,
    backendGH: `https://github.com/keizh/workManagement-backend-v1`,
    link: `https://workmanagement-frontend-v1.vercel.app/signin`,
    alert: "",
    vlink: "",
  },
  {
    name: "Store Multi Media",
    url: `https://res.cloudinary.com/dddkhewor/image/upload/v1740596255/Screenshot_2025-02-26_205832_edrphd.png`,
    description: [
      "Frontend First Full Stack Project",
      "Uses GOOGLE OAUTH 2.0 For User Authentication and Authorization",
      "Have utilized Cloudinary to upload files",
      "Users can create albums, upload pictures, like, comment on, and delete them.",
      "Albums can be shared with other users, who can download images and comment on them.",
      "Custom backend HTTP server using Node.js, Cloudinary to make the backend for the application possible, MongoDB, Express, Google Oauth.",
    ],
    frontendGH: `https://github.com/keizh/StoreMultiMedia_frontend`,
    backendGH: `https://github.com/keizh/StoreMultiMedia_backend`,
    link: `https://storemultimedia-frontend.vercel.app/user/login`,
    alert: "",
    vlink: "",
  },
  {
    name: "Lets Chat",
    url: `https://res.cloudinary.com/dddkhewor/image/upload/v1740595590/Screenshot_2025-02-26_205832_wouggb.png`,
    description: [
      "Frontend First Full Stack Application",
      "Real-time one-to-one chat.",
      "Real-time group chat.",
      "Upload images, PDFs, audio files, and videos.",
      "Instant notifications for new messages.",
    ],
    frontendGH: `https://github.com/keizh/LetsChat_Frontend`,
    backendGH: `https://github.com/keizh/LETSChat_backend`,
    link: ``,
    alert: `⚠️ Alert: Learning DevOps to Host WEB-SOCKET-SERVER FOR THIS APPLICATION ON AWS CLOUD`,
    vlink: "https://www.youtube.com/watch?v=LLNNX9bpzw8",
  },
];

function Page2() {
  return (
    <div className="min-h-screen max- py-2 relative mb-[40vh] z-[5] bg-white">
      <Typography variant="h1" className="text-center">
        Projects
      </Typography>
      <div className="max-w-5xl mx-auto py-6 grid md:grid-cols-2 lg:grid-cols-1 gap-[20px] lg:gap-[50px]">
        {projects.map((ele, index) => (
          <ProjectComp key={index} index={index} ele={ele} />
        ))}
      </div>
    </div>
  );
}

export default Page2;
