import "./index.css";
import { Analytics } from "@vercel/analytics/react";
import bg from "./assets/bg.png";
import Hero from "./pages/Hero";
import Objective from "./pages/Objective";
import arrow from "./assets/arrow.png";
import Wrapper from "./pages/Wrapper";

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
				<Wrapper>
					<Hero />
				</Wrapper>
				<div className='flex justify-center items-center'>
					<img
						src={arrow}
						alt='Arrow'
						className='absolute bottom-0 animate-bounce w-10 h-10'
					/>
				</div>
			</div>
			<Objective />
			<Analytics />
		</>
	);
}

export default App;
