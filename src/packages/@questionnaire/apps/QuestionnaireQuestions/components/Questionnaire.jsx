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
  const {
    questionnaireState: { currentQuestionId, answers },
    setQuestionnaireState,
  } = useContext(QuestionnaireContext)

  const item = questionnaireItemsObj[currentQuestionId]
  const answer = answers[currentQuestionId] ?? {}

  const allOptions = item.options ?? []
  const lang = i18n.language

  const visibleItems = () => {
    if (answer.areAllOptionsVisible) {
      return allOptions
    }

    if (item.initialOptionsCount) {
      return allOptions.slice(0, item.initialOptionsCount)
    }

    return allOptions
  }
  const shouldShowMoreButton = () => {
    if (answer.areAllOptionsVisible) {
      return false
    }

    if (item.initialOptionsCount) {
      return allOptions.length > item.initialOptionsCount
    }

    return false
  }

  const selectOption = option => {
    setQuestionnaireState(prevState => ({
      ...prevState,
      answers: {
        ...prevState.answers,
        [currentQuestionId]: {
          ...answer,
          ...option,
        },
      },
    }))
  }

  const isOptionSelected = option => answer?.id === option.id

  const isNextButtonDisabled = () => !answer?.id

  const showMoreOptions = () => {
    answer.areAllOptionsVisible = true
    setQuestionnaireState(prevState => ({
      ...prevState,
      answers: {
        ...prevState.answers,
        [currentQuestionId]: answer,
      },
    }))
  }

  const showNextQuestion = () => {
    let nextQuestionId = item.nextQuestionId[answer.id] || item.nextQuestionId
    setQuestionnaireState(prevState => ({
      ...prevState,
      currentQuestionId: nextQuestionId,
    }))
  }
  const showPrevQuestion = () => {
    setQuestionnaireState(prevState => ({
      ...prevState,
      currentQuestionId: item.previousQuestionId,
    }))
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
