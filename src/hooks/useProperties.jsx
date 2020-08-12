import { graphql, useStaticQuery } from 'gatsby'

const useProperties = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiProperties {
        nodes {
          name
          description
          id
          wc
          rooms
          price
          garage
          category {
            name
          }
          agents {
            name
            email
            phone
          }
          image {
            sharp: childImageSharp {
              fluid(maxWidth: 600, maxHeight: 400) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return data.allStrapiProperties.nodes.map(home => ({
    id: home.id,
    name: home.name,
    image: home.image,
    description: home.description,
    wc: home.wc,
    rooms: home.rooms,
    price: home.price,
    garage: home.garage,
    category: home.category,
    agents: home.agents,
  }))
}

export default useProperties
