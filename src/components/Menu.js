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

  CheckIfActive = (url) => {
    if (typeof window !== 'undefined' && url === window.location.pathname) {
      return true
    } else {
      return false
    }
  }

  isActive = (e) => {
    if (item) {
      this.setState({
        Active: false
      })
    }
  }

  render() {
    return (
      <div className="nav-container">
        <div className="nav desktop">
          <ul>
            <li>
              <Link className={CheckIfActive('/') ?
                "active" : "unactive"} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={CheckIfActive('/about') ?
                "active" : "unactive"}
                to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={CheckIfActive('/blog') ?
                "active" : "unactive"} to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className={CheckIfActive('/album') ?
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