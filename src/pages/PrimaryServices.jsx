import React from "react";
import mark from "../assets/mark_white.png";
import { motion } from "framer-motion";
import '../../public/css/custom.css'
import Wrapper from "./Wrapper";

const Project = () =>{
  return (
    <div className='bg-black grid place-items-center justify-center w-full'>
		<div className="cm-bg-img"></div>
		<div className="cm-bg-img2"></div>
		<motion.div
			initial={{ scale: 0 }}
			whileInView={{
				scale: 1,
			}}
			viewport={{ once: true }}
			className='font-main flex flex-col justify-center items-center gap-10 xxxs:my-44 xs:my-52 sm:my-72 md:my-96 lg:my-[450px]'>
			<div className='flex gap-4 items-center'>
				<img
					src={mark}
					alt='Mark'
					className='xxxs:w-4 xxs:w-4 sm:w-5'
				/>
				<h1 className='text-white font-semibold xxxs:text-[10px] xxs:text-[12px] xs:text-xs sm:text-sm md:text-lg'>
					EXON'S PRIMARY SERVICES
				</h1>
			</div>
			<h1 className='text-white font-bold text-center xs:text-lg sm:text-xl md:text-2xl md:px-10 lg:text-5xl lg:px-32 xl:px-42 2xl:px-64'>
				We design and build solutions digitally<br/>
				for business automation
			</h1>
			<Wrapper>
				<div className="container text-white flex md:flex-row gap-5 mt-10 flex-col">
					<div className="flex flex-col justify-end bg-darkgray border-lightgray xl:h-96 xl:w-2/4 gap-5 p-5">
						<h2 className="text-3xl font-semibold">Web<br/>Applications</h2>
						<p className="md:text-2xl ">Nexon develops applications running on the web with modern technologies.</p>
					</div>
					<div className="flex flex-col md:w-2/4 gap-5">
						<div className="flex flex-col justify-end bg-darkgray border-lightgray h-full gap-5 p-5">
							<h2 className="text-3xl font-semibold" >Mobile<br/>Applications</h2>
							<p className="">We develop cross-platform mobile apps that are compatible with different mobile operating systems.</p>
						</div>
						<div className="flex flex-col justify-end bg-darkgray border-lightgray h-full gap-5 p-5">
							<h2 className="text-3xl font-semibold" >Landing Pages or<br/>Websites</h2>
							<p className="">We develop modern websites that are pleasing to the customers’ clients.</p>
						</div>
					</div>
				</div>
			</Wrapper>
		</motion.div>
	</div>
  )
}

export default Project