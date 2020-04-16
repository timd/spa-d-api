import React, { useContext } from 'react'
import { Button, Space, Flex } from '@kogaio'
import { navigate } from '@reach/router'
import { TouchableWithIcon } from '@shared-utils/components'

import { QuestionnaireContext } from 'app/services/QuestionnaireProvider'
import { Content } from '.'
import { questionnaireItemsObj } from '../assets'

const Questionnaire = props => {
  const { currentQuestionId, setCurrentQuestionId } = useContext(QuestionnaireContext)
  const item = questionnaireItemsObj[currentQuestionId]

  const showNextQuestion = () => setCurrentQuestionId(item.nextQuestionId)
  const showPrevQuestion = () => setCurrentQuestionId(item.previousQuestionId)
  const showResults = () => {
    navigate('/questionnaire/results')
    setCurrentQuestionId(null)
  }

  return (
    <Content title={item.title} {...props}>
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
