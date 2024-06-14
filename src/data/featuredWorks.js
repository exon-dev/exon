import paragoAdmin from "../assets/paragoadmin.png";
import oneSiargao from "../assets/onesiargao.png";
import questionooze from "../assets/questionooze.png";
import doTrack from "../assets/dotrack.png";

const featuredWorks = [
 {
  project: "Parago Admin",
  type: "Web Application",
  desc:
   "Multi-functional dashboard for managing events and itineraries organized by LGUs",
  img: paragoAdmin,
  stack: "React Express TailwindCSS",
 },
 {
  project: "One Siargao",
  type: "Web Application",
  desc:
   "GIS-Based Network Analysis in Finding Optimal Route on Accessing Tourist Places in Siargao Island, Philippines",
  img: oneSiargao,
  stack: "React Express TailwindCSS",
 },
 {
  project: "Questionooze",
  type: "Web Application",
  desc:
   "A web application that can generate questionnaires based on Bloom's Taxonomy using generative artificial intelligence.",
  img: questionooze,
  stack: "React OpenAI Express TailwindCSS Supabase",
 },
 {
  project: "Do-Track",
  type: "Web Application",
  desc:
   "A solution designed to simplify and enhance the tracking of student participation in cleaning drives within educational institutions.",
  img: doTrack,
  stack: "React Laravel TailwindCSS",
 },
];

export default featuredWorks;
