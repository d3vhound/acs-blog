import React from 'react'
import PostContainer from '../components/PostContainer'
import BlogPost from '../components/BlogPost'

const Blog = ({data}) => (
  <div>
    <PostContainer>
      {data.allContentfulBlog.edges.map((edge, index) => <BlogPost key={index} node={edge.node} />)}
    </PostContainer>
  </div>
)

export default Blog

export const blogQuery = graphql`
  query blogQuery {
    allContentfulBlog(
      limit: 100
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          featureImage {
            title
            sizes(maxWidth: 600, maxHeight: 300) {
              ...GatsbyContentfulSizes_withWebp_noBase64
            }
          }
          content {
        	  id
            childMarkdownRemark {
              excerpt
            } 
        	} 
        }
      }
    }
  }
`