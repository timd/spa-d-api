import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import { Button, Flex, Space, Typography } from '@kogaio'
import { withTranslation } from 'react-i18next'

import { ValidatedInput } from '@shared-utils/components'
import { emailFormat } from '@shared-utils/funcs'

const SubscribeForm = ({ isSubscribing, requestSubscribe, t }) => {
  const submitForm = async (formValues, actions) => {
    const { setStatus, setSubmitting } = actions
    try {
      const { email } = formValues
      setStatus(null)
      const response = await requestSubscribe(email)
      if (response.success) {
        //To discuss (we can show a modal with success message)
      } else if (response.error) {
        setSubmitting(false)
        handleCreateError(response.error)
      }
    } catch (err) {
      setSubmitting(false)
      console.error('* Unexpected error caught while subscribing with email', err)
    }
  }

  const handleCreateError = err => {
    console.error('* Error caught while subscribing with email', err)
  }

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      onSubmit={submitForm}>
      {({ handleSubmit, isSubmitting, status }) => (
        <FullWidthForm onSubmit={handleSubmit} noValidate>
          <Typography color='error' variant='caption'>
            {status}
          </Typography>

          <Flex justifyContent='flex-end' flexWrap={{ xs: 'wrap', md: 'nowrap' }}>
            <ValidatedInput
              containerStyle={{
                maxWidth: { xs: '311px', md: 'auto' },
                width: { xs: 1, md: 'calc(100% - 148px)' },
                margin: 'auto',
              }}
              id='subscribe-email'
              icLeft='email'
              name='email'
              placeholder={t('subscribe.email')}
              required
              validate={[emailFormat]}
            />
            <Space ml={{ xs: 'auto', md: 2 }} mr={{ xs: 'auto', md: 0 }}>
              <Button
                disabled={isSubmitting}
                variant='secondary'
                title={t('subscribe.subscribe')}
                type='submit'
                width={{ xs: 1, md: 'auto' }}
              />
            </Space>
          </Flex>
        </FullWidthForm>
      )}
    </Formik>
  )
}

const FullWidthForm = styled(Form)`
  width: 100%;
`

SubscribeForm.propTypes = {
  isSubscribing: PropTypes.bool,
  requestSubscribe: PropTypes.func,
  t: PropTypes.func,
}

export default withTranslation()(SubscribeForm)
