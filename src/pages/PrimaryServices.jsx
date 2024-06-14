/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import mark from "../assets/mark_white.png";
import { motion } from "framer-motion";
import "../../public/css/custom.css";
import Wrapper from "./Wrapper";
import ServiceCards from "../components/ServiceCards";
import remainingServices from "../data/remainingServices";

const Project = () => {
	return (
		<div
			id='about'
			className='bg-black grid place-items-center justify-center w-full'>
			<div className='cm-bg-img'></div>
			<div className='cm-bg-img2'></div>
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
					<h1 className='text-white font-semibold xxxs:text-[10px] xxs:text-[12px] xs:text-xs sm:text-sm md:text-lg'>
						EXON'S PRIMARY SERVICES
					</h1>
				</div>
				<h1 className='text-white font-bold text-center xs:text-lg sm:text-xl md:text-2xl md:px-10 lg:text-5xl lg:px-32 xl:px-42 2xl:px-64'>
					We design and build solutions digitally
					<br />
					for business automation
				</h1>
				<Wrapper>
					<div className='container text-white flex md:flex-row gap-5 mt-10 flex-col'>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.2 }}
							viewport={{ once: true }}
							className='flex flex-col justify-end bg-darkgray border-lightgray xl:h-96 xl:w-2/4 gap-5 p-5'>
							<h2 className='text-3xl font-semibold'>
								Web
								<br />
								Applications
							</h2>
							<p className='md:text-2xl '>
								Nexon develops applications running on the web with modern technologies.
							</p>
						</motion.div>
						<div className='flex flex-col md:w-2/4 gap-5'>
							{remainingServices?.map((service, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 1, delay: 0.4 + index * 0.2 }}
									viewport={{ once: true }}>
									<ServiceCards
										title={service.title}
										description={service.description}
									/>
								</motion.div>
							))}
						</div>
					</div>
				</Wrapper>
			</motion.div>
		</div>
	);
};

export default Project;
