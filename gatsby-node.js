const urlSlug = require('url-slug')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allStrapiPages {
        nodes {
          id
          name
        }
      }
      allStrapiProperties {
        nodes {
          id
          name
        }
      }
    }
  `)

  if (result.errors) return reporter.panic('No results', result.errors)

  const pages = result.data.allStrapiPages.nodes
  const properties = result.data.allStrapiProperties.nodes

  pages.forEach(page => {
    actions.createPage({
      path: urlSlug(page.name),
      component: require.resolve('./src/components/Pages.jsx'),
      context: {
        id: page.id,
      },
    })
  })
  properties.forEach(property => {
    actions.createPage({
      path: urlSlug(property.name),
      component: require.resolve('./src/components/Property.jsx'),
      context: {
        id: property.id,
      },
    })
  })
}
