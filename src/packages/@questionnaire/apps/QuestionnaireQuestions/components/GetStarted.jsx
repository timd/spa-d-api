import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Button, Checkbox, Space, Typography } from '@kogaio'

import { QuestionnaireContext } from 'app/services/QuestionnaireProvider'
import { Content, ProgressBar, TermsCheckboxLabel } from '.'
import { questionnaireItemsObj } from '../assets'

const GetStarted = ({
  acceptedConditions: { policy: isPolicyAccepted, termsAndConditions: areTermsAccepted },
  toggleCheck,
  ...props
}) => {
  const { setCurrentQuestionId } = useContext(QuestionnaireContext)

  const _startQuestionnaire = () => {
    const [firstQuestionId] = Object.keys(questionnaireItemsObj)
    setCurrentQuestionId(firstQuestionId)
  }

  return (
    <Content
      title={GetStartedTitle}
      description="We're gonna ask some basic questions and it probably takes about 5 minutes."
      {...props}>
      <ProgressBar progress='8px' />
      <Space mt={6}>
        <Checkbox
          checked={isPolicyAccepted}
          id='agree-policy'
          label={<TermsCheckboxLabel anchorLabel='Privacy policy' anchorURL='https://google.com' />}
          onChange={toggleCheck('policy')}
        />
        <Checkbox
          checked={areTermsAccepted}
          id='agree-terms'
          label={<TermsCheckboxLabel anchorLabel='Terms And Conditions' anchorURL='https://yahoo.com' />}
          onChange={toggleCheck('termsAndConditions')}
        />
      </Space>
      <Space mt={6}>
        <Button
          disabled={!(isPolicyAccepted && areTermsAccepted)}
          onClick={_startQuestionnaire}
          title='Get Started'
          width={{ xs: 1, md: 'fit-content' }}
        />
      </Space>
      <Space mt={4}>
        <Typography color='dark-grey' maxWidth='311px' variant='caption' textAlign={{ xs: 'center', md: 'left' }}>
          * We use all information very discretely
        </Typography>
      </Space>
    </Content>
  )
}

const GetStartedTitle = (
  <Typography variant='questionnaireTitle'>
    Hello,
    <br />
    I&apos;m here for helping you get overview further process!
  </Typography>
)

GetStarted.propTypes = {
  acceptedConditions: PropTypes.shape({
    policy: PropTypes.bool,
    termsAndConditions: PropTypes.bool,
  }),
  toggleCheck: PropTypes.func,
}

export default GetStarted
