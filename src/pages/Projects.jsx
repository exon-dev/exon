/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import mark from "../assets/mark.png";
import Wrapper from "./Wrapper";
import projects from "../data/projects";
import ProjectCards from "../components/ProjectCards";
// import { TypeAnimation } from "react-type-animation";

const Projects = () => {
	return (
		<div className='grid place-items-center justify-center w-full font-main'>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
				className='font-main flex flex-col justify-center items-center gap-10 xxxs:my-44 xs:my-52 sm:my-72 md:my-96 lg:my-[450px]'>
				<div className='flex gap-4 items-center'>
					<img
						src={mark}
						alt='Mark'
						className='xxxs:w-4 xxs:w-4 sm:w-5'
					/>
					<h1
						id='projects'
						className='text-black font-semibold xxxs:text-[10px] xxs:text-[12px] xs:text-xs sm:text-sm md:text-lg'>
						EXON’S FEATURED WORKS
					</h1>
				</div>
				<h1 className='text-black font-bold text-center xs:text-lg sm:text-xl md:text-2xl md:px-10 lg:text-5xl lg:px-32 xl:px-42 2xl:px-64'>
					We have deployed over 10+ digital solutions to our clients.
				</h1>
			</motion.div>
			<Wrapper>
				{projects?.map((project, idx) => {
					return (
						<motion.div
							initial={{ x: idx % 2 === 0 ? -100 : 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 1, delay: idx * 1.5 }}
							key={idx}>
							<ProjectCards
								project={project}
								idx={idx}
							/>
						</motion.div>
					);
				})}
			</Wrapper>
			<h1 className='my-32 font-bold xxxs:text-xl md:text-3xl lg:text-5xl xl:text-6xl'>
				And there's more...
			</h1>

			{/* <TypeAnimation
				sequence={[
					"And",
					300,
					"And there",
					400,
					"And there is",
					500,
					"And there is more",
					700,
					"And there is more.",
					1000,
					"And there is more..",
					1100,
					"And there is more...",
					1300,
					"And there is more..",
					100,
					"And there is more.",
					100,
					"And there is more",
					100,
					"And there is",
					100,
					"And there",
					100,
					"And",
					100,
					"",
					500,
					() => {
						console.log("");
					},
				]}
				wrapper='h1'
				cursor={true}
				repeat={Infinity}
				className='my-32 font-bold xxxs:text-xl md:text-3xl lg:text-5xl xl:text-6xl'
				style={{ display: "inline-block" }}
			/> */}
		</div>
	);
};

export default Projects;
