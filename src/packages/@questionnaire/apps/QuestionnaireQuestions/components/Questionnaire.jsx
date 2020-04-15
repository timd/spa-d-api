import React, { useContext } from 'react'
import { Button, Space } from '@kogaio'

import { QuestionnaireContext } from 'app/services/QuestionnaireProvider'
import { Content } from '.'
import { questionnaireItemsObj } from '../assets'

const Questionnaire = props => {
  const { currentQuestionId, setCurrentQuestionId } = useContext(QuestionnaireContext)

  const showNextQuestion = () => setCurrentQuestionId(questionnaireItemsObj[currentQuestionId].nextQuestionId)

  return (
    <Content title={questionnaireItemsObj[currentQuestionId].title} {...props}>
      <Space mt={6}>
        <Button onClick={showNextQuestion} title='Next' />
      </Space>
    </Content>
  )
}

Questionnaire.propTypes = {}

export default Questionnaire
