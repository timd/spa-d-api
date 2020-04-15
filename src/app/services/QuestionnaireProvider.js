import React, { useState, createContext } from 'react'
import PropTypes from 'prop-types'

export const QuestionnaireContext = createContext()

const QuestionnaireProvider = ({ children }) => {
  const [currentQuestionId, setCurrentQuestionId] = useState()

  return (
    <QuestionnaireContext.Provider
      value={{
        currentQuestionId,
        setCurrentQuestionId
      }}>
      {children}
    </QuestionnaireContext.Provider>
  )
}

QuestionnaireProvider.propTypes = {
  children: PropTypes.node,
}

export default QuestionnaireProvider
