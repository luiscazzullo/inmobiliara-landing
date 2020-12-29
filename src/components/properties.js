import React from "react"
import Layout from "./layout"
import Icons from "./icons"
import styled from "@emotion/styled"
import Image from "gatsby-image"
import { graphql } from "gatsby"

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`

const Sidebar = styled.aside`
  .price {
    font-size: 2rem;
    color: #75ab00;
  }
  .agent {
    margin-top: 4rem;
    border-radius: 2rem;
    background-color: #75ab00;
    padding: 3rem;
    color: #fff;
  }
  p {
    margin: 0;
  }
`

export const propertyQuery = graphql`
  query($id: String!) {
    allStrapiProperties(filter: { id: { eq: $id } }) {
      nodes {
        name
        parking
        description
        bathrooms
        rooms
        price
        agents {
          name
          phone
          email
        }
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
    allStrapiProperties: { nodes },
  },
}) => {
  const {
    name,
    description,
    bathrooms,
    parking,
    rooms,
    agents,
    image,
    price,
  } = nodes[0]
  return (
    <Layout>
      <h1>{name}</h1>
      <Content>
        <main>
          <Image fluid={image.sharp.fluid} />
          <p>{description}</p>
        </main>
        <Sidebar>
          <p className="price">$ {price}</p>
          <Icons bathrooms={bathrooms} parking={parking} rooms={rooms} />
          <div className="agent">
            <h2>Vendedor:</h2>
            <p>{agents.name}</p>
            <p>Tel: {agents.phone}</p>
            <p>Email: {agents.email}</p>
          </div>
        </Sidebar>
      </Content>
    </Layout>
  )
}

export default Properties
