import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import PostContainer from '../components/PostContainer'
import ReactDisqusComments from 'react-disqus-comments'

class BlogPost extends Component {
  render() {
    const { title, slug, content, publishDate } = this.props.data.contentfulBlog
    
    return (
      <PostContainer>

        <Helmet>
          <title>{`${title} - Blog`}</title>
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={content.childMarkdownRemark.excerpt} />

          <meta name="og:title" content={title} />
          <meta name="og:description" content={content.childMarkdownRemark.excerpt} />
          <meta name="og:url" content={`https://alishacruzserrano.com/posts/${slug}`} />
        </Helmet>

        <div className="post-header">
          <h1 className="post-title">{title}</h1>
          <p className="post-meta"><b>Published: </b>{publishDate} <br/>
            <b>Time to read:</b> {content.childMarkdownRemark.timeToRead} min
          </p>
        </div>
        <div className="md-blog-content content" dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }} />
        <ReactDisqusComments
          shortname="alishacruzserrano"
          identifier={title}
          title={title}
          url={`http://alishacruzserrano.com/posts/` + `${slug}`}
        />
      </PostContainer>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlog(slug: {eq: $slug}) {
      title
      slug
      publishDate(formatString: "MMMM DD, YYYY")
      content {
        childMarkdownRemark {
          html
          timeToRead
          excerpt
        }
      }
    }
  }
`