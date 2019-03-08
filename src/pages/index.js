import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Header />
      {edges.map(edge => {
        const { frontmatter } = edge.node
        return (
          <h4 key={frontmatter.path}>
            <Link to={frontmatter.path}>{frontmatter.title}</Link>
          </h4>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`

export default IndexPage
