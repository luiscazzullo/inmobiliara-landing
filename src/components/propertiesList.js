import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import useProperties from "../hooks/useProperties"
import CardProperty from "./cardProperty"
import propertiesCSS from "../css/propertiesList.module.css"
import useFilter from "../hooks/useFilter"
const PropertiesList = () => {
  const result = useProperties()
  const [properties] = useState(result)
  const [filterProperties, setFilterProperties] = useState([])
  const { FilterUI, category } = useFilter()
  useEffect(() => {
    if (category) {
      const filter = properties.filter(
        property => property.category.name === category
      )
      setFilterProperties(filter)
    } else {
      setFilterProperties(properties)
    }
  }, [category, properties])
  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Nuestras propiedades
      </h2>
      {FilterUI()}
      <ul className={propertiesCSS.properties}>
        {filterProperties.map(property => (
          <CardProperty key={property.id} property={property} />
        ))}
      </ul>
    </>
  )
}

export default PropertiesList
