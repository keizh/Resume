import { Typography } from "@material-tailwind/react";
import ProjectComp from "../components/ProjectComp";
const projects = [
  {
    name: "WYM ( Watch Your Movie )",
    url: `https://res.cloudinary.com/dddkhewor/image/upload/fl_preserve_transparency/v1740583782/Screenshot_2025-02-26_205832_l5ex75.jpg?_s=public-apps`,
    description:
      "Leverages the open-source TMDB API to showcase trending movies, TV shows, and actors, providing their Wikipedia and social media links. Features powerful search capabilities for movies, trailers, and OTT platform availability, along with personalized recommendations.",
    link: `https://watch-your-movie.netlify.app/`,
    alert: `⚠️ Alert: Occasionally you might require VPN`,
  },
  {
    name: "WYM ( Watch Your Movie )",
    url: `https://res.cloudinary.com/dddkhewor/image/upload/fl_preserve_transparency/v1740583782/Screenshot_2025-02-26_205832_l5ex75.jpg?_s=public-apps`,
    description:
      "Leverages the open-source TMDB API to showcase trending movies, TV shows, and actors, providing their Wikipedia and social media links. Features powerful search capabilities for movies, trailers, and OTT platform availability, along with personalized recommendations.",
    link: `https://watch-your-movie.netlify.app/`,
    alert: `⚠️ Alert: Occasionally you might require VPN`,
  },
  {
    name: "WYM ( Watch Your Movie )",
    url: `https://res.cloudinary.com/dddkhewor/image/upload/fl_preserve_transparency/v1740583782/Screenshot_2025-02-26_205832_l5ex75.jpg?_s=public-apps`,
    description:
      "Leverages the open-source TMDB API to showcase trending movies, TV shows, and actors, providing their Wikipedia and social media links. Features powerful search capabilities for movies, trailers, and OTT platform availability, along with personalized recommendations.",
    link: `https://watch-your-movie.netlify.app/`,
    alert: `⚠️ Alert: Occasionally you might require VPN`,
  },
  {
    name: "WYM ( Watch Your Movie )",
    url: `https://res.cloudinary.com/dddkhewor/image/upload/fl_preserve_transparency/v1740583782/Screenshot_2025-02-26_205832_l5ex75.jpg?_s=public-apps`,
    description:
      "Leverages the open-source TMDB API to showcase trending movies, TV shows, and actors, providing their Wikipedia and social media links. Features powerful search capabilities for movies, trailers, and OTT platform availability, along with personalized recommendations.",
    link: `https://watch-your-movie.netlify.app/`,
    alert: `⚠️ Alert: Occasionally you might require VPN`,
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
