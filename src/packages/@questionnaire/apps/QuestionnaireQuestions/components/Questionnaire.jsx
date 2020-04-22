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
      <Space mt={2}>
        <AnswerTouchable
          title='I am in the middle of my divorce and waiting for the court to rule'
          isSelected={isSelected}
          onClick={() => setIsSelected(!isSelected)}
        />
      </Space>
      <Space mt={2}>
        <MoreTouchable title='Others' />
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
