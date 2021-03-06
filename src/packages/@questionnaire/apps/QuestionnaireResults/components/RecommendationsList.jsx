import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { withTranslation } from 'react-i18next'
import { Box, Card, Flex, Image, Space, Typography } from '@kogaio'
import { themed, themeGet } from '@kogaio/utils'

import { recommendations } from '@shared-utils/constants'

const RecommendationsList = ({ hideLastItemBottomDash, isMobile, processStage, t, i18n, ...props }) => (
  <Flex flexDirection={{ xs: 'column', md: 'row' }} flexWrap='wrap' {...props}>
    {recommendations[processStage].map((recommendation, idx) => {
      const isLastOne = idx === recommendations[processStage].length - 1
      return (
        <Space key={recommendation.id} px={2} mb={isMobile && isLastOne ? 4 : 0} mt={4}>
          <Box minWidth={{ lg: 308 }} maxWidth={{ md: 380 }} width={{ xs: 1, md: 1 / 3 }}>
            <RecommendationItem
              anchor={recommendation.anchor}
              description={recommendation.description[i18n.language]}
              imgSrc={recommendation.imgSrc}
              imgColor={recommendation.imgColor}
              hideLastItemBottomDash={hideLastItemBottomDash && isLastOne}
              isLastOne={isLastOne}
              isMobile={isMobile}
              title={`${idx + 1}. ${t(recommendation.title)}`}
              t={t}
              i18n={i18n}
            />
          </Box>
        </Space>
      )
    })}
  </Flex>
)

const RecommendationItem = ({
  anchor,
  title,
  description,
  hideLastItemBottomDash,
  imgColor,
  imgSrc,
  isLastOne,
  isMobile,
  onClick,
  t,
  i18n,
  ...props
}) => (
  <Space pl={2} pr={4} pb={{ xs: 4, md: 6 }} pt={{ xs: 2, md: 6 }}>
    <CardContainer
      hideLastItemBottomDash={hideLastItemBottomDash}
      isLastOne={isLastOne}
      isMobile={isMobile}
      onClick={onClick}
      variant='journey'
      {...props}>
      <Flex flexDirection='column' position='relative'>
        <Image src={imgSrc} size={32} position='absolute' left={0} opacity={imgColor === 'brand' ? 1 : 0.5} />
        <Space ml={2} mt={1}>
          <Title variant='body'>{t(title)}</Title>
        </Space>
        <Space mt={{ md: 2 }}>
          <Typography color='dark-grey' variant='tooltip'>
            {description}
            {anchor && (
              <>
                &nbsp;
                <Anchor className='anchor-bold' href={anchor.URL} rel='noopener noreferrer' target='_blank'>
                  {anchor.label[i18n.language]}
                </Anchor>
              </>
            )}
          </Typography>
        </Space>
      </Flex>
      <Space my='auto' pl={2}></Space>
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
    :before {
      margin: 0 auto;
      left: -26.5px;
      padding-top: ${({ isLastOne }) => (isLastOne ? '32px' : '16px')};
      top: -16px;
      content: '';
      height: ${({ hideLastItemBottomDash }) => (hideLastItemBottomDash ? 'calc(50% - 22px)' : '100%')};
      width: fit-content;
      border-left: 3px dashed ${themeGet('colors.headerShadow')};
      position: absolute;
      z-index: -1;
    }
    :after {
      background: ${themeGet('colors.headerShadow')};
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      position: absolute;
      bottom: 0;
      left: -29px;
      top: 0;
      margin-top: auto;
      margin-bottom: auto;
    }
  `

const CardContainer = styled(Card)`
  box-sizing: border-box;
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
  hideLastItemBottomDash: PropTypes.bool,
  isLastOne: PropTypes.bool,
  isMobile: PropTypes.bool,
  processStage: PropTypes.string,
  t: PropTypes.func,
  i18n: PropTypes.object,
}

RecommendationItem.propTypes = {
  anchor: PropTypes.shape({
    label: PropTypes.string,
    URL: PropTypes.string,
  }),
  title: PropTypes.string,
  description: PropTypes.string,
  hideLastItemBottomDash: PropTypes.bool,
  imgColor: PropTypes.string,
  imgSrc: PropTypes.string,
  isLastOne: PropTypes.bool,
  isMobile: PropTypes.bool,
  onClick: PropTypes.func,
  t: PropTypes.func,
  i18n: PropTypes.object,
}

RecommendationsList.defaultProps = {
  processStage: 'marriage_crisis',
}

export default withTranslation()(RecommendationsList)
