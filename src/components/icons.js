import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
const IconList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex: 1;
  max-width: 500px;
  margin: 3rem auto 0 auto;

  li {
    display: flex;
    img {
      margin-right: 1rem;
    }
  }
`
const Icons = ({ bathrooms, rooms, parking }) => {
  const { icons } = useStaticQuery(graphql`
    query {
      icons: allFile(filter: { relativeDirectory: { eq: "icons" } }) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `)
  const imgIcons = icons.edges
  return (
    <IconList>
      <li>
        <img src={imgIcons[5].node.publicURL} alt="Icono WC" />
        <p>{bathrooms}</p>
      </li>
      <li>
        <img src={imgIcons[4].node.publicURL} alt="Icono Estacionamiento" />
        <p>{parking}</p>
      </li>
      <li>
        <img src={imgIcons[3].node.publicURL} alt="Icono habitaciones" />
        <p>{rooms}</p>
      </li>
    </IconList>
  )
}

export default Icons
