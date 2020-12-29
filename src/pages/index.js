import React from "react"
import Layout from "../components/layout"
import useIndex from "../hooks/useIndex"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import heroCSS from "../css/hero.module.css"
import Banner from "../components/banner"
import PropertiesList from "../components/propertiesList"

const BgImage = styled(BackgroundImage)`
  height: 600px;
`
const Index = () => {
  const index = useIndex()
  const { name, content, image } = index[0]
  return (
    <Layout>
      <BgImage tag="section" fluid={image.sharp.fluid} fadeIn="soft">
        <div className={heroCSS.imagebg}>
          <h1 className={heroCSS.title}>
            Venta de casas y departamentos exclusivos
          </h1>
        </div>
      </BgImage>
      <main>
        <div
          css={css`
            max-width: 800px;
            margin: 0 auto;
          `}
        >
          <h1>{name}</h1>
          <p
            css={css`
              text-align: center;
            `}
          >
            {content}
          </p>
        </div>
      </main>
      <Banner />
      <PropertiesList />
    </Layout>
  )
}

export default Index
