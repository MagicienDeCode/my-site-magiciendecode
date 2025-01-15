const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const markdownTemplate = path.resolve(`src/components/markdown/markdown.js`)

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: '/articles' + node.frontmatter.path,
      component: markdownTemplate,
      context: { id: node.frontmatter.path }, // additional data can be passed via context
    })
  })
}
