import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'

const IconList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex: 1;
  max-width: 50rem;
  margin: 3rem auto 0 auto;

  li {
    display: flex;
    img {
      margin-right: 1rem;
    }
  }
`

const Icons = ({ wc, rooms, garage }) => {
  const {
    icons: { edges },
  } = useStaticQuery(graphql`
    query {
      icons: allFile(filter: { relativeDirectory: { eq: "iconos" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)
  return (
    <IconList>
      <li>
        <img src={edges[2].node.publicURL} alt="WC" />
        {wc}
      </li>
      <li>
        <img src={edges[1].node.publicURL} alt="WC" />
        {garage}
      </li>
      <li>
        <img src={edges[0].node.publicURL} alt="WC" />
        {rooms}
      </li>
    </IconList>
  )
}

export default Icons
