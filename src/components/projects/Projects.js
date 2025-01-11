import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,tarvialStoryApp , socialHub ,adminDashboard ,mutliStepForm ,eshop} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA APP"
          des=" SocialHub is a web application that allows users to create accounts, log in, view profiles,
           and interact with posts on the home page. Users can like and comment on posts shared by others."
          src={socialHub}
          demo=' https://social-media-app-theta-ashy.vercel.app/'
          git='https://github.com/ADH0M/SocialMedia-App'
        />
        <ProjectsCard
          title="E-Shop Website"
          des="Developed a full-stack e-shop web application using React, Node.js, and MySQL, incorporating a 
          user-friendly interface with React and state management via Redux."
          src={eshop}
          demo='https://github.com/ADH0M/Gallery-app-full_stack'
          git="https://github.com/ADH0M/Gallery-app-full_stack"

        />
        <ProjectsCard
          title="Travel Story App"
          des="The Travel Story Application is a comprehensive platform 
          designed to enable users to manage their travel stories, images, and itineraries."
          src={tarvialStoryApp}
          demo='https://adh0m.github.io/TravelStoryApp/'
          git="https://github.com/ADH0M/TravelStoryApp"

        />
        <ProjectsCard
          title="Admin Dashboard"
          des=" Expertly engineered an intuitive ADMIN DASHBOARD utilizing React Router for
           seamless navigation and React JS for  dynamic user interfaces, state management Redux"
          src={adminDashboard}
          demo='https://admin-dash-board-pink.vercel.app/'
          git="https://github.com/ADH0M/Admin-DashBoard"

        />
        <ProjectsCard
          title="Multi Step Form"
          des="A multi-step form is a type of form that is divided into multiple sections ,
           where each section collects a part of the form data."
          src={mutliStepForm}
          demo='https://adh0m.github.io/multi-step-form-main/'
          git="https://github.com/ADH0M/Gallery-app-full_stack"
        />
        <ProjectsCard
          title="Chatting App"
          des=""
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects