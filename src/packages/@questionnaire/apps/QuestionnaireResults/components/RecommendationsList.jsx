import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { withTranslation } from 'react-i18next'
import { Box, Card, Flex, Icon, Image, Space, Typography } from '@kogaio'
import { themed, themeGet } from '@kogaio/utils'

import { recommendations } from '../constants'

const RecommendationsList = ({ isMobile, processStage, t, ...props }) => (
  <Flex flexDirection={{ xs: 'column', md: 'row' }} flexWrap='wrap' {...props}>
    {recommendations[processStage].map((recommendation, idx) => (
      <Space key={recommendation.id} px={2} mt={4}>
        <Box minWidth={{ md: 308 }} maxWidth={{ md: 380 }} width={{ xs: 1, md: 1 / 3 }}>
          <RecommendationItem
            anchor={recommendation.anchor}
            description={recommendation.description}
            imgSrc={recommendation.imgSrc}
            imgColor={recommendation.imgColor}
            isMobile={isMobile}
            title={`${idx + 1}. ${recommendation.title}`}
            t={t}
          />
        </Box>
      </Space>
    ))}
  </Flex>
)

const RecommendationItem = ({ anchor, title, description, imgColor, imgSrc, isMobile, onClick, t, ...props }) => (
  <Space pl={2} pr={4} pb={{ xs: 4, md: 6 }} pt={{ xs: 2, md: 6 }}>
    <CardContainer isMobile={isMobile} onClick={onClick} variant='journey' {...props}>
      <Flex flexDirection='column' position='relative'>
        <Image src={imgSrc} size={32} position='absolute' left={0} opacity={imgColor === 'brand' ? 1 : 0.5} />
        <Space ml={2} mt={1}>
          <Title variant='body'>{t(title)}</Title>
        </Space>
        <Space mt={{ md: 2 }}>
          <Typography color='dark-grey' variant='tooltip'>
            {t(description)}
            {anchor && (
              <>
                &nbsp;
                <Anchor className='anchor-bold' href={anchor.URL} rel='noopener noreferrer' target='_blank'>
                  {t(anchor.label)}
                </Anchor>
              </>
            )}
          </Typography>
        </Space>
      </Flex>
      <Space my='auto' pl={2}>
        <Icon color='brand' fontSize={3} name='keyboard_arrow_right' />
      </Space>
    </CardContainer>
  </Space>
)

const Anchor = styled.a`
  ${themed('Anchor')};
`

const mobileItemStyle = ({ isMobile }) =>
  isMobile &&
  css`
    position: relative;
    :after {
      background: ${themeGet('colors.headerShadow')};
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      position: absolute;
      bottom: 0;
      left: -28px;
      top: 0;
      margin-top: auto;
      margin-bottom: auto;
    }
  `

const CardContainer = styled(Card)`
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: space-between;
  z-index: 3;
  ${mobileItemStyle};
`

const Title = styled(Typography)`
  color: ${themeGet('colors.dark-grey')};
  font-weight: ${themeGet('fontWeights.bold')};
  z-index: 2;
`

RecommendationsList.propTypes = {
  isMobile: PropTypes.string,
  processStage: PropTypes.string,
  t: PropTypes.func,
}

RecommendationItem.propTypes = {
  anchor: PropTypes.shape({
    label: PropTypes.string,
    URL: PropTypes.string,
  }),
  title: PropTypes.string,
  description: PropTypes.string,
  imgColor: PropTypes.string,
  imgSrc: PropTypes.string,
  isMobile: PropTypes.bool,
  onClick: PropTypes.func,
  t: PropTypes.func,
}

export default withTranslation()(RecommendationsList)
