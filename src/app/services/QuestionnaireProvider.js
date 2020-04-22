import React, { useState, createContext } from 'react'
import PropTypes from 'prop-types'

export const QuestionnaireContext = createContext()

const QuestionnaireProvider = ({ children }) => {
  const [questionnaireState, setQuestionnaireState] = useState({
    currentQuestionId: null,
    answers: {},
  })

  return (
    <QuestionnaireContext.Provider
      value={{
        questionnaireState,
        setQuestionnaireState,
      }}>
      {children}
    </QuestionnaireContext.Provider>
  )
}

QuestionnaireProvider.propTypes = {
  children: PropTypes.node,
}

export default QuestionnaireProvider
