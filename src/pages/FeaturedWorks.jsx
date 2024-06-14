import featuredWorks from "../data/featuredWorks";
import mark from "../assets/mark.png";
import globe from "../assets/globe.png";
import { motion } from "framer-motion";
import Wrapper from "./Wrapper";

const FeaturedWorks = () => {
 return (
  <div id="projects" className="grid place-items-center justify-center w-full">
   <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="font-main flex flex-col justify-center items-center gap-10 xxxs:my-44"
   >
    <div className="flex gap-4 items-center">
     <img src={mark} alt="Mark" className="xxxs:w-4 xxs:w-4 sm:w-5" />
     <h1 className="text-black font-semibold xxxs:text-[10px] xxs:text-[12px] xs:text-xs sm:text-sm md:text-lg">
      EXON’S SERVICES EXTENSION
     </h1>
    </div>
    <h1 className="text-black font-bold text-center xs:text-lg sm:text-xl md:text-2xl md:px-10 lg:text-5xl lg:px-32 xl:px-42 2xl:px-64">
     We've deployed over 10+ digital solutions <br /> to our clients.
    </h1>
    <Wrapper>
     <div className="space-y-10 md:space-y-0">
      {featuredWorks?.map((project, id) => (
       <motion.div
        initial={{ opacity: 0, x: id % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        key={id}
        className={`flex flex-col lg:flex-wrap items-center lg:gap-10 lg:my-10 space-y-10 ${
         id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        }`}
       >
        <div className="lg:w-[390px]">
         <div className="flex items-center mt-2 gap-2">
          <img src={mark} alt="" className="w-[15px] md:w-[25px]" />
          <p className="text-xs md:text-md lg:text-lg">{project.type}</p>
         </div>
         <h1 className="text-lg md:text-3xl font-bold md:mt-5">
          {project.project}
         </h1>
         <p className="md:mt-2 text-xs md:text-md lg:text-2xl text-paragraph">
          {project.desc}
         </p>
         <div className="flex items-center just gap-2 mt-2 md:mt-8">
          <img src={globe} alt="" className="w-[15px] md:w-[30px]" />
          <p className="text-xs md:text-lg">{project.stack}</p>
         </div>
        </div>
        <img
         src={project?.img}
         alt={project.project}
         className="mt-2 md:mt-0"
        />
       </motion.div>
      ))}
     </div>
    </Wrapper>
    <div className="mt-10 flex items-start justify-start w-full">
     <h1 className="text-black font-bold xs:text-lg sm:text-xl md:text-2xl md:px-10 lg:text-5xl lg:px-32 xl:px-42 2xl:px-64">
      And there’s more....
     </h1>
    </div>
   </motion.div>
  </div>
 );
};

export default FeaturedWorks;
