import "./index.css";
import { Analytics } from "@vercel/analytics/react";
import bg from "./assets/bg.png";
import projects_bg from "./assets/projects_bg.png";
import Hero from "./pages/Hero";
import Objective from "./pages/Objective";
import arrow from "./assets/arrow.png";
import Navbar from "./components/Navbar";
import PrimaryServices from "./pages/PrimaryServices";
import ServiceExtension from "./pages/ExtensionService";
import Projects from "./pages/Projects";
import Team from "./pages/Team";

function App() {
	return (
		<>
			<Navbar />
			<div
				style={{
					backgroundImage: `url(${bg})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					height: "100vh",
					width: "100%",
				}}>
				<Hero />
				<div className='flex justify-center items-center'>
					<img
						src={arrow}
						alt='Arrow'
						className='absolute bottom-0 animate-bounce w-10 h-10'
					/>
				</div>
			</div>
			<Objective />
			<PrimaryServices />
			<ServiceExtension />
			<div
				style={{
					backgroundImage: `url(${projects_bg})`,
					backgroundSize: "cover",
					backgroundPosition: "bottom",
					backgroundRepeat: "no-repeat",
					height: "100vh",
					width: "100%",
				}}>
				<Projects />
				<Team />
			</div>
			<Analytics />
		</>
	);
}

export default App;
