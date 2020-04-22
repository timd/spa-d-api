import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Formik } from 'formik'
import { Button, Flex, Space, Typography } from '@kogaio'
import { withTranslation } from 'react-i18next'

import { ValidatedInput } from '@shared-utils/components'
import { emailFormat } from '@shared-utils/funcs'

const SubscribeForm = ({ isSubscribing, requestSubscribe, t }) => {
  // eslint-disable-next-line no-undef
  const mailChimpUrl = config.MAILCHIMP_URL
  return (
    <Formik
      validateOnChange='true'
      initialValues={{
        email: '',
      }}>
      {({ status, errors, dirty }) => (
        <FullWidthForm action={mailChimpUrl} method='POST' target='_blank' noValidate>
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
              name='EMAIL'
              placeholder={t('subscribe.email')}
              required
              validate={[emailFormat]}
            />
            <Space ml={{ xs: 'auto', md: 2 }} mr={{ xs: 'auto', md: 0 }}>
              <Button
                disabled={!dirty || (errors.EMAIL && errors.EMAIL.length > 0)}
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

const FullWidthForm = styled.form`
  width: 100%;
`

SubscribeForm.propTypes = {
  isSubscribing: PropTypes.bool,
  requestSubscribe: PropTypes.func,
  t: PropTypes.func,
}

export default withTranslation()(SubscribeForm)
