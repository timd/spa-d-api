import React from 'react'
import ReactDOM from 'react-dom'

import Root from './app/Root'
import './i18n'

require('dotenv').config()

ReactDOM.render(<Root />, document.getElementById('root'))
