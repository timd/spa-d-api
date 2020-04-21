import React, { useContext, useState } from 'react'
import { Button, Space, Flex } from '@kogaio'
import { navigate } from '@reach/router'
import { TouchableWithIcon } from '@shared-utils/components'

import { QuestionnaireContext } from 'app/services/QuestionnaireProvider'
import { questionnaireItemsObj } from '../assets'
import { AnswerTouchable, ProgressBar, Content } from '.'

const Questionnaire = props => {
  const { currentQuestionId, setCurrentQuestionId } = useContext(QuestionnaireContext)
  const item = questionnaireItemsObj[currentQuestionId]

  const [isSelected, setIsSelected] = useState(false)

  const showNextQuestion = () => setCurrentQuestionId(item.nextQuestionId)
  const showPrevQuestion = () => setCurrentQuestionId(item.previousQuestionId)
  const showResults = () => {
    navigate('/questionnaire/results')
    setCurrentQuestionId(null)
  }

  return (
    <Content title={item.title} {...props}>
      <ProgressBar progress={item.progress} />
      <Space mt={8}>
        <AnswerTouchable isSelected={isSelected} onClick={() => setIsSelected(!isSelected)}></AnswerTouchable>
      </Space>
      <Space mt={8}>
        <Flex justifyContent='space-between'>
          {item.previousQuestionId ? (
            <TouchableWithIcon
              onClick={showPrevQuestion}
              icon={{ name: 'keyboard_backspace', fontSize: '24px' }}
              label='Back'
            />
          ) : (
            <div></div>
          )}

          {item.nextQuestionId ? (
            <Button onClick={showNextQuestion} title='Next' />
          ) : (
            <Button onClick={showResults} title='Submit' />
          )}
        </Flex>
      </Space>
    </Content>
  )
}

Questionnaire.propTypes = {}

export default Questionnaire
