import React, { Component } from 'react'

class AboutPage extends Component {
  render() {
    const { title, content } = this.props.data.contentfulPages
    return (
      <section className="section">
        <div className="container">
          <div className="post-header">
            <h1 className="about">{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }} />
          </div>
          <div>
          </div>
        </div>
      </section>
    )
  }
}

export default AboutPage

export const AboutQuery = graphql`
  query AboutQuery {
    contentfulPages(title: {eq: "About"}) {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`