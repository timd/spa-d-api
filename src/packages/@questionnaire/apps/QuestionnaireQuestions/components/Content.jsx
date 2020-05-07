import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Image, Space, Typography } from '@kogaio'

import { logo } from '../assets'

const QUESTIONNAIRE_CONTAINER_MAX_WIDTH = 950

const Content = ({ title, description, children, ...props }) => (
  <Space pt={{ xs: 6, md: 14 }} pb={10} px={{ xs: 6, md: 24 }}>
    <Flex
      bg='white'
      borderColor='headerShadow'
      borderWidth={{ xs: 0, md: 1 }}
      borderStyle={{ xs: 'none', md: 'solid' }}
      borderRadius={{ xs: 0, md: 4 }}
      flexDirection='column'
      height='fit-content'
      width={1}
      maxWidth={{ md: `${QUESTIONNAIRE_CONTAINER_MAX_WIDTH}px` }}
      position='relative'
      overflow={{ xs: 'inherit', md: 'hidden' }}
      {...props}>
      <Image alt='logo' src={logo} size={56} />
      <Space mt={6}>
        <Typography width={{ xs: 1, md: '400px' }} variant='questionnaireTitle'>
          {title}
        </Typography>
      </Space>
      {description ? (
        <Space mt={2}>
          <Typography width={{ xs: 1, md: '400px' }} color='dark-grey' variant='body'>
            {description}
          </Typography>
        </Space>
      ) : null}
      {children}
    </Flex>
  </Space>
)

Content.propTypes = {
  description: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  children: PropTypes.node,
}

export default Content
