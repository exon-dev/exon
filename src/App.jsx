import "./index.css";
import { Analytics } from "@vercel/analytics/react";
import bg from "./assets/bg.png";
import Container from "./pages/Container";
import Landing from "./pages/Landing";
import Mission from "./pages/Mission";
import arrow from "./assets/arrow.png";

function App() {
	return (
		<>
			<div
				style={{
					backgroundImage: `url(${bg})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					height: "100vh",
					width: "100%",
				}}>
				<Container>
					<Landing />
				</Container>
				<div className='flex justify-center items-center'>
					<img
						src={arrow}
						alt='Arrow'
						className='absolute bottom-0 animate-bounce w-10 h-10'
					/>
				</div>
			</div>
			<Mission />
			<Analytics />
		</>
	);
}

export default App;
