import React from 'react'
import { Link } from 'react-scroll'
import Image from '../assets/img.jpg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Home = () => {
    return (
        <div
            className="section text-white min-h-[85vh] lg:min-h-[78vh] flex item-center"
            id="home"
        >
            <div className="container mx-auto">
                <div className="flex flex-col-reverse gap-y-4 lg:flex-row lg:items-center lg:gap-x-12">
                    <div className="flex-1 text-center text-lg leading-8 text-white lg:text-left">
                        <motion.h1
                            variants={fadeIn('up', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="text-[55px] font-bold my-4 leading-[0.8] lg:text-[110px]"
                        >
                            ROJISH <span>RANJIT</span>
                        </motion.h1>
                        <motion.div
                            variants={fadeIn('up', 0.4)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="mb-4 text-[36px] lg:text-[60px] text-lg text-white font-semibold uppercase leading-[1]"
                        >
                            <span className="text-white mr-2">I am a </span>
                            <TypeAnimation
                                sequence={['Developer', 2000, 'Designer', 2000]}
                                speed={50}
                                className="font-bold"
                                wrapper="span"
                                repeat={Infinity}
                            />
                        </motion.div>
                        <motion.p
                            variants={fadeIn('up', 0.5)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="mb-8 max-w-lg mx-auto lg:mx-0"
                        >
                            Hi I am a Front End Web Developer based in
                            Kathmandu, Nepal. I am currently learning front end
                            web development technologies.
                        </motion.p>
                        <motion.div
                            variants={fadeIn('up', 0.6)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="flex max-w-max gap-x-6 items-center mb-8 mx-auto lg:mx-0"
                        >
                            <Link
                                to="contact"
                                activeClass="active"
                                smooth={true}
                                spy={true}
                            >
                                <button className="btn btn-lg">
                                    Contact me
                                </button>
                            </Link>
                            <Link
                                to="projects"
                                activeClass="active"
                                smooth={true}
                                spy={true}
                                className="cursor-pointer"
                            >
                                My Portfolio
                            </Link>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('up', 0.7)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="cursor-pointer flex text-[32px] gap-x-6 max-w-max mx-auto lg:mx-0 lg:cursor-pointer"
                        >
                            <a
                                href="https://github.com/rojish3"
                                rel="noreferrer"
                                target="_blank"
                                className='text-white hover:text-[#6cc644]'
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/rojish-ranjit/"
                                rel="noreferrer"
                                target="_blank"
                                className='text-white hover:text-[#0A66C2]'
                            >
                                <FaLinkedin />
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={fadeIn('down', 0.5)}
                        initial="hidden"
                        whileInView={'show'}
                        className="flex items-center mx-auto lg:flex flex-1 max-w-[250px] lg:max-w-[420px]"
                    >
                        <img
                            className="rounded-full border-2"
                            src={Image}
                            alt="profile picture"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Home
