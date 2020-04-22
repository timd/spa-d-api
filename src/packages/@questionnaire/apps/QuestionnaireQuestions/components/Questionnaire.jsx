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
  const [areAllOptionsVisible, setAllOptionsVisible] = useState(false)

  const item = questionnaireItemsObj[currentQuestionId]
  const options = (areAllOptionsVisible ? item.options : item.options?.slice(0, 3)) ?? []

  const lang = i18n.language

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
          {options.map(option => (
            <Space key={option.id} mt={3}>
              <AnswerTouchable title={option.title[lang]} isSelected={false} onClick={() => {}} />
            </Space>
          ))}
          <Space mt={3}>
            <MoreTouchable
              display={areAllOptionsVisible ? 'none' : 'inherit'}
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
