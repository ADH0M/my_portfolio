import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor's in computer science"
            subTitle="New Cairo University (2018 - 2022)"
            result="3.1 gpa"
            des={''}
          />

          <ResumeCard
            title="ERP System"
            subTitle="Graduation Project - (2022 - 2021)"
            des='Actively participated in developing a web application project for an ERP system during my time at University Project .
• This project involved using React.js to create a user-friendly interface, implementing responsive design.
• The ERP system integrated and managed core business processes such as finance, supply chain, and human resources.'
            
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">training </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">

          <ResumeCard
            title="React Web Developer Internship "
            subTitle="Digital Egypt Pioneers Initiative (DEPI)"
            des="• This opportunity promises to hone my soft skills, enhance my English proficiency, and bolster my technical prowess .
                 • Learned web development basics HTML5, CSS3, JavaScript, Tailwind css
                 • full-stack application development with React.js, Node.js, and Express ,MySql ,MongoDB.
                 • Getting started with Git, GitHub, Docker"
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Travel Story Ap - (2024 - 2024)"
           />


        </div>
      </div>
    </motion.div>
  );
}

export default Education