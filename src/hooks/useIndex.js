import { useStaticQuery, graphql } from "gatsby"
const useIndex = () => {
  const result = useStaticQuery(graphql`
    query {
      allStrapiPages(filter: { name: { eq: "Inicio" } }) {
        nodes {
          id
          name
          content
          image {
            sharp: childImageSharp {
              fluid(
                maxWidth: 1500
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
  return result.allStrapiPages.nodes.map(index => ({
    name: index.name,
    content: index.content,
    image: index.image,
    id: index.id,
  }))
}
export default useIndex
