import React from 'react'

import { Formik } from 'formik'
import { Button, Flex, Space, Typography } from '@kogaio'

import { ValidatedInput } from '@shared-utils/components'
import { emailFormat } from '@shared-utils/funcs'

const SubscribeForm = () => (
  <Formik
    validateOnChange='true'
    initialValues={{
      email: '',
    }}>
    {({ status, errors, dirty }) => (
      <form
        action='https://finleap.us19.list-manage.com/subscribe/post?u=979577850ed7008dcd7b31f0d&amp;id=c79131ac6d'
        method='POST'
        target='_blank'
        noValidate>
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
            placeholder='Email address'
            required
            validate={[emailFormat]}
          />
          <Space ml={{ xs: 'auto', md: 2 }} mr={{ xs: 'auto', md: 0 }}>
            <Button
              disabled={!dirty || (errors.EMAIL && errors.EMAIL.length > 0)}
              variant='secondary'
              title='Subscribe'
              type='submit'
              width={{ xs: 1, md: 'auto' }}
            />
          </Space>
        </Flex>
      </form>
    )}
  </Formik>
)

export default SubscribeForm
