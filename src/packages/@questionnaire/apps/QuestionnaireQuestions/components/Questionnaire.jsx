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
  const currentState = questionnaireState.currentValue()

  const item = questionnaireItemsObj[currentState.questionId]
  const allOptions = item.options ?? []
  const lang = i18n.language

  const visibleItems = () => {
    if (currentState.isExpanded) {
      return allOptions
    }

    if (item.initialOptionsCount) {
      return allOptions.slice(0, item.initialOptionsCount)
    }

    return allOptions
  }
  const shouldShowMoreButton = () => {
    if (currentState.isExpanded) {
      return false
    }

    if (item.initialOptionsCount) {
      return allOptions.length > item.initialOptionsCount
    }

    return false
  }

  const selectOption = option => {
    setQuestionnaireState(prevState => {
      currentState.optionId = option.id
      return { ...prevState }
    })
  }

  const isOptionSelected = option => currentState.optionId === option.id

  const isNextButtonDisabled = () => !currentState.optionId

  const showMoreOptions = () => {
    setQuestionnaireState(prevState => {
      currentState.isExpanded = true
      return { ...prevState }
    })
  }

  const showNextQuestion = () => {
    let questionId = item.nextQuestionId[currentState.optionId] || item.nextQuestionId
    setQuestionnaireState(prevState => {
      if (prevState.next()) {
        prevState.seekForward()
      } else {
        prevState.add({
          questionId,
          optionId: null,
          isExpanded: false,
          values: {},
        })
      }
      return { ...prevState }
    })
  }
  const showPrevQuestion = () => {
    setQuestionnaireState(prevState => {
      prevState.seekBackward()
      return { ...prevState }
    })
  }
  const showResults = () => {
    navigate('/questionnaire/results')
    setQuestionnaireState(prevState => ({
      ...prevState,
      currentQuestionId: null,
    }))
  }

  return (
    <Content title={item.title[lang]} {...props}>
      <ProgressBar progress={item.progress} />
      <Space ml='auto' mt={10}>
        <Flex width={{ xs: 1, md: '400px' }} flexDirection='column' justifyContent='flex-end'>
          {visibleItems().map(option => (
            <Space key={option.id} mt={3}>
              <AnswerTouchable
                title={option.title[lang]}
                isSelected={isOptionSelected(option)}
                onClick={() => selectOption(option)}
              />
            </Space>
          ))}
          <Space mt={3}>
            <MoreTouchable
              display={shouldShowMoreButton() ? 'inherit' : 'none'}
              title='Others'
              onClick={() => showMoreOptions()}
            />
          </Space>
        </Flex>
      </Space>
      <Space mt={8}>
        <Flex justifyContent={item.previousQuestionId ? 'space-between' : 'flex-end'}>
          {item.previousQuestionId && (
            <TouchableWithIcon
              onClick={() => showPrevQuestion()}
              icon={{ name: 'keyboard_backspace', fontSize: '24px' }}
              label='Back'
            />
          )}
          <Button
            onClick={item.nextQuestionId ? showNextQuestion : showResults}
            disabled={isNextButtonDisabled()}
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
