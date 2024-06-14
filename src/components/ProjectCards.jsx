/* eslint-disable react/prop-types */
import mark from "../assets/mark.png";
import { CiGlobe } from "react-icons/ci";

const ProjectCards = ({ project, idx }) => {
	const isEven = idx % 2 === 0;

	return (
		<div
			className={`my-20 flex flex-col items-center justify-end gap-8 p-5 lg:grid grid-cols-5 ${
				isEven ? "lg:grid-flow-col-dense" : ""
			}`}>
			{/* Left div */}
			<div className={`col-span-3 ${isEven ? "order-2" : ""}`}>
				{project.thumbnail}
			</div>
			{/* Right div */}
			<div className={`col-span-2 ${isEven ? "order-1" : ""}`}>
				<div className='flex gap-3 items-center mb-3'>
					<img
						src={mark}
						className='xxxs:w-4 xxs:w-4 sm:w-5'
					/>
					<h1>{project.category}</h1>
				</div>
				<h1 className='font-bold xxxs:text-md xxs:text-lg sm:text-xl md:text-2xl'>
					{project.title}
				</h1>
				<p>{project.desc}</p>
				<div className='text-sm grid xxxs:grid-cols-3 lg:grid-cols-4 gap-2 items-center mt-4'>
					<a
						href={project.link ?? null}
						target='_blank'
						rel='noopener noreferrer'>
						<CiGlobe />
					</a>
					{project.stack.map((tag, idx) => (
						<div
							key={idx}
							className='flex items-center justify-center gap-2 bg-zinc-900 border-2 border-zinc-500 text-white px-4 text-[10px] rounded-full'>
							<p className='text-center'>{tag}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectCards;
