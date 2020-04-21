import React from 'react'
import PropTypes from 'prop-types'
import { Image, Flex, Space, Typography } from '@kogaio'
import { useTranslation } from 'react-i18next'
const FeatureCard = ({ id, icon, title, description, ...props }) => {
  const { i18n } = useTranslation()
  const lang = i18n.language
  return (
    <Space p={{ xs: 0, md: 6 }}>
      <Flex flexDirection='column' borderRadius={4} height='100%' bg={{ xs: 'transparent', md: 'white' }}>
        <Image src={icon} alt={`logo-${id}`} size={60} />
        <Space mt={6}>
          <Typography color='dark-grey' variant='h3'>
            {title[lang]}
          </Typography>
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

FeatureCard.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCard
