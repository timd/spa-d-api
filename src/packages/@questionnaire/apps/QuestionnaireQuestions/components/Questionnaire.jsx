import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Button, Space, Flex } from '@kogaio'
import { navigate } from '@reach/router'
import { TouchableWithIcon } from '@shared-utils/components'

import { QuestionnaireContext } from 'app/services/QuestionnaireProvider'
import { questionnaireItemsObj } from '../assets'
import {
  AgeInput,
  AnswerTouchable,
  Content,
  CurrencyInput,
  CustomInput,
  MoreTouchable,
  ProgressBar,
  TitleWithTooltipInfo,
} from '.'
import { withTranslation } from 'react-i18next'

const Questionnaire = ({ i18n, t, ...props }) => {
  const { questionnaireState, setQuestionnaireState } = useContext(QuestionnaireContext)
  const currentState = questionnaireState.currentValue()

  const item = questionnaireItemsObj[currentState.questionId]
  const allOptions = item.options ?? []
  const lang = i18n.language

  const answers = () =>
    questionnaireState.values().reduce((accumulator, answer) => {
      if (answer.name) {
        accumulator[answer.name] = answer.value
      }
      return accumulator
    }, {})

  const visibleItems = () => {
    if (currentState.isExpanded) {
      return allOptions
    }

    if (item.initialOptionsCount) {
      return allOptions.slice(0, item.initialOptionsCount)
    }

    return allOptions
  }

  const selectOption = option => {
    setQuestionnaireState(state => {
      let current = state.currentValue()
      current.optionId = option.id
      current.name = item.name
      current.value = option.value
      return { ...state }
    })
  }

  const inputOption = (option, value) => {
    setQuestionnaireState(state => {
      let current = state.currentValue()
      current.optionId = option.id
      current.name = item.name
      current.value = value || undefined
      return { ...state }
    })
  }

  const inputMultipleOptions = (option, index, value) => {
    setQuestionnaireState(state => {
      let current = state.currentValue()
      current.optionId = option.id
      current.name = item.name
      current.value = current.value ?? []
      current.value[index] = value || undefined

      return { ...state }
    })
  }

  const isOptionSelected = option => currentState.optionId === option.id

  const isNextButtonDisabled = () => {
    if (Array.isArray(currentState.value)) {
      return currentState.value.filter(item => !!item).length === 0
    }
    return currentState.value === undefined
  }

  const isBackButtonVisible = () => !!questionnaireState.previous()

  const isShowMoreOptionsButtonVisible = () => {
    if (currentState.isExpanded) {
      return false
    }

    if (item.initialOptionsCount) {
      return allOptions.length > item.initialOptionsCount
    }

    return false
  }

  const showMoreOptions = () => {
    setQuestionnaireState(state => {
      currentState.isExpanded = true
      return { ...state }
    })
  }

  const showNextQuestion = () => {
    let questionId = item.nextQuestionId[currentState.optionId] || item.nextQuestionId
    let data = {
      questionId,
      optionId: undefined,
      name: undefined,
      value: undefined,
      isExpanded: false,
    }
    setQuestionnaireState(state => {
      if (state.next()) {
        const nextValue = state.nextValue()
        if (nextValue.questionId === questionId) {
          state.seekForward()
        } else {
          state.branch(data)
        }
      } else {
        state.append(data)
      }
      return { ...state }
    })
  }
  const showPrevQuestion = () => {
    setQuestionnaireState(state => {
      state.seekBackward()
      return { ...state }
    })
  }
  const showResults = () => {
    navigate('/questionnaire/results')
    setQuestionnaireState(state => {
      state.seekTo(null)
      return { ...state }
    })

    console.log('Calculator input')
    console.dir(answers())
  }

  var dynamicOptions = []
  const { dependency, title, type } = item.dynamic ?? {}
  if (dependency) {
    let count = answers()[dependency]
    for (var i = 1; i <= count; i++) {
      dynamicOptions.push({
        id: `${item.questionId}-${i}`,
        type: type,
        title: title,
      })
    }
  }

  return (
    <Content title={item.title[lang]} {...props}>
      <ProgressBar progress={item.progress} />
      <Space ml='auto' mt={10}>
        <Flex width={{ xs: 1, md: '400px' }} flexDirection='column' justifyContent='flex-end'>
          {item.tooltip && (
            <TitleWithTooltipInfo
              tooltipInfo={{
                title: item.tooltip.title[lang],
                description: item.tooltip.description[lang],
              }}
            />
          )}

          {dynamicOptions.map((option, index) =>
            option.type === 'age_input' ? (
              <Space key={option.id} mt={3}>
                <AgeInput
                  id={option.id}
                  value={currentState.value ? currentState.value[index] : undefined}
                  label={`${option.title[lang]} ${index + 1}`}
                  placeholder={t('Age')}
                  onChange={age => inputMultipleOptions(option, index, age)}
                />
              </Space>
            ) : (
              <></>
            )
          )}

          {visibleItems().map(option => {
            if (option.type === 'currency_input') {
              return (
                <Space key={option.id} mt={3}>
                  <CurrencyInput
                    id={option.id}
                    value={currentState.value}
                    placeholder={option.title[lang]}
                    onChange={event => inputOption(option, event.target.value)}
                  />
                </Space>
              )
            }
            if (option.type === 'custom_string') {
              return (
                <Space key={option.id} mt={3}>
                  <CustomInput
                    id={option.id}
                    title={option.title[lang]}
                    value={currentState.value}
                    placeholder={option.title[lang]}
                    isSelected={isOptionSelected(option)}
                    onClick={() => selectOption(option)}
                    onChange={event => inputOption(option, event.target.value)}
                  />
                </Space>
              )
            }
            if (option.type === 'custom_number') {
              return (
                <Space key={option.id} mt={3}>
                  <CustomInput
                    id={option.id}
                    title={option.title[lang]}
                    value={currentState.value}
                    placeholder={option.title[lang]}
                    type='number'
                    isSelected={isOptionSelected(option)}
                    onClick={() => selectOption(option)}
                    onChange={event => inputOption(option, event.target.value)}
                  />
                </Space>
              )
            }
            return (
              <Space key={option.id} mt={3}>
                <AnswerTouchable
                  title={option.title[lang]}
                  isSelected={isOptionSelected(option)}
                  onClick={() => selectOption(option)}
                />
              </Space>
            )
          })}
          <Space mt={3}>
            <MoreTouchable
              display={isShowMoreOptionsButtonVisible() ? 'inherit' : 'none'}
              title='Others'
              onClick={() => showMoreOptions()}
            />
          </Space>
        </Flex>
      </Space>
      <Space mt={8}>
        <Flex justifyContent={isBackButtonVisible() ? 'space-between' : 'flex-end'}>
          {isBackButtonVisible() && (
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
  t: PropTypes.func,
  i18n: PropTypes.object,
}

export default withTranslation()(Questionnaire)
