import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withTranslation } from 'react-i18next'
import { Image, Flex, Space, Typography } from '@kogaio'
import { themeGet } from '@kogaio/utils'

const FeatureCard = ({ id, icon, title, description, i18n, ...props }) => {
  const lang = i18n.language
  return (
    <Space p={{ xs: 0, md: 6 }}>
      <Flex flexDirection='column' borderRadius={4} height='100%' bg={{ xs: 'transparent', md: 'white' }}>
        <Image src={icon} alt={`logo-${id}`} size={60} />
        <Space mt={6}>
          <Title variant='questionnaireTitle'>
            {title[lang]}
          </Title>
        </Space>
        <Space mt={2}>
          <Typography color='dark-grey' variant='body'>
            {description[lang]}
          </Typography>
        </Space>
      </Flex>
    </Space>
  )
}

const Title = styled(Typography)`
  color: ${themeGet('colors.featureTitle')};
`

FeatureCard.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  i18n: PropTypes.object,
}

export default withTranslation()(FeatureCard)
