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
    "name": "process_stage",
    "title": {
      "en": "Where are you on your personal journey?",
      "de": "Wo befindest Du Dich in Deinem Scheidungsprozess?"
    },
    "options": [
      {
        "id": "option-1",
        "title": {
          "en": "Problems in my marriage",
          "de": "[DE] Problems in my marriage"
        },
        "value": "Problems in my marriage"
      },
      {
        "id": "option-2",
        "title": {
          "en": "Thinking about a divorce",
          "de": "[DE] Thinking about a divorce"
        },
        "value": "Thinking about a divorce"
      },
      {
        "id": "option-3",
        "title": {
          "en": "I made the decision to get a divorce",
          "de": "[DE] I made the decision to get a divorce"
        },
        "value": "I made the decision to get a divorce"
      },
      {
        "id": "option-4",
        "title": {
          "en": "My partner wants a divorce/filed for divorce",
          "de": "[DE] My partner wants a divorce/filed for divorce"
        },
        "value": "My partner wants a divorce/filed for divorce"
      },
      {
        "id": "option-5",
        "title": {
          "en": "We have separated already",
          "de": "[DE] We have separated already"
        },
        "value": "We have separated already"
      },
      {
        "id": "option-6",
        "title": {
          "en": "We are already living separated for a year",
          "de": "[DE] We are already living separated for a year"
        },
        "value": "We are already living separated for a year"
      },
      {
        "id": "option-7",
        "title": {
          "en": "I am in the middle of my divorce and waiting for the court to rule",
          "de": "[DE] I am in the middle of my divorce and waiting for the court to rule"
        },
        "value": "I am in the middle of my divorce and waiting for the court to rule"
      }
    ],
    "initialOptionsCount": 3,
    "nextQuestionId": "question-2",
    "progress": "9%"
  },
  "question-2": {
    "name": "process_aid",
    "title": {
      "en": "Whom have you consulted so far?",
      "de": "Mit wem hast du bisher gesprochen?"
    },
    "options": [
      {
        "id": "option-1",
        "title": {
          "en": "Family & Friends",
          "de": "[DE] Family & Friends"
        },
        "value": "Family & Friends"
      },
      {
        "id": "option-2",
        "title": {
          "en": "Professional Counselor",
          "de": "[DE] Professional Counselor"
        },
        "value": "Professional Counselor"
      },
      {
        "id": "option-3",
        "title": {
          "en": "Lawyer",
          "de": "[DE] Lawyer"
        },
        "value": "Lawyer"
      },
      {
        "id": "option-4",
        "title": {
          "en": "Banker",
          "de": "[DE] Banker"
        },
        "value": "Banker"
      },
      {
        "id": "option-5",
        "title": {
          "en": "Insurance",
          "de": "[DE] We have separated already"
        },
        "value": "Insurance"
      },
      {
        "id": "option-6",
        "title": {
          "en": "Pension",
          "de": "[DE] Pension"
        },
        "value": "Pension"
      },
      {
        "id": "option-7",
        "type": "custom_text",
        "title": {
          "en": "Other",
          "de": "[DE] Other"
        }
      }
    ],
    "initialOptionsCount": 3,
    "nextQuestionId": "question-3",
    "progress": "18%"
  },
  "question-3": {
    "name": "financial_net_income",
    "title": {
      "en": "How high is your monthly net income?",
      "de": "Wie hoch ist dein monatliches Nettoeinkommen?"
    },
    "tooltip": {
      "title": {
        "en": "Are you not sure?",
        "de": "[DE] Are you not sure?"
      },
      "description": {
        "en": "If you don't know exact amount of money, it's fine for now. blah blah..",
        "de": "[DE] If you don't know exact amount of money, it's fine for now. blah blah.."
      }
    },
    "options": [
      {
        "id": "option-1",
        "type": "currency",
        "title": {
          "en": "Net income",
          "de": "[DE] Net income"
        }
      }
    ],
    "nextQuestionId": "question-4",
    "progress": "27%"
  },
  "question-4": {
    "name": "financial_supouse_net_income",
    "title": {
      "en": "How high is your supouse's monthly net income?",
      "de": "[DE] How high is your supouse'smonthly net income?"
    },
    "tooltip": {
      "title": {
        "en": "Are you not sure?",
        "de": "[DE] Are you not sure?"
      },
      "description": {
        "en": "If you don't know exact amount of money, it's fine for now. blah blah..",
        "de": "[DE] If you don't know exact amount of money, it's fine for now. blah blah.."
      }
    },
    "options": [
      {
        "id": "option-1",
        "type": "currency",
        "title": {
          "en": "Net income",
          "de": "[DE] Net income"
        }
      }
    ],
    "nextQuestionId": "question-5",
    "progress": "36%"
  },
  "question-5": {
    "name": "financial_joined_assets",
    "title": {
      "en": "How high are you joined assets?",
      "de": "Wieviel sind eure geteilten Vermögenswerte?"
    },
    "tooltip": {
      "title": {
        "en": "Are you not sure?",
        "de": "[DE] Are you not sure?"
      },
      "description": {
        "en": "If you don't know exact amount of money, it's fine for now. blah blah..",
        "de": "[DE] If you don't know exact amount of money, it's fine for now. blah blah.."
      }
    },
    "options": [
      {
        "id": "option-4-1",
        "type": "currency",
        "title": {
          "en": "Joined assets",
          "de": "[DE] Joined assets"
        }
      }
    ],
    "nextQuestionId": "question-6",
    "progress": "45%"
  },
  "question-6": {
    "type": "composition",
    "name": "financial_asset_distribution",
    "required": false,
    "showLabels": true,
    "title": {
      "en": "How are these assets roughly distributed?",
      "de": "[DE] How are these assets roughly distributed?"
    },
    "tooltip": {
      "title": {
        "en": "Are you not sure?",
        "de": "[DE] Are you not sure?"
      },
      "description": {
        "en": "If you don't know exact amount of money, it's fine for now. blah blah..",
        "de": "[DE] If you don't know exact amount of money, it's fine for now. blah blah.."
      }
    },
    "options": [
      {
        "id": "option-1",
        "type": "currency",
        "name": "real_estate",
        "title": {
          "en": "Real Estate",
          "de": "[DE] Real Estate"
        }
      },
      {
        "id": "option-2",
        "type": "currency",
        "name": "cash_accounts",
        "title": {
          "en": "Cash Accounts",
          "de": "[DE] Cash Accounts"
        }
      },
      {
        "id": "option-3",
        "type": "currency",
        "name": "stocks",
        "title": {
          "en": "Stocks",
          "de": "[DE] Stocks"
        }
      },
      {
        "id": "option-4",
        "type": "currency",
        "name": "car",
        "title": {
          "en": "Car",
          "de": "[DE] Car"
        }
      },
      {
        "id": "option-5",
        "type": "currency",
        "name": "motor_bike",
        "title": {
          "en": "Motor Bike",
          "de": "[DE] Motor Bike"
        }
      },
      {
        "id": "option-6",
        "type": "currency",
        "name": "life_ensurance",
        "title": {
          "en": "Life Insurance",
          "de": "[DE] Life Insurance"
        }
      },
      {
        "id": "option-7",
        "type": "currency",
        "name": "raise_pension",
        "title": {
          "en": "Raise Pension",
          "de": "[DE] Raise Pension"
        }
      },
      {
        "id": "option-8",
        "type": "currency",
        "name": "company_pesions",
        "title": {
          "en": "Company Pensions",
          "de": "[DE] Real Estate"
        }
      }
    ],
    "nextQuestionId": "question-7",
    "progress": "54%"
  },
  "question-7": {
    "name": "have_children",
    "title": {
      "en": "Do you have kid(s) with your spouse?",
      "de": "Hast du mit Deinem Partner Kinder?"
    },
    "options": [
      {
        "id": "option-1",
        "title": {
          "en": "Yes",
          "de": "[DE] Yes"
        },
        "value": true
      },
      {
        "id": "option-2",
        "title": {
          "en": "No",
          "de": "[DE] No"
        },
        "value": false
      }
    ],
    "nextQuestionId": {
      "option-1": "question-8",
      "option-2": null
    },
    "progress": "56%"
  },
  "question-8": {
    "name": "children_count",
    "title": {
      "en": "How many kid(s) do you have?",
      "de": "Wieviele Kinder habt ihr?"
    },
    "options": [
      {
        "id": "option-1",
        "title": {
          "en": "1",
          "de": "1"
        },
        "value": 1
      },
      {
        "id": "option-2",
        "title": {
          "en": "2",
          "de": "2"
        },
        "value": 2
      },
      {
        "id": "option-3",
        "title": {
          "en": "3",
          "de": "3"
        },
        "value": 3
      },
      {
        "id": "option-4",
        "type": "custom_number",
        "validation": {
          "max": 10
        },
        "title": {
          "en": "More",
          "de": "[DE] More"
        }
      }
    ],
    "nextQuestionId": "question-9",
    "progress": "72%"
  },
  "question-9": {
    "type": "list",
    "name": "children_ages",
    "title": {
      "en": "How old is he/she?",
      "de": "Wie alt ist er oder sie?"
    },
    "dynamic": {
      "dependency": "children_count",
      "type": "age",
      "title": {
        "en": "Kid",
        "de": "[DE] Kid"
      }
    },
    "nextQuestionId": "question-10",
    "progress": "81%"
  },
  "question-10": {
    "name": "children_parent_type",
    "title": {
      "en": "Are you their..",
      "de": "Bist du ihr... ?"
    },
    "options": [
      {
        "id": "option-1",
        "title": {
          "en": "Father",
          "de": "[DE] Father"
        },
        "value": "father"
      },
      {
        "id": "option-2",
        "title": {
          "en": "Mother",
          "de": "[DE] Mother"
        },
        "value": "mother"
      }
    ],
    "nextQuestionId": "question-11",
    "progress": "90%"
  },
  "question-11": {
    "name": "children_custody",
    "title": {
      "en": "Do you already have an idea, where the kids should live?",
      "de": "Habt ihr schon besprochen, bei wem die Kinder leben sollen?"
    },
    "options": [
      {
        "id": "option-1",
        "title": {
          "en": "Father",
          "de": "[DE] Father"
        },
        "value": "father"
      },
      {
        "id": "option-2",
        "title": {
          "en": "Mother",
          "de": "[DE] Mother"
        },
        "value": "mother"
      },
      {
        "id": "option-3",
        "title": {
          "en": "50/50",
          "de": "[DE] 50/50"
        },
        "value": "50_50"
      }
    ],
    "progress": "100%"
  }
}
```

### Structure

The `root` object represents a map between a list of `uniq ids` and the associated `questionnaire items`.

The `id` of a questionnaire item is also used as the property name for the answers object.

```
{
  processStage: "split_up",
  processAid: "Lawyer",
  personalNetIncome: 2000,
  spouseNetIncome: 2000,
  joinedAssets: 100000,
  joinedAssetsDistribution: {
    realEstate: 40000,
    stocks: 25000,
    car: 55000,
    lifeEnsurance: 10000
  },
  joinedLiabilities: 10000,
  haveChildren: true,
  childrenCount: 3,
  childrenAges: [0, 6, 12],
  childrenParentType: "father",
  childrenCustody: "50_50"
}
```

Please note that the following id's are reserverd and used by the **One Time
Costs** and ** Ongoing Costs Calculator**.

| Id                       | Observations                                                                                      |
| ------------------------ | ------------------------------------------------------------------------------------------------- |
| processStage             | Accepted options value: `marriage_crisis` , `split_up` , `getting_divorced` and `being_divorced`. |
| personalNetIncome        | Required an option of `currency` type.                                                            |
| spouseNetIncome          | Required an option of `currency` type.                                                            |
| joinedAssets             | Required an option of `currency` type.                                                            |
| joinedAssetsDistribution | Questinnaire item of type `composed`. Required options of `currency` type.                        |
| joinedLiabilities        | Required an option of `currency` type.                                                            |
| childrenCount            | Requires an option that can be converted into a number.                                           |
| childrenAges             | Questinnaire item of type `list`. Required options of `age` type.                                 |
| childrenParentType       | n/a                                                                                               |
| childrenCustody          | n/a                                                                                               |

A `questionnaire item` is composed from:

| Field                 | Value                                  | Optional                            | Default value | Discussion                                                                                                                                                                                                                    |
| --------------------- | -------------------------------------- | ----------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`               | object                                 | no                                  | n/a           | It is displayed in the buttons, placeholders and/or input labels. It is an object that has two localisation keys: `en` and `de`.                                                                                              |
| `required`            | `bool`                                 | yes                                 | `true`        | The user must answer to this questionnaire item in order to be able to continue.                                                                                                                                              |
| `showLabels`          | `bool`                                 | yes                                 | `false`       | Show the `title` property as label for the user input options.                                                                                                                                                                |
| `dynamic`             | object of type `Dynamic`               | yes                                 | n/a           | It indicates that the options will be generated dynamically based on the answer of the questionnaire id specified in the `dependency` field.                                                                                  |
| `options`             | `[Option]`                             | yes (if the `dynamic` field is set) | --            | An array of options. --                                                                                                                                                                                                       |
| `initialOptionsCount` | `number`                               | yes                                 | n/a           | The number of options to be listed before displaying a show all button. Omit this field if you want to show all the options by default.                                                                                       |
| `nextQuestionId`      | `string` or `object`                   | yes                                 | n/a           | Points to the `id` of an item in the `root` object. It is used for the questionnaire navigation. Omit this field in the last questionnair item. If you want to branch, use an object that links an option id with an item id. |
| `progress`            | `string` value between `0%` and `100%` | no                                  | n/a           | It represents the progress the user has made in the questionnair. Last item in the questionnaire should always have it set to `100%`.                                                                                         |

A `Option` proprty is composed from:

| Field   | Value    | Optional | Default value | Discussion                                                                                 |
| ------- | -------- | -------- | ------------- | ------------------------------------------------------------------------------------------ |
| `id`    | `string` | no       | n/a           | A uniq id in the questionnaire item scope.                                                 |
| `type`  | `string` | yes      | n/a           | What type of input should be generated: `currency`, `age`, `custom_text`, `custom_number`. |
| `title` | `object` | no       | n/a           | It is an object that has two localisation keys: `en` and `de`.                             |

A `Dynamic` proprty is composed from:

| Field        | Value    | Optional | Default value | Discussion                                                                                 |
| ------------ | -------- | -------- | ------------- | ------------------------------------------------------------------------------------------ |
| `dependency` | `string` | no       | n/a           | A reference to a previous questionnaire item that has a number as value.                   |
| `type`       | `string` | yes      | n/a           | What type of input should be generated: `currency`, `age`, `custom_text`, `custom_number`. |
| `title`      | `object` | no       | n/a           | It is an object that has two localisation keys: `en` and `de`.                             |

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
