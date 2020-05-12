import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import { Button, Flex, Image, Space, Typography } from '@kogaio'
import { themed } from '@kogaio/utils'

import { images } from '../assets'

import { withTranslation } from 'react-i18next'

const Hero = ({ t, ...props }) => (
  <Space mx={{ md: 'auto' }} pb={{ xs: 0, md: 30 }}>
    <Container {...props}>
      <Typography color='dark-grey' maxWidth='640px' variant={{ xs: 'h2', md: 'h1' }} as='h1'>
        {t('hero.title')}
      </Typography>
      <Space mt={6}>
        <Typography color='dark-grey' maxWidth='640px' variant='body'>
          {t('hero.subtitle')}
        </Typography>
      </Space>
      <Space mt={8} mx='auto'>
        <Button width={1} onClick={() => navigate('/questionnaire')}>
          {t('hero.button')}
        </Button>
      </Space>
      <Space mt={4}>
        <Typography color='dark-grey' maxWidth='640px' variant='caption'>
          {t('* We use all information very discretly')}
        </Typography>
      </Space>
      <Image display={{ md: 'none' }} objectFit='contain' src={images.heroImageMobile} width='100%' />
      <Image
        bottom={0}
        display={{ xs: 'none', md: 'inherit' }}
        position={{ xs: 'inherit', md: 'absolute' }}
        src={images.heroImageDesktop}
        objectFit='contain'
        width='100%'
        zIndex={-1}
      />
    </Container>
  </Space>
)
const Container = styled(Flex)`
  align-items: center;
  flex-direction: column;
  position: relative;
  text-align: center;
  ${themed('LandingContainer')}
`
Hero.propTypes = {
  t: PropTypes.func,
}

export default withTranslation()(Hero)
