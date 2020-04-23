import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

//import ContentDE from '../../data/imprint/imprint_de.md'

const StaticPage = ({ content }) => (
  <>
    <ReactMarkdown source={content} escapeHtml={false} />
  </>
)

StaticPage.propTypes = {
  content: PropTypes.string,
}

export default StaticPage
