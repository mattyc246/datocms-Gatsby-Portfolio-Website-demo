const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsBlog {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsBlog.edges.map(({ node: blog }) => {
        createPage({
          path: `blog/${blog.slug}`,
          component: path.resolve(`./src/templates/blog-template.js`),
          context: {
            slug: blog.slug,
          },
        })
      })
      resolve()
    })
  })
}
