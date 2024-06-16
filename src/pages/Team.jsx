/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import mark from "../assets/mark.png";

const Team = () => {
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
						THE TALENTS BEHIND EXON
					</h1>
				</div>
				<h1 className='text-black font-bold text-center xs:text-lg sm:text-xl md:text-2xl md:px-10 lg:text-5xl lg:px-32 xl:px-42 2xl:px-64'>
					Exon's success relies on the expertise of its skilled team members to
					deliver exceptional products.
				</h1>
			</motion.div>
		</div>
	);
};

export default Team;
