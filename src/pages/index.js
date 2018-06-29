import React from 'react'
import Link from 'gatsby-link'
import PhotoSlider from '../components/Slider'

const BlogPost = ({node}) => {
  return (
    <li>
      <Link to={'/posts/' + node.slug}>{node.title}</Link>
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
    <ul>
      {data.allContentfulBlog.edges.map((edge) => <BlogPost node={edge.node} />)}
    </ul>
    </div>
    </section>
 </div>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlog(filter: {
      node_locale: {eq: "en-US"}
    }) {
      edges {
        node {
          title
          slug
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