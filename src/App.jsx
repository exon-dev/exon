import Landing from "./pages/Landing";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";
import bg from "./assets/bg.png";

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
				<div className='xxxs:px-10 xxs:px-12 sm:px-14 md:px-32 lg:px-40 xl:px-72 3xl:px-96'>
					<Landing />
				</div>
			</div>
			<Analytics />
		</>
	);
}

export default App;
