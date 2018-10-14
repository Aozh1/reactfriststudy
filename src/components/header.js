import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/logo.jpg';
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
  <div className="HeaderGroup">
    <Link to="/"><img src={logo} width="30" /></Link>
    <Link to="/things">物物交换</Link>
    <Link to="/sell">我要出售</Link>
    <Link to="/buy">我要购买</Link>
    <Link to="/me"><button>我的状态</button></Link>
    </div>
  </div>
)

export default Header
