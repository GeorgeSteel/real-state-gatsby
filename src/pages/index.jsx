import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import Layout from '../components/Layout'
import Find from '../components/Find'
import PropertiesList from '../components/PropertiesList'

import useHome from '../hooks/useHome'

import heroCSS from '../css/hero.module.css'

const BgImage = styled(BackgroundImage)`
  height: 60rem;
`

const Index = () => {
  const { name, content, image } = useHome()

  return (
    <Layout>
      <BgImage tag="section" fluid={image.sharp.fluid} fadeIn="soft">
        <div className={heroCSS.imgbg}>
          <h1 className={heroCSS.title}>
            Sale of exclusive houses and apartments
          </h1>
        </div>
      </BgImage>
      <main>
        <div
          css={css`
            max-width: 80rem;
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
      <Find />
      <PropertiesList />
    </Layout>
  )
}

export default Index
