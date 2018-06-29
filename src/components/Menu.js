import React, { Component } from 'react';
import Link from './Link';

class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isClosed: true,
      Active: false
    }
  }

  isActive = (e) => {
    if (item) {
      this.setState({
        Active: false
      })
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


    return (
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
            <li>
              <Link className={this.CheckIfActive('/album') ?
                "active" : "unactive"} to="/album">
                Album
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Menu