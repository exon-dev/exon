/**
 *
 * If you wish to add your project, followw the instructions below:
 *
 * 1. Upload a screenshot of your project in the assets folder
 * 2. Provide corresponding details
 * 3. Locate the path of the image
 */

import parago from "../assets/parago.png";
import one from "../assets/one.png";
import questionooze from "../assets/questionooze.png";
import do_track from "../assets/do.png";

const projects = [
	{
		thumbnail: (
			<img
				src={parago}
				draggable={false}
			/>
		),
		title: "Parago Dashboard",
		category: "WEB APPLICATION",
		desc:
			"Multi-functional dashboard for managing events and itineraries organized by LGUs.",
		link: "",
		stack: ["React", "Express", "TailwindCSS"],
	},
	{
		thumbnail: (
			<img
				src={one}
				draggable={false}
			/>
		),
		title: "One Siargao",
		category: "WEB APPLICATION",
		desc:
			"GIS-Based Network Analysis in Finding Optimal Route on Accessing Tourist Places in Siargao Island, Philippines.",
		link: "https://one-siargao.vercel.app",
		stack: ["React", "Express", "TailwindCSS", "Node"],
	},
	{
		thumbnail: (
			<img
				src={questionooze}
				draggable={false}
			/>
		),
		title: "Questionooze",
		category: "WEB APPLICATION",
		desc:
			"Web application that can generate questionnaires based on Bloom's Taxonomy using generative artificial intelligence.",
		link: "https://questionooze.vercel.app",
		stack: ["React", "Express", "TailwindCSS", "OpenAI", "Supabase"],
	},
	{
		thumbnail: (
			<img
				src={do_track}
				draggable={false}
			/>
		),
		title: "Do-Track",
		category: "WEB APPLICATION",
		desc:
			"Solution designed to simplify and enhance the tracking of student participation in cleaning drives within educational institutions.",
		link: "",
		stack: ["React", "Laravel", "TailwindCSS"],
	},
];

export default projects;
