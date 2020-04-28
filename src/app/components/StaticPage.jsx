import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

const StaticPage = ({ content }) => <ReactMarkdown source={content} escapeHtml={false} />

StaticPage.propTypes = {
  content: PropTypes.string,
}

export default StaticPage
