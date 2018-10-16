import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/logo2.jpg';
import './Header.css'


class Header extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      hasScrolled: false
    }
  }
  componentDidlMount(){
    window.addEventListener('scroll',this,handleScroll)
  }
  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
  
    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }
  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={logo} width="30" /></Link>
          <Link to="/things">物物交换</Link>
          <Link to="/sell">我要出售</Link>
          <Link to="/buy">我要购买</Link>
          <Link to="/me"><button>下载App</button></Link>
        </div>
        </div>// Move all content between parentheses to here.
    )
  }
}


export default Header
