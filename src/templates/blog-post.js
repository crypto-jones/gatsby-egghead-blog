import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const Template = ({ data, pageContext }) => {
  const { next, prev } = pageContext

  const { markdownRemark } = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html

  return (
    <Layout>
      <h2>{title}</h2>
      <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "50px",
        }}
      >
        {prev && <Link to={prev.frontmatter.path}>Previous</Link>}
        {next && <Link to={next.frontmatter.path}>Next</Link>}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template
