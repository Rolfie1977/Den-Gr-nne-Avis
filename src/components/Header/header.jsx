import React from 'react'
import style from './header.module.scss'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/avisLogo.png'
import letter from '../../assets/letter.png'
import info from '../../assets/info.png'
import profile from '../../assets/profile.png'

function header() {
  return (
    <header className = {style.header} >

        <img src={logo} alt="logo" />
        <select name="" id="">
            <option value="">Camping</option>
            <option value="">Elektronik</option>
            <option value="">Have og byg</option>
            <option value="">Tøj og mode</option>
            <option value="">Cykler</option>
            <option value="">Biler</option>
            <option value="">Hobby</option>
            <option value="">Mobil og telefoni</option>
            <option value="">Musik instrumenter</option>
            <option value="">Billede og lyd</option>
            <option value="">Scooter og knallerter</option>
            <option value="">Bøger og blade</option>
            <option value="">Diverse</option>

        </select>

        <button>Opret annonce</button>

        <NavLink to=""><img src={letter} alt="letter" /></NavLink>
        <NavLink to=""><img src={info} alt="info" /></NavLink>
        <NavLink to=""><img src={profile} alt="profile" /></NavLink>

        

    </header>
  )
}

export default header