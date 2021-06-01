import React from 'react'
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
    <div className="footer">
        <p>Developed by: Dimitris Doxopoulos for the purpose of learning ReactJS </p>
        <div className="social">
            <a className='social-icon' rel="noopener noreferrer" href="https://github.com/DimitrisDoxopoulos" target='_blank'>
                <FaGithub />
            </a>
            <a className='social-icon' rel="noopener noreferrer" href="https://www.facebook.com/DDoxopoulos/" target='_blank'>
                <FaFacebook />
            </a>
            <a className='social-icon' rel="noopener noreferrer" href="https://www.linkedin.com/in/dimitris-doxopoulos-a3687346/" target='_blank'>
                <FaLinkedin />
            </a>
        </div>
        <p>Based on a tutorial made by <a rel="noopener noreferrer" href="https://www.youtube.com/channel/UCBV-JvG9Ubkj7AU6Cxls1Tw" target='_blank'>HamScript</a></p>
    </div>
)

export default Footer