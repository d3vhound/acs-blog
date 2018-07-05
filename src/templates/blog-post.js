import React, {Component} from 'react'
import PropTypes from 'prop-types'
import PostContainer from '../components/PostContainer'
import ReactDisqusComments from 'react-disqus-comments';

class BlogPost extends Component {
  render() {
    const { title, slug, content, publishDate } = this.props.data.contentfulBlog
    
    return (
      <PostContainer>
        <div className="post-header">
          <h1 className="post-title">{title}</h1>
          <p className="post-meta"><b>Published: </b>{publishDate} <br/>
            <b>Time to read:</b> {content.childMarkdownRemark.timeToRead} min</p>
        </div>
        <div className="md-blog-content content" dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }} />
        <ReactDisqusComments
          shortname="alishacruzserrano"
          identifier={`${slug} Thread`}
          title={title}
          url={`http://alishacruzserrano.netlify.com/posts/` + `${slug}`}
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
        }
      }
    }
  }
`