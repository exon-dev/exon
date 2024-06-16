/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import mark from "../assets/mark.png";
import members from "../data/team";
import { CiGlobe } from "react-icons/ci";
import { GrGithub } from "react-icons/gr";

const Team = () => {
	return (
		<div className='grid place-items-center justify-center w-full font-main'>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
				className='font-main flex flex-col justify-center items-center gap-10 xxxs:my-44 xs:my-52 sm:my-72 md:my-96 lg:my-[200px]'>
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
			<div className='mb-24 xxxs:flex flex-col gap-8 lg:grid grid-cols-3 lg:gap-4'>
				{members?.map((member, idx) => {
					return (
						<motion.div
							initial={{ y: idx % 2 === 0 ? -100 : 100, opacity: 0 }}
							whileInView={{
								y: 0,
								opacity: 1,
							}}
							transition={{ duration: 1, delay: idx * 0.3 }}
							key={idx}
							className='col-span-1 flex gap-8 items-center bg-zinc-100 py-2 px-4 rounded-md border border-zinc-300 shadow-md'>
							{member.image}
							<div className='flex flex-col items-left'>
								<h1 className='text-black font-bold xxxs:text-sm xxs:text-md md:text-lg lg:text-xl'>
									{member.name}
								</h1>
								<h2 className='text-black font-regular xxxs:text-xs xxs:text-sm md:text-md'>
									{member.role}
								</h2>
								<div className='mt-4 flex gap-4 items-center'>
									<a
										href={member.github_link}
										target='_blank'>
										<GrGithub />
									</a>
									<a
										href={member.portfolio}
										target='_blank'>
										<CiGlobe />
									</a>
								</div>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

export default Team;
