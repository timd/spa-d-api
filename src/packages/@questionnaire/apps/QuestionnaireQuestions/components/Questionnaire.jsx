import React, { useContext } from 'react'
import { Button, Space, Flex } from '@kogaio'
import { navigate } from '@reach/router'
import { TouchableWithIcon } from '@shared-utils/components'

import { QuestionnaireContext } from 'app/services/QuestionnaireProvider'
import { ProgressBar, Content } from '.'
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
      <ProgressBar progress={item.progress} />
      <Space mt={8}>
        <Flex justifyContent={item.previousQuestionId ? 'space-between' : 'flex-end'}>
          {item.previousQuestionId && (
            <TouchableWithIcon
              onClick={showPrevQuestion}
              icon={{ name: 'keyboard_backspace', fontSize: '24px' }}
              label='Back'
            />
          )}
          <Button
            onClick={item.nextQuestionId ? showNextQuestion : showResults}
            title={item.nextQuestionId ? 'Next' : 'Submit'}
          />
        </Flex>
      </Space>
    </Content>
  )
}

Questionnaire.propTypes = {}

export default Questionnaire