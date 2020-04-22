import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Space, Flex } from '@kogaio'
import { navigate } from '@reach/router'
import { TouchableWithIcon } from '@shared-utils/components'

import { QuestionnaireContext } from 'app/services/QuestionnaireProvider'
import { questionnaireItemsObj } from '../assets'
import { AnswerTouchable, Content, MoreTouchable, ProgressBar } from '.'
import { withTranslation } from 'react-i18next'

const Questionnaire = ({ i18n, ...props }) => {
  const { currentQuestionId, setCurrentQuestionId } = useContext(QuestionnaireContext)
  const item = questionnaireItemsObj[currentQuestionId]
  const lang = i18n.language
  const [isSelected, setIsSelected] = useState(false)

  const showNextQuestion = () => setCurrentQuestionId(item.nextQuestionId)
  const showPrevQuestion = () => setCurrentQuestionId(item.previousQuestionId)
  const showResults = () => {
    navigate('/questionnaire/results')
    setCurrentQuestionId(null)
  }

  return (
    <Content title={item.title[lang]} {...props}>
      <ProgressBar progress={item.progress} />
      <Space ml='auto' mt={10}>
        <Flex width={{ xs: 1, md: '400px' }} flexDirection='column' justifyContent='flex-end'>
          <Space mt={3}>
            <AnswerTouchable
              title='Problems in my marriage'
              isSelected={isSelected}
              onClick={() => setIsSelected(!isSelected)}
            />
          </Space>
          <Space mt={3}>
            <AnswerTouchable title='Thinking about a divorce' isSelected={false} onClick={() => {}} />
          </Space>
          <Space mt={3}>
            <AnswerTouchable title='I made the decision to get a divorce' isSelected={false} onClick={() => {}} />
          </Space>
          <Space mt={3}>
            <MoreTouchable title='Others' />
          </Space>
        </Flex>
      </Space>
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

Questionnaire.propTypes = { i18n: PropTypes.object }

export default withTranslation()(Questionnaire)
