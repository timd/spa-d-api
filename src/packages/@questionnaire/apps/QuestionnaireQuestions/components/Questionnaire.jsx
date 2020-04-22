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
  const { questionnaireState, setQuestionnaireState } = useContext(QuestionnaireContext)
  const [areAllOptionsVisible, setAllOptionsVisible] = useState(false)

  const item = questionnaireItemsObj[questionnaireState.currentQuestionId]
  const allOptions = item.options ?? []
  const lang = i18n.language

  const visibleItems = () => {
    if (item.initialOptionsCount) {
      return areAllOptionsVisible ? allOptions : allOptions.slice(0, item.initialOptionsCount)
    }

    return allOptions
  }
  const shouldShowMoreButton = () => {
    if (item.initialOptionsCount) {
      return !areAllOptionsVisible && allOptions.length > item.initialOptionsCount
    }
    return false
  }

  const showNextQuestion = () => {
    let newState = { ...questionnaireState }
    newState.currentQuestionId = item.nextQuestionId
    setQuestionnaireState(newState)
  }
  const showPrevQuestion = () => {
    let newState = { ...questionnaireState }
    newState.currentQuestionId = item.previousQuestionId
    setQuestionnaireState(newState)
  }
  const showResults = () => {
    navigate('/questionnaire/results')

    let newState = { ...questionnaireState }
    newState.currentQuestionId = null
    setQuestionnaireState(newState)
  }

  return (
    <Content title={item.title[lang]} {...props}>
      <ProgressBar progress={item.progress} />
      <Space ml='auto' mt={10}>
        <Flex width={{ xs: 1, md: '400px' }} flexDirection='column' justifyContent='flex-end'>
          {visibleItems().map(option => (
            <Space key={option.id} mt={3}>
              <AnswerTouchable title={option.title[lang]} isSelected={false} onClick={() => {}} />
            </Space>
          ))}
          <Space mt={3}>
            <MoreTouchable
              display={shouldShowMoreButton() ? 'inherit' : 'none'}
              title='Others'
              onClick={() => {
                setAllOptionsVisible(true)
              }}
            />
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

Questionnaire.propTypes = {
  i18n: PropTypes.object,
}

export default withTranslation()(Questionnaire)
