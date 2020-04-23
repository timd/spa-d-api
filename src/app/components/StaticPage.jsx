import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Footer } from 'app/components'

//import ContentDE from '../../data/imprint/imprint_de.md'
import ContentEN from '../assets/pages/imprint/imprint_en.md'

export default () => (
  <>
    <ReactMarkdown source={ContentEN} escapeHtml={false} />
    <Footer />
  </>
)
