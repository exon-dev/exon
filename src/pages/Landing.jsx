/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../components/nav";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import cursor_one from "../assets/cursor_one.png";
import cursor_two from "../assets/cursor_two.png";

const Landing = () => {
	const [state, triggerAnimation] = useState(false);
	return (
		<div className='bg-light h-full'>
			<Navbar />
			<div className='flex flex-col gap-4 place-items-center h-full'>
				<motion.h1
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{
						duration: 1,
						delay: 0.64,
					}}
					className='font-head text-center xxxs:mt-14 text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl'>
					Supercharge your business to success
				</motion.h1>
				<motion.p
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{
						duration: 1,
						delay: 0.78,
					}}
					className='font-main text-paragraph text-center xxxs:text-[13px] xxxs:px-2 sm:text-sm md:text-md px-8 lg:text-lg xl:text-xl'>
					We are a group of developers who passionately build solutions to enhance
					and streamline your business operations, ensuring smooth and efficient
					growth.
				</motion.p>
				<motion.button
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{
						duration: 1,
						delay: 0.84,
					}}
					onMouseEnter={() => triggerAnimation(true)}
					onMouseLeave={() => triggerAnimation(false)}
					className='mt-8 border border-black rounded-full font-semibold font-main px-4 py-2 flex gap-4 items-center xxxs:text-[12px] xs:text-[15px] sm:text-sm md:text-md lg:text-lg xl:text-xl'>
					Book for a project
					<motion.div
						initial={{ rotate: 0 }}
						animate={{ rotate: state ? 45 : 0 }}
						transition={{ duration: 0.2 }}>
						<FiArrowUpRight className='border border-black rounded-full xxxs:text-xl sm:text-md xl:text-2xl 2xl:text-4xl' />
					</motion.div>
				</motion.button>
			</div>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{
					duration: 1,
					delay: 1,
				}}
				className='absolute z-50 xxxs:w-36 sm:w-44 sm:-left-10 md:w-52 md:left-24 lg:w-64 lg:left-56'>
				<motion.img
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2.4, repeat: Infinity }}
					src={cursor_one}
					className=''
					draggable={false}
				/>
			</motion.div>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{
					duration: 1.3,
					delay: 1,
				}}
				className='absolute z-50 xxxs:w-36 xxxs:left-[140px] xxxs:mt-20 sm:w-44 sm:left-64 md:left-[640px] lg:w-64 lg:left-[690px] xl:left-[980px] 2xl:left-[1100px] 3xl:left-[1390px]'>
				<motion.img
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 1.7, repeat: Infinity, delay: 0.3 }}
					src={cursor_two}
					draggable={false}
				/>
			</motion.div>
		</div>
	);
};

export default Landing;
