import { Stack, StackProps, Construct, SecretValue } from '@aws-cdk/core'
import { App as AmplifyApp, GitHubSourceCodeProvider, ISourceCodeProvider, RedirectStatus } from '@aws-cdk/aws-amplify'

require('dotenv').config()

export interface IAmplifyStackProps extends StackProps {
  projectName: string
  tags: {
    [key: string]: string
  }
}

export class AmplifyStack extends Stack {
  constructor(scope: Construct, id: string, props: IAmplifyStackProps) {
    super(scope, id, props)

    const { projectName } = props

    const repository = this.makeSourceCodeProvider()
    this.createAmplifyApp(projectName, repository)
  }

  private makeSourceCodeProvider() {
    return new GitHubSourceCodeProvider({
      owner: 'finleap',
      repository: 'divorcy-spa',
      oauthToken: SecretValue.plainText(process.env.PROJECT_NAME || 'divorcy-spa'),
    })
  }

  private createAmplifyApp(projectName: string, repository: ISourceCodeProvider) {
    const app = new AmplifyApp(this, projectName, {
      sourceCodeProvider: repository,
    })
    app.addBranch('master')
    app.addCustomRule({
      source: '</^[^.]+$|\\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|ttf|map|json)$)([^.]+$)/>',
      target: '/index.html',
      status: RedirectStatus.REWRITE,
    })

    return app
  }
}
