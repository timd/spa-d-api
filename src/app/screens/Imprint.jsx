import React from 'react'
import { withTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeGet } from '@kogaio/utils'

import { Box } from '@kogaio/Responsive'

import { StaticPage, Footer } from 'app/components'
import ContentEN from '../assets/pages/imprint/content_en.md'
import ContentDE from '../assets/pages/imprint/content_de.md'

const Imprint = ({ i18n }) => (
  <ImprintBox alignSelf='center' mx='auto' p={12} width={{ xs: 1, md: 1 / 1.5 }}>
    <StaticPage content={i18n.language === 'de' ? ContentDE : ContentEN} />
    <Footer />
  </ImprintBox>
)

const ImprintBox = styled(Box)`
  font-family: ${themeGet('fonts.complementary')};
`

Imprint.propTypes = {
  i18n: PropTypes.object,
}
export default withTranslation()(Imprint)
