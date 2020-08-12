import { graphql, useStaticQuery } from 'gatsby'

const useHome = () => {
  const result = useStaticQuery(graphql`
    query MyQuery {
      allStrapiPages(filter: { name: { eq: "Home" } }) {
        nodes {
          id
          name
          content
          image {
            sharp: childImageSharp {
              fluid(
                maxWidth: 2000
                duotone: {
                  highlight: "#222222"
                  shadow: "#192550"
                  opacity: 30
                }
              ) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  const data = result.allStrapiPages.nodes.map(home => ({
    name: home.name,
    content: home.content,
    image: home.image,
  }))

  return data[0]
}

export default useHome
