import { graphql, useStaticQuery } from "gatsby"
const useProperties = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiProperties {
        nodes {
          name
          description
          id
          bathrooms
          rooms
          parking
          price
          category {
            name
          }
          agents {
            name
            phone
            email
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
  return data.allStrapiProperties.nodes.map(property => ({
    name: property.name,
    id: property.id,
    description: property.description,
    image: property.image,
    bathrooms: property.bathrooms,
    rooms: property.rooms,
    agents: property.agents,
    price: property.price,
    category: property.category,
    parking: property.parking,
  }))
}

export default useProperties
