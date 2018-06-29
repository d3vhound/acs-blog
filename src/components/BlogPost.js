import React from 'react'
import Link from 'gatsby-link'

const BlogPost = ({ node }) => {
  return (
    <li>
      <Link to={'/posts/' + node.slug}>{node.title}</Link>
      <p>{node.publishDate}</p>
      <p>{node.content.childMarkdownRemark.excerpt}</p>

    </li>
  )
}

export default BlogPost