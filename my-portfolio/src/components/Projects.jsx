import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/ecommerce.png';
import Img2 from '../assets/chatapp.png';
import ProjectCard from './ProjectCard';
const Projects = () => {
    return (
        <div className="section text-white" id="projects">
            <div className='container mx-auto'>
                <div>
                    <div>
                        <div>
                            <h2 className='leading-tight mb-12 text-[36px] lg:text-[60px] text-lg text-white font-semibold uppercase'>My Latest Projects</h2>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-10'>
                    <ProjectCard 
                        title="Gadget Store"
                        description="Gadget Store is an online platform that allows users to buy all kinds of gadgets. This website allows user to search their desired gadgets and buy them with just a click."
                        language1="React"
                        language2="Tailwind"
                        gitlink="https://github.com/rojish3/React-Projects/tree/main/Ecommerce"
                        img={Img1}
                    />
                    <ProjectCard 
                        title="Team Collab - Chat Application"
                        description="Team Collab is a real-time chat application with end-to-end encryption."
                        language1="React"
                        language2="Node"
                        language3="Express"
                        language4="Mongo"
                        gitlink="https://github.com/jirohan/chat-app"
                        img={Img2}
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
