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

const ITEM_TYPE = {
  single: 'single',
  list: 'list',
  composition: 'composition',
}

const OPTION_TYPE = {
  currency: 'currency',
  age: 'age',
  customText: 'custom_text',
  customNumber: 'custom_number',
}

const buildItem = (id, items, answers) => {
  const item = items[id]
  let output = {
    type: ITEM_TYPE.single,
    required: true,
    showLabels: false,
    ...item,
    options: buildOptions(item, answers),
  }

  return output
}

const buildOptions = (item, answers) => {
  if (item.options) {
    return item.options
  }

  var options = []
  const { dependency, title, type } = item.dynamic ?? {}
  if (dependency) {
    let count = answers[dependency]
    for (var i = 1; i <= count; i++) {
      options.push({
        id: `${item.questionId}-${i}`,
        type: type,
        title: title,
      })
    }
  }

  return options
}

const Questionnaire = ({ i18n, t, ...props }) => {
  const { questionnaireState, setQuestionnaireState } = useContext(QuestionnaireContext)
  const currentState = questionnaireState.currentValue()
  const currentUserAnswers = questionnaireState.values().reduce((accumulator, answer) => {
    if (answer.name) {
      accumulator[answer.name] = answer.value
    }
    return accumulator
  }, {})

  const item = buildItem(currentState.questionId, questionnaireItemsObj, currentUserAnswers)
  const allOptions = item.options ?? []
  const lang = i18n.language

  const visibleOptions = () => {
    if (currentState.isExpanded) {
      return allOptions
    }

    if (item.initialOptionsCount) {
      return allOptions.slice(0, item.initialOptionsCount)
    }

    return allOptions
  }

  const normalize = value => {
    if (typeof value === 'boolean') {
      return value ?? undefined
    }

    return value || undefined
  }

  const setOptionValue = (option, index, value) => {
    if (item.type === ITEM_TYPE.composition) {
      return setQuestionnaireState(state => {
        let current = state.currentValue()
        current.optionId = option.id
        current.name = item.name
        current.value = current.value ?? {}
        current.value[option.name] = normalize(value)

        return { ...state }
      })
    } else if (item.type === ITEM_TYPE.list) {
      return setQuestionnaireState(state => {
        let current = state.currentValue()
        current.optionId = option.id
        current.name = item.name
        current.value = current.value ?? []
        current.value[index] = normalize(value)

        return { ...state }
      })
    }

    return setQuestionnaireState(state => {
      let current = state.currentValue()
      current.optionId = option.id
      current.name = item.name
      current.value = normalize(value)

      return { ...state }
    })
  }

  const getOptionValue = (option, index) => {
    if (item.type === ITEM_TYPE.composition) {
      return currentState.value ? currentState.value[option.name] : undefined
    }

    if (item.type === ITEM_TYPE.list) {
      return currentState.value ? currentState.value[index] : undefined
    }

    return currentState.value
  }

  const getOptionLabel = option => (item.showLabels ? option.title[lang] : undefined)

  const isOptionSelected = option => currentState.optionId === option.id

  const isRequired = () => item.required === false

  const isNextButtonDisabled = () => {
    if (isRequired()) {
      return false
    }

    if (Array.isArray(currentState.value)) {
      return currentState.value.filter(item => !!item).length === 0
    }
    return currentState.value === undefined
  }

  const isBackButtonVisible = () => !!questionnaireState.previous()
  const isSubmitButtonVisible = () => !nextQuestionId()

  const nextQuestionId = () => {
    if (!item.nextQuestionId) {
      return false
    }

    if (typeof item.nextQuestionId === 'string') {
      return item.nextQuestionId
    }

    return item.nextQuestionId[currentState.optionId]
  }

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
    let questionId = nextQuestionId()
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
    console.dir(currentUserAnswers)
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

          {visibleOptions().map((option, index) => {
            if (option.type === OPTION_TYPE.currency) {
              return (
                <Space key={option.id} mt={3}>
                  <CurrencyInput
                    id={option.id}
                    value={getOptionValue(option, index)}
                    label={getOptionLabel(option, index)}
                    placeholder={option.title[lang]}
                    onValueChange={value => setOptionValue(option, index, value)}
                  />
                </Space>
              )
            }
            if (option.type === OPTION_TYPE.age) {
              return (
                <Space key={option.id} mt={3}>
                  <AgeInput
                    id={option.id}
                    value={getOptionValue(option, index)}
                    label={`${option.title[lang]} ${index + 1}`}
                    placeholder={t('Age')}
                    onValueChange={value => setOptionValue(option, index, value)}
                  />
                </Space>
              )
            }
            if (option.type === OPTION_TYPE.customText) {
              return (
                <Space key={option.id} mt={3}>
                  <CustomInput
                    id={option.id}
                    title={option.title[lang]}
                    value={getOptionValue(option, index)}
                    placeholder={option.title[lang]}
                    validation={option.validation}
                    isSelected={isOptionSelected(option)}
                    onSelect={() => setOptionValue(option, index, option.value)}
                    onValueChange={value => setOptionValue(option, index, value)}
                  />
                </Space>
              )
            }
            if (option.type === OPTION_TYPE.customNumber) {
              return (
                <Space key={option.id} mt={3}>
                  <CustomInput
                    id={option.id}
                    title={option.title[lang]}
                    value={getOptionValue(option, index)}
                    placeholder={option.title[lang]}
                    type='number'
                    validation={option.validation}
                    isSelected={isOptionSelected(option)}
                    onSelect={() => setOptionValue(option, index, option.value)}
                    onValueChange={value => setOptionValue(option, index, value)}
                  />
                </Space>
              )
            }
            return (
              <Space key={option.id} mt={3}>
                <AnswerTouchable
                  title={option.title[lang]}
                  isSelected={isOptionSelected(option)}
                  onSelect={() => setOptionValue(option, index, option.value)}
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
              label={t('Back')}
            />
          )}
          <Button
            title={isSubmitButtonVisible() ? t('Submit') : t('Next')}
            disabled={isNextButtonDisabled()}
            onClick={isSubmitButtonVisible() ? showResults : showNextQuestion}
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
