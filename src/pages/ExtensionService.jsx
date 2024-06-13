import { motion } from "framer-motion";
import mark from "../assets/mark.png";
import Wrapper from "./Wrapper";
import graphicdesign from "../assets/graphicdesign.png"
import uxdesign from "../assets/uxdesign.png"
import consultation from "../assets/consultation.png"


const ExtensionService = () => {
 return(
  <div className='grid place-items-center justify-center w-full'>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
				className='font-main flex flex-col justify-center items-center gap-10 xxxs:my-44'>
				<div className='flex gap-4 items-center'>
					<img
						src={mark}
						alt='Mark'
						className='xxxs:w-4 xxs:w-4 sm:w-5'
					/>
					<h1 className='text-black font-semibold xxxs:text-[10px] xxs:text-[12px] xs:text-xs sm:text-sm md:text-lg'>
						EXON’S SERVICES EXTENSION
					</h1>
				</div>
				<h1 className='text-black font-bold text-center xs:text-lg sm:text-xl md:text-2xl md:px-10 lg:text-5xl lg:px-32 xl:px-42 2xl:px-64'>
				Not only that we are reliable for <br />
developing your digital solution. We also <br /> offer...
				</h1>
   <Wrapper>
   <div className='container text-white flex md:flex-row gap-5 mt-10 flex-col'><motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.2 }}
							viewport={{ once: true }}
							className='flex items-center justify-end gap-5 p-5'>
       <div className="h-auto w-[360px] bg-darkgray border-[5px] border-[#646464] text-white rounded-2xl p-5"><img src={graphicdesign} alt="" /><h1 className="text-3xl mt-10 font-semibold">Graphic Design</h1><p>We excel in both development and graphic design, creating advertisements that capture attention and engagement.</p></div>
       <div className="h-[330px] w-[360px] bg-darkgray border-[5px] border-[#646464] text-white rounded-2xl p-5"><img src={uxdesign} alt="" /><h1 className="text-3xl mt-10 font-semibold">UI/UX Design</h1><p>We also offer UI/UX design, crafting intuitive interfaces that enhance user experience and engagement.</p></div>
       <div className="h-auto w-[360px] bg-darkgray border-[5px] border-[#646464] text-white rounded-2xl p-5"><img src={consultation} alt="" /><h1 className="text-3xl mt-10 font-semibold">Consultation</h1><p>We also offer consultation services, providing expert advice to optimize your business’ digital products.</p></div>
       </motion.div></div>
   </Wrapper>
			</motion.div>
		</div>
 )
}

export default ExtensionService