import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'

import Layout from './Layout'
import Icons from './Icons'

export const query = graphql`
  query PropertyByID($id: String!) {
    allStrapiProperties(filter: { id: { eq: $id } }) {
      nodes {
        name
        garage
        description
        price
        wc
        rooms
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

const Content = styled.div`
  max-width: 120rem;
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

    p {
      margin: 0;
    }
  }
`

const Property = ({
  data: {
    allStrapiProperties: { nodes },
  },
}) => {
  const {
    name,
    description,
    wc,
    rooms,
    price,
    garage,
    agents,
    image,
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
          <Icons wc={wc} rooms={rooms} garage={garage} />
          <div className="agent">
            <h2>Vendedor:</h2>
            <p>{agents.name}</p>
            <p>Phone: {agents.phone}</p>
            <p>Email: {agents.email}</p>
          </div>
        </Sidebar>
      </Content>
    </Layout>
  )
}

export default Property
