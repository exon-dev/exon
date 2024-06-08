/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { stack as Menu } from "react-burger-menu";
import { Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { RiMenu3Fill } from "react-icons/ri";

import logo from "../assets/logo.png";
import menu from "../data/menu";

const Navbar = () => {
	const controls = useAnimation();
	const [direction, setDirection] = useState(1);

	useEffect(() => {
		controls.start({
			rotate: [null, 480 * direction],
			transition: {
				duration: 3,
				repeat: Infinity,
				ease: "linear",
			},
		});

		setTimeout(() => {
			setDirection(-1 * direction);
		}, 3000);
	}, [direction, controls]);
	return (
		<div className='flex justify-between items-center xxxs:py-10 md:py-14 lg:py-16'>
			<motion.img
				initial={{ x: -1000 }}
				animate={{ x: 0 }}
				transition={{
					duration: 0.7,
					delay: 0.64,
				}}
				src={logo}
				alt='Exon LOGO'
				className='xxxs:w-20 xxxs:h-6 md:w-24 lg:w-28 xl:w-32 xl:h-8'
				draggable={false}
			/>
			<div className='xxxs:hidden md:block'>
				<motion.div
					initial={{ y: -1000 }}
					animate={{ y: 0 }}
					transition={{
						duration: 0.7,
						delay: 0.64,
					}}
					className='flex gap-10 items-center px-8 py-2 rounded-full bg-[#CDCDCD] border border-[#929292]'>
					{menu.map((item, index) => (
						<Link
							key={index}
							to={item.url}
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							activeClass='active'
							className='cursor-pointer px-3 py-2 font-main hover:duration-200 hover:bg-zinc-400 rounded-full hover:no-underline hover:text-white'>
							{item.title}
						</Link>
					))}
				</motion.div>
			</div>
			<div className='xxxs:block md:hidden'>
				<Menu
					right
					customBurgerIcon={<RiMenu3Fill size={40} />}>
					{menu.map((item, idx) => {
						return (
							<Link
								onClick={() =>
									document.getElementById("react-burger-cross-btn")?.click()
								}
								key={idx}
								to={item.link}
								spy={true}
								smooth={true}
								offset={-70}
								className='menu-item font-sub'>
								{item.title}
							</Link>
						);
					})}
				</Menu>
			</div>
			<motion.button
				initial={{ x: 1000 }}
				animate={{ x: 0 }}
				transition={{
					duration: 0.7,
					delay: 0.64,
				}}
				className='font-main font-semibold text-white bg-black rounded-full px-6 shadow-custom xxxs:hidden md:block py-4'>
				Agency Profile
			</motion.button>
		</div>
	);
};

export default Navbar;