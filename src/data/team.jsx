/**
 * If you want to change the icon, just save your image in the assets/team folder
 */
import { FaRegUserCircle } from "react-icons/fa";
import fra from "../assets/talents/fra.png";
import trikk from "../assets/talents/trik.png";
import carlo from "../assets/talents/carlo.png";
import franc from "../assets/talents/franc.jpg";

const members = [
	{
		image: (
			<img
				src={fra}
				alt='Francis TIn-ao'
				draggable={false}
			/>
		),
		name: "Francis Tin-ao",
		role: "Full-stack Developer",
		github_link: "https://github.com/qarudafxz",
		portfolio: "https://francistinao.tech",
	},
	{
		image: <FaRegUserCircle size={65} />,
		name: "Angelo Galope",
		role: "Front-end Developer",
		github_link: "https://github.com/angelogalope",
		portfolio: "https://angelogalope.vercel.app",
	},
	{
		image: (
			<img
				src={trikk}
				alt='Patrick Dionen'
				draggable={false}
			/>
		),
		name: "Patrick Dionen",
		role: "Full-stack Developer",
		github_link: "https://github.com/ImTrikk",
		portfolio: "https://patrick-dionen.vercel.app/",
	},
	{
		image: (
			<img
				src={franc}
				alt='Franclloyd Dagdag'
				draggable={false}
				className='w-24 h-auto rounded-full'
			/>
		),
		name: "Franclloyd Dagdag",
		role: "Full-stack Developer",
		github_link: "https://github.com/Kendaichi",
		portfolio: "",
	},
	{
		image: <FaRegUserCircle size={65} />,
		name: "Lenor Jamero",
		role: "Front-end Developer",
		github_link: "https://github.com/RenoaJamezu",
		portfolio: "",
	},
	{
		image: (
			<img
				src={carlo}
				alt='Carlo Gaballo'
				draggable={false}
			/>
		),
		name: "Carlo Gaballo",
		role: "Front-end Developer",
		github_link: "https://github.com/Crlgbll",
		portfolio: "",
	},
	{
		image: <FaRegUserCircle size={65} />,
		name: "Bryan Ramos",
		role: "Full-stack Developer",
		github_link: "https://github.com/BryanIanRamos",
		portfolio: "https://bryan-ramos-phi.vercel.app/",
	},
	{
		image: <FaRegUserCircle size={65} />,
		name: "Julliane Tampus",
		role: "Full-stack Developer",
		github_link: "https://github.com/Yan-2003",
		portfolio: "https://jull.vercel.app/",
	},
	{
		image: <FaRegUserCircle size={65} />,
		name: "Cyrel Cabodbod",
		role: "Full-stack Developer",
		github_link: "https://github.com/Cyrelcab",
		portfolio: "https://cyrel-cabodbod.vercel.app/",
	},
	{
		image: <FaRegUserCircle size={65} />,
		name: "Lieca Eleccion",
		role: "Back-end Developer",
		github_link: "https://github.com/ELiiee03",
		portfolio: "https://liecaeleccion.vercel.app/",
	},
];

export default members;
