import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { CiShare1 } from 'react-icons/ci';

const ProjectCard = (props) => {
    const { title, description, language1, language2, language3, language4, gitlink, img } = props;
  return (
    <div className='card flex justify-center items-center mx-auto bg-gray-800 h-80 w-[70%] p-8 rounded-3xl'>
        <div className='content w-1/2 flex flex-col text-center px-8 gap-y-2'>
            <h2 className='uppercase text-xl'>{title}</h2>
            <p className='text-slate-400'>{description}</p>
            <ul className='flex flex-row justify-center mt-4'>
                    {language1 && <li className='bg-black py-2 px-4 mx-4 rounded-lg'>{language1}</li>}
                    {language2 && <li className='bg-black py-2 px-4 mx-4 rounded-lg'>{language2}</li>}
                    {language3 && <li className='bg-black py-2 px-4 mx-4 rounded-lg'>{language3}</li>}
                    {language4 && <li className='bg-black py-2 px-4 mx-4 rounded-lg'>{language4}</li>}
                </ul>
                <ul className='flex flex-row justify-center mt-4'>
                    <li className='py-2 px-4 mx-4 text-3xl'><a href={gitlink}><AiFillGithub /></a></li>
                    <li className='py-2 px-4 mx-4 text-3xl'><a href="#"><CiShare1 /></a></li>
                </ul>
                
        </div>
        <div className='img w-1/2 '>
            <img className='rounded-xl' src={img} alt='ecommerce' />
        </div>
    </div>
  )
}

export default ProjectCard