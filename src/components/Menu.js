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

  render() {
    return (
      <div className="nav-container">
        <div className="nav desktop">
          <ul>
            <li>
              <Link className={window.location.pathname === "/" ?
                "active" : "unactive"} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={location.pathname === "/about" ?
                "active" : "unactive"}
                to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={location.pathname === "/blog" ?
                "active" : "unactive"} to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className={location.pathname === "/album" ?
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