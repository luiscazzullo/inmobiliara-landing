import React from "react"
import Icons from "./icons"
import styled from "@emotion/styled"
import Image from "gatsby-image"
import { Link } from "gatsby"
import urlSlug from "url-slug"
const Button = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background: #75ab00;
  width: 100%;
  color: #fff;
  display: block;
  text-align: center;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
`
const Card = styled.div`
  border: 1px solid #e1e1e1;
  img {
    max-width: 100%;
  }
`
const CardContent = styled.div`
  padding: 2rem;
  h3 {
    font-family: "Lato", sans-serif;
    margin: 0 0 2rem 0;
    font-size: 2.4rem;
  }
  .price {
    font-size: 2rem;
    color: #75ab00;
  }
`
const CardProperty = ({ property }) => {
  const { bathrooms, image, name, parking, price, rooms } = property
  return (
    <Card>
      <Image fluid={image.sharp.fluid} />
      <CardContent>
        <h3>{name}</h3>
        <p className="price">$ {price}</p>
        <Icons bathrooms={bathrooms} parking={parking} rooms={rooms} />
      </CardContent>
      <Button to={urlSlug(name)}>Visitar Propiedad</Button>
    </Card>
  )
}

export default CardProperty
