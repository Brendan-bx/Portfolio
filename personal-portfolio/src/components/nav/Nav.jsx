import React from 'react'
import './Nav.css'
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";


const Nav = () => {
  return (
    <nav>
      <a href='#'><IoHomeOutline /></a>
      <a href='#about'><AiOutlineUser /></a>
      <a href='#experiences'><BiBook /></a>
      <a href='#services'><RiServiceLine /></a>
      <a href='#contact'><BiMessageSquareDetail /></a>

    </nav>
  )
}

export default Nav