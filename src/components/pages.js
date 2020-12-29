import React from "react"
import Layout from "./layout"
import styled from "@emotion/styled"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import PropertiesList from "./propertiesList"

const ContentPage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`

export const propertyQuery = graphql`
  query($id: String!) {
    allStrapiPages(filter: { id: { eq: $id } }) {
      nodes {
        name
        content
        image {
          sharp: childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
const Properties = ({
  data: {
    allStrapiPages: { nodes },
  },
}) => {
  const { name, content, image } = nodes[0]
  return (
    <Layout>
      <main className="container">
        <h1>{name}</h1>
        <ContentPage>
          <Image fluid={image.sharp.fluid} />
          <p>{content}</p>
        </ContentPage>
      </main>
      {name === "Propiedades" && <PropertiesList />}
    </Layout>
  )
}

export default Properties
