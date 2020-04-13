# Divorcy SPA Infratructure

## Setup

Make sure to have [Node.js](https://nodejs.org) and [yarn](https://yarnpkg.com) installed on your machine before continuing with the setup.

```bash
$ node --version
v11.14.0

$ yarn --version
1.22.4
```

### Clone the project locally

If you have `SSH` setup on your account, run the following command:

```bash
$ git clone git@github.com::finleap/divorcy-spa.git
```

Otherwise, you may use the `HTTPS` version ( might ask for username and password):

```bash
$ git clone https://github.com/:finleap/divorcy-spa.git
```

### Install dependencies

To install the project dependencies, run the following command from the `infrastructure` directoy of the project:

```bash
$ yarn install
```

## Commands

Before running any comman, make sure to configure the environment variables, by creating a `.env` file, where you define the environment variables:

```bash
PROJECT_NAME = 'divorcy-spa'
GITHUB_SECRET = 82b49bf9126e4cd94fed261d5d9831d9ce7f505
```

Please note that the `GITHUB_SECRET` (access token) must include at least `repo` and `admin:repo_hook` scope access. You can generate access tokens in [Settings / Personal access tokens](https://github.com/settings/tokens/).

### Build

To compile `typescript` to `js`, run the following command from the `infrastructure` directoy of the project:

```bash
$ yarn build
```

### Deploy

To deploy this stack to your default AWS account/region, run the following command from the `infrastructure` directoy of the project:

```bash
$ yarn deploy
```

### Distroy

To destroy the stack and all resources in the cloud, run the following command from the `infrastructure` directoy of the project:

```bash
$ yarn nuke
```

### Diff

To compare deployed stack with current state, run the following command from the `infrastructure` directoy of the project:

```bash
$ yarn yarn cdk:diff
```

### Synth

To build the synthesized CloudFormation template, run the following command from the `infrastructure` directoy of the project:

```bash
$ yarn yarn cdk:synth
```

### Watch mode

To continuously watch for file changes and check for syntax errors, run the following command from the `infrastructure` directoy of the project:

```bash
$ yarn watch
```
