import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  @media (min-width: 768px) {
    padding: 0;
    flex-direction: row;
  }
`
const NavLink = styled(Link)`
  color: #fff;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  padding: 0.5rem;
  margin-right: 1rem;
  &:last-of-type {
    margin-right: 0;
  }
  &.actual-page {
    border-bottom: 2px solid #fff;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <NavLink to={"/"} activeClassName="actual-page">
        Inicio
      </NavLink>
      <NavLink to={"/nosotros"} activeClassName="actual-page">
        Nosotros
      </NavLink>
      <NavLink to={"/propiedades"} activeClassName="actual-page">
        Propiedades
      </NavLink>
    </Nav>
  )
}

export default Navbar
