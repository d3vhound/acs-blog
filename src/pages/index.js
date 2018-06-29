import React from 'react'
import PhotoSlider from '../components/Slider'
import PostContainer from '../components/PostContainer'
import BlogPost from '../components/BlogPost'

const SliderImg = ({node}) => {
  return (
    <div>
      <div className="photo-image">
        <img src={node.photo.resolutions.src} />
      </div>
    </div>
  )
}

const IndexPage = ({data}) => (
  <div>
    <PhotoSlider>
      {data.allContentfulSlider.edges.map((edge) => <SliderImg node={edge.node} />)}
    </PhotoSlider>

    <PostContainer>
      {data.allContentfulBlog.edges.map((edge) => <BlogPost node={edge.node} />)}
    </PostContainer>

 </div>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlog(
      limit: 4
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          content {
        	  id
            childMarkdownRemark {
              excerpt
            } 
        	} 
        }
      }
    }
    allContentfulSlider {
      edges {
        node {
          photoDescription
          photo {
            resolutions(width: 600) {
              width
              height
              src
            }
          }
        }
      }
    }
  }
`