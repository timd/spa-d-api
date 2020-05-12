import { circleIconBrand, circleIconSecondary, circleIconTertiary } from '../assets'

/* eslint-disable camelcase */
export const recommendations = {
  marriage_crisis: [
    {
      id: 'advice',
      title: 'Professional Advice',
      description: {
        en: 'Seek marriage counseling now. Ideally together with your partner.',
        de: 'Suche jetzt eine Eheberatung auf. Am besten gemeinsam mit Deinem Partner / Deiner Partnerin.',
      },
      imgSrc: circleIconTertiary,
      anchor: {
        URL: 'http://paartherapie.de/',
        label: {
          de: 'Hier kannst Du nach einem Ansprechpartner suchen',
          en: '[EN] Hier kannst du nach einem Ansprechpartner suchen',
        },
      },
    },
    {
      id: 'goals',
      title: 'Specific Goals',
      description: {
        en: 'Set common goals and consider how you could still save your marriage.',
        de: 'Setzt Euch gemeinsame Ziele und überlegt, wie Ihr Eure Ehe noch retten könntet.',
      },
      imgSrc: circleIconSecondary,
    },
    {
      id: 'conclusion',
      title: 'Honest conclusion & legal advice',
      description: {
        en: "If you don't see a future your marriage, get a lawyer to explain the consequences",
        de: 'Solltest Du keine Zukunft in Deiner Ehe sehen, lass Dich von einem Anwalt über die Folgen aufklären',
      },
      imgSrc: circleIconBrand,
      imgColor: 'brand',
      anchor: {
        URL: 'https://www.anwalt24.de/',
        label: {
          de: 'Hier kannnst Du nach einem Anwalt suchen',
          en: '[EN] Hier kannnst du nach einem Anwalt suchen',
        },
      },
    },
  ],
  split_up: [
    {
      id: 'legal-advice',
      title: 'Legal Advice',
      description: {
        en: 'Get a lawyer to explain the consequences and detailed steps as quickly as possible.',
        de: 'Lass Dich schnellstmöglich von einem Anwalt über die Folgen und detaillierte Schritte aufklären.',
      },
      imgSrc: circleIconTertiary,
      anchor: {
        URL: 'https://www.anwalt24.de/',
        label: {
          de: 'Hier kannnst Du nach einem Anwalt suchen',
          en: '[EN] Hier kannnst du nach einem Anwalt suchen',
        },
      },
    },
    {
      id: 'separation',
      title: 'Separation Year',
      description: {
        en:
          'Before a divorce can be filed, you have to live separately from your partner for 1 year. This is the so-called separation year.',
        de:
          'Bevor eine Scheidung eingereicht werden kann, musst Du 1 Jahr von Deinem Partner / Deiner Partner getrennt leben. Hier handelt es sich um das sogenannte Trennungsjahr.',
      },
      imgSrc: circleIconSecondary,
    },
    {
      id: 'preparation',
      title: 'Preparing for Divorce',
      description: {
        en:
          'It is advisable to search for some documents early. These include the marriage certificate but also other documents for pension benefits or child support.',
        de:
          'Es empfiehlt es sich, einige Dokumente frühzeitig zu suchen. Dazu gehören u.a. die Heiratsurkunde, aber auch weitere Dokumente zum Versorgungsausgleich oder Kindesunterhalt.',
      },
      imgSrc: circleIconBrand,
      imgColor: 'brand',
    },
  ],
  getting_divorced: [
    {
      id: 'filing',
      title: 'Filing for Divorce',
      description: {
        en:
          'When the separation year is over and you have all the documents together, the divorce can be filed through a lawyer.',
        de:
          'Ist das Trennungsjahr vorbei und hast Du alle Dokument beisammen, kann die Scheidung über einen Anwalt eingereicht werden.',
      },
      imgSrc: circleIconTertiary,
      anchor: {
        URL: 'https://www.anwalt24.de/',
        label: {
          de: 'Hier kannnst Du nach einem Anwalt suchen',
          en: '[EN] Hier kannnst du nach einem Anwalt suchen',
        },
      },
    },
    {
      id: 'date',
      title: 'Divorce Date',
      description: {
        en:
          'Once the court costs (see above) have been paid, the court appointment is scheduled and the court appointment takes place.',
        de:
          'Sind die Gerichtskosten (siehe oben) beglichen, wird der Gerichtstermin angesetzt und der Scheidungstermin findet statt.',
      },
      imgSrc: circleIconSecondary,
    },
    {
      id: 'decree',
      title: 'Divorce Decree',
      description: {
        en: 'After a 6-week period, the divorce decision will be served and you will be legally divorced.',
        de:
          'Nach Ablauf einer 6-wöchigen Frist wird der Scheidungsbeschluss zugestellt und Du bist rechtskräftig geschieden.',
      },
      imgSrc: circleIconBrand,
      imgColor: 'brand',
    },
  ],
  being_divorced: [
    {
      id: 'insurance',
      title: 'Insurance',
      description: {
        en: 'Check whether you need new insurance (e.g. liability and household insurance).',
        de: 'Prüfe ob Du neue Versicherungen (z.B. Haftpflicht- und Hausratversicherung) brauchst.',
      },
      imgSrc: circleIconTertiary,
      anchor: {
        URL: 'https://www.finanztip.de/sinnvolle-versicherungen/',
        label: {
          de: 'Schaue hier nach möglichen sinnvollen Versicherungen',
          en: '[EN] ​Schaue hier nach möglichen sinnvollen Versicherungen',
        },
      },
    },
    {
      id: 'finances',
      title: 'Finances',
      description: {
        en:
          'Do you use investment forms and investments? Then check if you need to adjust your savings allowance. With life insurance you should check the beneficiaries and adjust if necessary.',
        de:
          'Nutzt Du Anlageformen und Investments? Dann prüfe ob Du Deinen Sparerfreibetrag anpassen musst. Bei Lebensversicherungen solltest Du die Begünstigten überprüfen und gegebenenfalls anpassen.',
      },
      imgSrc: circleIconSecondary,
    },
    {
      id: 'collect-info',
      title: 'Tax Office & Employer',
      description: {
        en:
          'Inform your tax office and employer about the divorce, as the divorce may have an impact on your tax assessment.',
        de:
          'Informiere Dein Finanzamt und Arbeitgeber über die Scheidung, da die Scheidung gegebenenfalls Auswirkungen auf Deine steuerliche Veranlagung haben kann.',
      },
      imgSrc: circleIconBrand,
      imgColor: 'brand',
    },
  ],
}
