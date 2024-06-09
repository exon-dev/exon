/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import mark from "../assets/mark.png";
import { motion } from "framer-motion";

const Objective = () => {
	return (
		<div className='bg-light grid place-items-center justify-center w-full h-full'>
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
					<h1 className='font-semibold xxxs:text-[10px] xxs:text-[12px] xs:text-xs sm:text-sm md:text-lg'>
						EXON'S MISSION FOR ITS CLIENT
					</h1>
				</div>
				<h1 className='font-bold text-center xs:text-lg sm:text-xl md:text-2xl md:px-10 lg:text-5xl lg:px-32 xl:px-42 2xl:px-64'>
					Empower your business with our technology-driven solutions for seamless
					task automation.
				</h1>
				<p className='text-center text-zinc-500 xxxs:text-[13px] xxxs:px-2 sm:text-sm md:text-md px-8 lg:text-lg lg:px-32 xl:text-xl xl:px-42 2xl:px-64'>
					You'll always be a key team member during our development process. We
					ensure regular updates on project progress, enabling timely adjustments
				</p>
			</motion.div>
		</div>
	);
};

export default Objective;
