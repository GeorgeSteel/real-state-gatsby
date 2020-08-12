import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import urlSlug from 'url-slug'

import Icons from './Icons'

const Button = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #75ab00;
  width: 100%100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
`
const Card = styled.div`
  border: 1px solid #e1e1e1;

  img {
    max-width: 100%;
  }
`
const Content = styled.div`
  padding: 2rem;

  h3 {
    font-family: 'Lato', sans-serif;
    margin: 0 0 2rem 0;
    font-size: 2.4rem;
  }

  .price {
    font-size: 2rem;
    color: #75ab00;
  }
`

const PropertyPreview = ({
  name,
  description,
  id,
  wc,
  rooms,
  price,
  garage,
  category,
  agents,
  image,
}) => {
  return (
    <Card>
      <Image fluid={image.sharp.fluid} />
      <Content>
        <h3>{name}</h3>
        <p className="price">$ {price}</p>
        <Icons wc={wc} rooms={rooms} garage={garage} />
        <Button to={urlSlug(name)}>Visit Property</Button>
      </Content>
    </Card>
  )
}

export default PropertyPreview
