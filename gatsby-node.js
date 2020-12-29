const urlSlug = require("url-slug")
exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allStrapiPages {
        nodes {
          name
          id
        }
      }
      allStrapiProperties {
        nodes {
          name
          id
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panic("Hubo un error", result.errors)
  }
  const pages = result.data.allStrapiPages.nodes
  pages.forEach(page => {
    actions.createPage({
      path: urlSlug(page.name),
      component: require.resolve("./src/components/pages.js"),
      context: {
        id: page.id,
      },
    })
  })
  const properties = result.data.allStrapiProperties.nodes
  properties.forEach(property => {
    actions.createPage({
      path: urlSlug(property.name),
      component: require.resolve("./src/components/properties.js"),
      context: {
        id: property.id,
      },
    })
  })
}
