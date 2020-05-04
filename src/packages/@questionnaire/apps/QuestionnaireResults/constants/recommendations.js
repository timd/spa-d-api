import { circleIconBrand, circleIconSecondary, circleIconTertiary } from '../assets'

/* eslint-disable camelcase */
export const recommendations = {
  marriage_crisis: [
    {
      id: 'advice',
      title: 'Professional Advice',
      description: 'Seek marriage counseling now. Ideally together with your partner.',
      imgSrc: circleIconTertiary,
      anchor: {
        URL: 'http://paartherapie.de/',
        label: '[EN] Hier kannst du nach einem Ansprechpartner suchen'
      }
    },
    {
      id: 'goals',
      title: 'Specific Goals',
      description: 'Set common goals and consider how you could still save your marriage.',
      imgSrc: circleIconSecondary,
    },
    {
      id: 'conclusion',
      title: 'Honest conclusion & legal advice',
      description: "If you don't see a future in marriage, get a lawyer to explain the consequences",
      imgSrc: circleIconBrand,
      imgColor: 'brand',
      anchor: {
        URL: 'https://www.anwalt24.de/',
        label: '[EN] Hier kannnst du nach einem Anwalt suchen'
      }
    },
  ],
  split_up: [
    {
      id: 'legal-advice',
      title: 'Legal Advice',
      description: 'Get a lawyer to explain the consequences and detailed steps as quickly as possible.',
      imgSrc: circleIconTertiary,
      anchor: {
        URL: 'https://www.anwalt24.de/',
        label: '[EN] Hier kannnst du nach einem Anwalt suchen'
      }
    },
    {
      id: 'separation',
      title: 'Separation Year',
      description: 'Before a divorce can be filed, you have to live separately from your partner for 1 year. This is the so-called separation year.',
      imgSrc: circleIconSecondary,
    },
    {
      id: 'preparation',
      title: 'Preparing for Divorce',
      description: 'It is advisable to search for some documents early. These include the marriage certificate but also other documents for pension benefits or child support.',
      imgSrc: circleIconBrand,
      imgColor: 'brand',
    },
  ],
  getting_divorced: [
    {
      id: 'filing',
      title: 'Filing for Divorce',
      description: 'When the separation year is over and you have all the documents together, the divorce can be filed through a lawyer.',
      imgSrc: circleIconTertiary,
      anchor: {
        URL: 'https://www.anwalt24.de/',
        label: '[EN] Hier kannnst du nach einem Anwalt suchen'
      }
    },
    {
      id: 'date',
      title: 'Divorce Date',
      description: 'Once the court costs (see above) have been paid, the court appointment is scheduled and the court appointment takes place.',
      imgSrc: circleIconSecondary,
    },
    {
      id: 'decree',
      title: 'Divorce Decree',
      description: 'After a 6-week period, the divorce decision will be served and you will be legally divorced.',
      imgSrc: circleIconBrand,
      imgColor: 'brand',
    },
  ],
  being_divorced: [
    {
      id: 'insurance',
      title: 'Insurance',
      description: 'Check whether you need new insurance (e.g. liability and household insurance).',
      imgSrc: circleIconTertiary,
      anchor: {
        URL: 'https://www.finanztip.de/sinnvolle-versicherungen/',
        label: '[EN] ​Schaue hier nach möglichen sinnvollen Versicherungen'
      }
    },
    {
      id: 'finances',
      title: 'Finances',
      description: 'Do you use investment forms and investments? Then check if you need to adjust your savings allowance. With life insurance you should check the beneficiaries and adjust if necessary.',
      imgSrc: circleIconSecondary,
    },
    {
      id: 'collect-info',
      title: 'Tax Office & Employer',
      description: 'Inform your tax office and employer about the divorce, as the divorce may have an impact on your tax assessment.',
      imgSrc: circleIconBrand,
      imgColor: 'brand',
    },
  ],
}
