import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Training Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
             title="SOCIAL MEDIA APP"
             des=" SocialHub is a web application that allows users to create accounts, log in, view profiles,
              and interact with posts on the home page. Users can like and comment on posts shared by others."
          />

          <ResumeCard
             title="E-Shop Website"
              des="Developed a full-stack e-shop web application using React, Node.js, and MySQL, incorporating a 
              user-friendly interface with React and state management via Redux."

          />
          <ResumeCard
          title="Travel Story App"
          des="The Travel Story Application is a comprehensive platform 
          designed to enable users to manage their travel stories, images, and itineraries."          
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Training Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
          title="Admin Dashboard"
          des="Expertly engineered an intuitive ADMIN DASHBOARD utilizing React Router for
           seamless navigation and React JS for  dynamic user interfaces, state management Redux "
          />
          <ResumeCard
            title="Multi Step Form"
            des="A multi-step form is a type of form that is divided into multiple sections ,
              where each section collects a part of the form data."
          />
          <ResumeCard
              title="Chatting App"
              des=""
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
