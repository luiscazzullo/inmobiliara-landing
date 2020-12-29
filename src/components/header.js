import React from "react"
import { css } from "@emotion/core"
//Components
import { Link, useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"

const Header = () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <header
      css={css`
        background: #0d283b;
        padding: 1rem;
      `}
    >
      <div
        css={css`
          max-width: 120rem;
          margin: 0 auto;
          text-align: center;
          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <Link to={"/"}>
          <img src={logo.publicURL} alt="Logotipo de bienes raíces" />
        </Link>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
