import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, Card, Flex, Icon, Image, Space, Typography } from '@kogaio'
import { themeGet } from '@kogaio/utils'

const RecommendationsList = ({ recommendations, ...props }) => (
  <Flex flexDirection={{ xs: 'column', md: 'row' }} flexWrap='wrap' {...props}>
    {recommendations.map(recommendation => (
      <Space key={recommendation.id} px={2} mt={4}>
        <Box minWidth={{ md: 308 }} maxWidth={{ md: 380 }} width={{ xs: 1, md: 1 / 3 }}>
          <RecommendationItem
            description={recommendation.description}
            title={recommendation.title}
            imgSrc={recommendation.imgSrc}
            imgColor={recommendation.imgColor}
          />
        </Box>
      </Space>
    ))}
  </Flex>
)

const RecommendationItem = ({ title, description, imgColor, imgSrc, onClick, ...props }) => (
  <Space pl={2} pr={4} pb={{ xs: 4, md: 6 }} pt={{ xs: 2, md: 6 }}>
    <CardContainer onClick={onClick} variant='journey' {...props}>
      <Flex flexDirection='column' position='relative'>
        <Image src={imgSrc} size={32} position='absolute' left={0} opacity={imgColor === 'brand' ? 1 : 0.5} />
        <Space ml={2} mt={1}>
          <Title variant='body'>{title}</Title>
        </Space>
        <Space mt={{ md: 2 }}>
          <Typography color='dark-grey' variant='tooltip'>
            {description}
          </Typography>
        </Space>
      </Flex>
      <Space my='auto'>
        <Icon color='brand' fontSize={3} name='keyboard_arrow_right' />
      </Space>
    </CardContainer>
  </Space>
)

const CardContainer = styled(Card)`
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: space-between;
  z-index: 3;
`

const Title = styled(Typography)`
  color: ${themeGet('colors.dark-grey')};
  font-weight: ${themeGet('fontWeights.bold')};
  z-index: 2;
`

RecommendationsList.propTypes = {
  recommendations: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
}

RecommendationItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imgColor: PropTypes.string,
  imgSrc: PropTypes.string,
  onClick: PropTypes.func,
}

export default RecommendationsList
