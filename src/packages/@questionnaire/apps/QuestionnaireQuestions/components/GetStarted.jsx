import React from 'react'
import PropTypes from 'prop-types'
import { Button, Checkbox, Space, Typography } from '@kogaio'

import { Content, TermsCheckboxLabel } from '.'

const GetStarted = ({
  acceptedConditions: { policy: isPolicyAccepted, termsAndConditions: areTermsAccepted },
  onBtnClick,
  toggleCheck,
  ...props
}) => (
  <Content
    title={GetStartedTitle}
    description="We're gonna ask some basic questions and it probably takes about 5 minutes."
    {...props}>
    <Space mt={6}>
      <Checkbox
        checked={isPolicyAccepted}
        id='agree-policy'
        label={<TermsCheckboxLabel
          anchorLabel='Privacy policy'
          anchorURL='https://google.com'
        />}
        onChange={toggleCheck('policy')}
      />
      <Checkbox
        checked={areTermsAccepted}
        id='agree-terms'
        label={<TermsCheckboxLabel
          anchorLabel='Terms And Conditions'
          anchorURL='https://yahoo.com'
        />}
        onChange={toggleCheck('termsAndConditions')}
      />
    </Space>
    <Space mt={6}>
      <Button
        disabled={!(isPolicyAccepted && areTermsAccepted)}
        onClick={onBtnClick}
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
  onBtnClick: PropTypes.func,
  toggleCheck: PropTypes.func,
}

export default GetStarted
