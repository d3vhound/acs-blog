import React from 'react'
import Link from 'gatsby-link'
import Sidebar from '../components/Sidebar'
import PhotoSlider from '../components/Slider'

const BlogPost = ({node}) => {
  return (
    <li>
      <Link to={'/posts/' + node.slug}>{node.title}</Link>
      <p>{node.publishDate}</p>
       <p>{node.content.childMarkdownRemark.excerpt }</p>

    </li>
  )
}

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
    <section className="section">
    <div className="container">
    <div className="columns">
      <div className="column is-9">
      <ul>
      {data.allContentfulBlog.edges.map((edge) => <BlogPost node={edge.node} />)}
      </ul>
      </div>

      <div className="column is-3">
        <Sidebar />
      </div>
    </div>
    </div>
    </section>
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
          # featureImage {
          #   resolutions(width: 300) {
          #     width
          #     height
          #     src
          #   }
          # }
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