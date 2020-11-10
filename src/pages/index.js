import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components';

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
         title="Blog"
         keywords={[`shaundai`]}
       />
        <Bio />
        <div style={{ margin: "20px 0 40px" }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const tags = node.frontmatter.tags
            return (
              <div key={node.fields.slug}>
                
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{ boxShadow: `none`, color: `#317873`,}}
                    to={`blog${node.fields.slug}`}
                  >
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p style={{marginBottom: '.5em'}}
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
                 <small><div>{tags ? tags.map(t => (
                  <BlogTag>{t}</BlogTag>
                )) : null }
                </div>
                </small>
              </div>
            )
          })}
        </div>
        <a href="https://www.shaundai.com/">
          <Button marginTop="85px">Main Page</Button>
        </a>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`

const BlogTag = styled.button`
margin-right: .5em;
border-radius: .7em;
background-color: #3d9690;
color: white;
font-size: 1em;
font-weight: 600;
padding: .2em .5em;
font-family: Arial;
border-width: 1px;
border-color: #CDCDCD;
`