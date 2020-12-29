import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"
import heroCSS from "../css/hero.module.css"

const BgImage = styled(BackgroundImage)`
  height: 300px;
`
const Banner = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "encuentra.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <BgImage src="section" fluid={image.sharp.fluid} fadeIn="soft">
      <div className={heroCSS.imagebg}>
        <h3 className={heroCSS.title}>Encuentra la casa de tus sueños</h3>
        <p>15 años de experiencia</p>
      </div>
    </BgImage>
  )
}

export default Banner
