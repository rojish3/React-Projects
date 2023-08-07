// import { useInView } from 'framer-motion';
// import React from 'react';
// import Image from '../assets/img.jpg'
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi';

const About = () => {
    // const [ref, inView] = useInView({
    //     threshold: 0.5,
    // });
    return (
        <div
            className="section text-white min-h-[85vh] lg:min-h-[78vh]"
            id="about"
        >
            <div className="flex mx-auto">
                {/* <div className='flex-1 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
                    <img src={Image} alt='image' />
                </div> */}

                <div className="flex flex-col flex-1 text-center text-lg leading-8 text-white gap-y-4 lg:gap-y-8 lg:text-left">
                    <h2 className="mb-4 text-[52px] lg:text-[78px] text-lg text-white font-semibold uppercase">
                        About Me
                    </h2>
                    <h3>
                        I am a front-end developer learning the new technologies
                        in front end development.
                    </h3>
                    <p>
                        I am a Computer Science and information technology
                        student in sagarmatha college of science and technology.
                    </p>
                    <div className='flex flex-row justify-center gap-x-8 lg:text-left lg:justify-start'>
                        <span className="text-[24px]">Tech Stack</span> |
                        <div className='flex flex-row text-4xl gap-x-8'>
                            <AiFillHtml5 />
                            <BiLogoCss3 />
                            <BiLogoJavascript />
                            <BiLogoReact />
                            <BiLogoTailwindCss />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
