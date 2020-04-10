import { App } from '@aws-cdk/core'
import { AmplifyStack } from './AmplifyStack'

require('dotenv').config()

const PROJECT_NAME = process.env.PROJECT_NAME || 'divorcy-spa'

const app = new App()

new AmplifyStack(app, `${PROJECT_NAME}`, {
  projectName: `${PROJECT_NAME}`,
  tags: {
    project: PROJECT_NAME,
  },
})
