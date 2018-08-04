import React from 'react'
import PhotoSlider from '../components/Slider'
import PostContainer from '../components/PostContainer'
import BlogPost from '../components/BlogPost'
import SiteTitle from '../components/SiteTitle'
import Link from 'gatsby-link'
import IgSection from '../components/IgSection'

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
    <SiteTitle />

    <PhotoSlider>
      {data.allContentfulSlider.edges.map((edge, index) => <SliderImg key={index} node={edge.node} />)}
    </PhotoSlider>

    <PostContainer image={data.allContentfulSlider.edges[0].node.photo.resolutions.src}>
      {data.allContentfulBlog.edges.map((edge, index) => <BlogPost key={index} node={edge.node} />)}
      <div className="more-posts">
        <Link className="button" to="/blog">More posts</Link>
      </div>
    </PostContainer>

    <IgSection />
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