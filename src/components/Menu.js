import React, { Component } from 'react';
import Link from 'gatsby-link';
import posed from 'react-pose'
import { tween } from "popmotion";
import classNames from 'classnames'

const TopBar = posed.div({
  open: {
    x: '-30vw',
    staggerChildren: 150,
    beforeChildren: true,
    transition: tween
  },
  closed: {
    x: '-100vw',
    transition: tween
  },
})

const NavItem = posed.li({
  open: { opacity: 1 },
  closed: { opacity: 0 }
})

const NavMobile = ({ isOpen, navItems, onClick }) => (
  <TopBar id="nav-mobile" pose={isOpen ? 'open' : 'closed'}>
    <div className="wrapper">
      <div className="container container-linkPr">
        <ul>
          {navItems.map(({ url, name }) => (
            <NavItem key={name}>
              <Link onClick={onClick} to={url}>{name}</Link>
            </NavItem>
          ))}
        </ul>
      </div>
    </div>
  </TopBar>
)

const navLinks = [
  { url: '/', name: 'Home' },
  { url: '/about', name: 'About' },
  { url: '/blog', name: 'Blog' },
];


class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isClosed: true,
      isOpenMobile: false,
      navX: false,
      isScrolling: false,
    }
  }
  
  CheckIfActive = (url) => {
    if (typeof window !== 'undefined' && url === window.location.pathname) {
      return true
    } else {
      return false
    }
  }

  render() {

    const handleMobileNav = () => {
      this.setState(prevState => ({
        isOpenMobile: !prevState.isOpenMobile,
        navX: !prevState.navX
      }))
    }

    const handleMNavClick = () => {
      this.setState(prevState => ({
        isOpenMobile: !prevState.isOpenMobile,
        navX: !prevState.navX
      }))
    }

    const navButtonStyles = classNames({
      scroll: this.state.isScrolling,
      active: this.state.navX
    })


    return (
      <React.Fragment>
      <div className="nav-container">
        <div className="nav desktop">
          <ul>
            <li>
              <Link className={this.CheckIfActive('/') ?
                "active" : "unactive"} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={this.CheckIfActive('/about') ?
                "active" : "unactive"}
                to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={this.CheckIfActive('/blog') ?
                "active" : "unactive"} to="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        
        <div id="nav-btn-mobile" onClick={handleMobileNav} className={navButtonStyles}>
          <div className="content">
            <div className="container-bar">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>

      </div>

      <NavMobile onClick={handleMNavClick} isOpen={this.state.isOpenMobile} navItems={navLinks} />

      </React.Fragment>
    )
  }
}

export default Menu