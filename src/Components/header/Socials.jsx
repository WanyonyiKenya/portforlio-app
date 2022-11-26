import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { FaGithubSquare} from 'react-icons/fa'
import {CgTwitter} from 'react-icons/cg'
import {BsFacebook} from 'react-icons/bs'





const Socials = () => {
  return (
    <div className='socials'>
        <a href='https://www.linkedin.com/'><BsLinkedin /></a>
        <a href='https://www.github.com/'><FaGithubSquare /></a>
        <a href='https://www.twitter.com/'><CgTwitter/></a>
        <a href='https://www.facebook.com/'><BsFacebook/></a>


    </div>
  )
}

export default Socials