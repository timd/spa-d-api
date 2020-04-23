import React from 'react'
import { withTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import { Box } from '@kogaio/Responsive'

import { Footer } from 'app/components'
const AboutUs = ({ i18n }) => (
  <Box alignSelf='center' mx='auto' p={12} width={{ xs: 1, md: 1 / 1.5 }}>
    <Footer />
  </Box>
)

AboutUs.propTypes = {
  i18n: PropTypes.object,
}
export default withTranslation()(AboutUs)
