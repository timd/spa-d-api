# Divorcy SPA

## Project setup

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
$ git clone git@github.com:finleap/divorcy-spa.git
```

Otherwise, you may use the `HTTPS` version ( might ask for username and password):

```bash
$ git clone https://github.com/finleap/divorcy-spa.git
```

### Install dependencies

Change the working directory to the repo directory.

To install the project dependencies, run the following install command:

```bash
$ yarn install
```

## Development

### Build

To build the app for installation, run the following command from the root directoy of the project:

```bash
$ yarn build
```

### Run on local machine

To start the app on a local server, run the following command from the root directoy of the project:

```bash
$ yarn start
```

### Run tests

To run the unit test, run the following command from the root directoy of the project:

```bash
$ yarn test
```

## Questionnaire setup

The list of questions that appear in the questionnair is stored inside the `app` folder:

```
./src/app/assets/questionnaire.json
```

and it has the following structure:

```
{
    "question-1": {
        "title": "Where are you on your personal journey?",
        "nextQuestionId": "question-2",
        "progress": 0.2
    },
    "question-2": {
        "title": "Whom have you consulted so far?",
        "nextQuestionId": "question-3",
        "progress": 0.4
    },
    "question-3": {
        "title": "How high is your monthly net income?",
        "nextQuestionId": "question-4",
        "progress": 0.6
    },
    "question-4": {
        "title": "How high are you joined assets?",
        "nextQuestionId": "question-5",
        "progress": 0.8
    },
    "question-5": {
        "title": "Do you have kid(s) with your spouse?",
        "progress": 1
    }
}
```

### Structure

The `root` object represents a map between a list of `uniq ids` and the associated `questionnaire items`.

A `questionnaire item` is composed from:

- `title`: `string` value that represents the title.
- `nextQuestionId`: Optional `string` value that points to the `id` of an item in the `root` object. It is used for the questionnaire navigation. Omit this field in the last questionnair item.
- `progress`: `string` value between `0%` and `100%`. It represents the progress the user has made in the questionnair. Last item in the questionnaire should always have it set to `100%`.

## Architecture and Design

When implementing new features it is important to keep the [conceptual integrity](https://architecture.typepad.com/architecture_blog/2011/10/the-importance-of-conceptual-integrity.html) of the service by applying the: [TDD](https://en.wikipedia.org/wiki/Test-driven_development), [SOLID](https://en.wikipedia.org/wiki/SOLID), practices and following the [Clean Code](https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29) philosophy.

### Structure

In order to make it easy to understand and extend the codebase, the folder structure mirrors the project architecure:

```
•
├── infrastructure
├── public
├── src
│   ├── app
│   └── packages
└── tests
    ├── app
    └── packages
```
