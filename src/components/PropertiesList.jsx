import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'

import PropertyPreview from './PropertyPreview'
import useProperties from '../hooks/useProperties'
import useFilter from '../hooks/useFilter'

import propertiesCSS from '../css/propertiesList.module.css'

const PropertiesList = () => {
  const query = useProperties()
  const [properties] = useState(query)
  const [filter, setFilter] = useState([])
  const { category, UIFilter } = useFilter()

  useEffect(() => {
    if (category) {
      const selected = properties.filter(
        property => property.category.name === category
      )
      setFilter(selected)
    } else {
      setFilter(properties)
    }
    // eslint-disable-next-line
  }, [category])

  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Our Properties
      </h2>
      {UIFilter()}
      <ul className={propertiesCSS.properties}>
        {filter.map(property => (
          <PropertyPreview key={property.id} {...property} />
        ))}
      </ul>
    </>
  )
}

export default PropertiesList
