import React from 'react'
import GatsbyLink from "gatsby-link";

const Link = ({ children, to, ...other }) => {
  let item;
  const isSamePage = (to) => {
    if (to === window.location.pathname) {
      console.log('Same page')
      return true
    }
    else {
      console.log('Not same page')
      return false
    }
  }

  return (
    <GatsbyLink
      to={to}
      onClick={
        e => {
          if (isSamePage(to) === true) {
            e.preventDefault()
          }
          else {
            
          }
        }
      }
      {...other}
    >
      {children}
    </GatsbyLink>
  );
}


export default Link;