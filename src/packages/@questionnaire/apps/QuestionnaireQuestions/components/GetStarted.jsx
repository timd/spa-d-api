import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Button, Checkbox, Space, Typography } from '@kogaio'
import { withTranslation } from 'react-i18next'

import { QuestionnaireContext } from 'app/services/QuestionnaireProvider'
import { Content, ProgressBar, TermsCheckboxLabel } from '.'
import { questionnaireItemsObj } from '../assets'

const GetStarted = ({
  acceptedConditions: { policy: isPolicyAccepted, termsAndConditions: areTermsAccepted },
  toggleCheck,
  t,
  ...props
}) => {
  const { setQuestionnaireState } = useContext(QuestionnaireContext)

  const _startQuestionnaire = () => {
    const [questionId] = Object.keys(questionnaireItemsObj)
    setQuestionnaireState(state => {
      state.append({
        questionId,
        optionId: undefined,
        name: undefined,
        value: undefined,
        isExpanded: false,
      })
      return { ...state }
    })
  }

  return (
    <Content title={<GetStartedTitle t={t} />} description={t('questionnaire.getStarted.description')} {...props}>
      <ProgressBar progress='8px' />
      <Space mt={6}>
        <Checkbox
          checked={areTermsAccepted}
          id='agree-terms'
          label={
            <TermsCheckboxLabel
              preAnchorCopy={t('conditions.preAnchorCopy')}
              anchorLabel={t('conditions.anchorLabel')}
              postAnchorCopy={t('conditions.postAnchorCopy')}
              anchorURL='/conditions'
            />
          }
          onChange={toggleCheck('termsAndConditions')}
        />
      </Space>
      <Space mt={2}>
        <Checkbox
          checked={isPolicyAccepted}
          id='agree-policy'
          label={
            <TermsCheckboxLabel
              preAnchorCopy={t('privacy.preAnchorCopy')}
              anchorLabel={t('privacy.anchorLabel')}
              postAnchorCopy={t('privacy.postAnchorCopy')}
              anchorURL='/data-protection'
            />
          }
          onChange={toggleCheck('policy')}
        />
      </Space>

      <Space mt={6} mx={{ xs: 'auto', md: -1 }}>
        <Button
          disabled={!(isPolicyAccepted && areTermsAccepted)}
          onClick={_startQuestionnaire}
          title={t('Get Started')}
          width={{ xs: 1, md: 'fit-content' }}
        />
      </Space>
      <Space mt={4} mx={{ xs: 'auto', md: -1 }}>
        <Typography color='dark-grey' maxWidth='311px' variant='caption' textAlign={{ xs: 'center', md: 'left' }}>
          {t('* We use all information very discretly')}
        </Typography>
      </Space>
    </Content>
  )
}

const GetStartedTitle = ({ t, ...props }) => (
  <Typography variant='questionnaireTitle'>
    {t('Hello')},
    <br />
    {t("I'm here for helping you get overview further process!")}
  </Typography>
)

GetStartedTitle.propTypes = {
  t: PropTypes.func,
}

GetStarted.propTypes = {
  acceptedConditions: PropTypes.shape({
    policy: PropTypes.bool,
    termsAndConditions: PropTypes.bool,
  }),
  toggleCheck: PropTypes.func,
  t: PropTypes.func,
}

export default withTranslation()(GetStarted)
