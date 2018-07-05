import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image";

const BlogPost = ({ node }) => {
  return (
    <article className="blog-entry">
      <div className="blog-entry-inner">
        {node.featureImage !== null ? <Img outerWrapperClassName="entry-image" sizes={node.featureImage.sizes} /> : null }
        <Link to={'/posts/' + node.slug}>
          <h1 className="entry-title">
            {node.title}
          </h1>
        </Link>
        <p>{node.publishDate}</p>
        <p>{node.content.childMarkdownRemark.excerpt}</p>
        <Link className="button" to={'/posts/' + node.slug}>Keep Reading</Link>
      </div>
    </article>
  )
}

export default BlogPost