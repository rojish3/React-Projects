import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className="footer text-white flex items-center justify-between w-[90%] mx-auto text-xl">
            <div className="copyright">
                Copyright &copy; 2023. All rights reserved.
            </div>
            <div className="socials flex gap-x-4">
                <a
                    href="https://github.com/rojish3"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white hover:text-[#6cc644]"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/rojish-ranjit/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white hover:text-[#0A66C2]"
                >
                    <FaLinkedin />
                </a>
            </div>
        </div>
    )
}

export default Footer
