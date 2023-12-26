import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";


 
 const HeaderSocials = () => {
   return (
     <div className='header__socials'>
       <a href='https://linkedin.com/in/brendan-boiseaux-developpeur-informatique-web/' target='_blank' rel="noreferrer"><BsLinkedin/></a>
       <a href='https://github.com/brendan-bx' target='_blank' rel="noreferrer"><FaGithub /></a>

     </div>
   )
 }
 
 export default HeaderSocials