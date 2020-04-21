import { hexToRgbA } from '@kogaio/assets/helpers'
import { kogaioTheme } from '@kogaio/assets/theme'
const { borders, colors, fontWeights, radii, shadows } = kogaioTheme

const PRIMARY_COLORS = {
  black: '#000000',
  brand: '#363DA0',
  'brand-hover': '#292F7A',
  'dark-grey': '#3C3C3C',
  'brand-secondary': '#93E7ED',
  'brand-tertiary': '#F4B2A7',
  'feature-bg': '#E1F2F2',
  'progress-bg': '#F1F3FB',
  error: '#D00000',
  gunmetal: '#232735',
  transparent: 'transparent',
  white: '#FFFFFF',
  headerShadow: '#D6D7DF',
  touchableBg: '#F1F2FB',
  questionnaireBg: '#F5F5F7',
}

const COLOR_DERIVATIONS = {
  brand15: hexToRgbA(PRIMARY_COLORS.brand, 0.15),
  brand25: hexToRgbA(PRIMARY_COLORS.brand, 0.25),
  brand50: hexToRgbA(PRIMARY_COLORS.brand, 0.5),
  'feature-bg40': hexToRgbA(PRIMARY_COLORS['feature-bg'], 0.4),
  'brand-secondary-disabled': hexToRgbA(PRIMARY_COLORS['brand-secondary'], 0.2),
  'brand-secondary-hover': hexToRgbA(PRIMARY_COLORS['brand-secondary'], 0.7),
  'brand-tertiary25': hexToRgbA(PRIMARY_COLORS['brand-tertiary'], 0.25),
  error03: hexToRgbA(PRIMARY_COLORS.error, 0.03),
  'dark-grey40': hexToRgbA(PRIMARY_COLORS['dark-grey'], 0.4),
  'dark-grey60': hexToRgbA(PRIMARY_COLORS['dark-grey'], 0.6),
}

const COLORS = {
  ...PRIMARY_COLORS,
  ...COLOR_DERIVATIONS,
  'background-01': '#F8FAFD',
  'border-metadata': '#F0F1F3',
  'dark-blue': '#5380C0',
  'editor-toolbar-bg': '#F8FAFD',
  'modal-border': '#eee',
  orange: '#F9B60A',
  placeholder: COLOR_DERIVATIONS.brand50,
  'policy-chip': '#61bfce',
  'progress-bar-bg': '#664FB7',
  'shadow-gray': '#e3eaef',
  'xls-bg': '#33AB77',
}

const FONTS = {
  primary: 'PT Serif, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, sans-serif',
  complementary: 'Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, sans-serif',
}

const FONT_WEIGHTS = {
  medium: 500,
}

const BUTTON_VARIANTS = {
  primary: {
    'border-radius': `${radii[4]}px`,
    'font-family': FONTS.complementary,
    height: '40px',
    'min-width': '140px',
    'max-width': '311px',
    'white-space': 'nowrap',
    width: 'fit-content',
    ':disabled': {
      ':hover': {
        'background-color': colors['brand-disabled'],
      },
    },
  },
  secondary: {
    'background-color': COLORS['brand-secondary'],
    'border-radius': `${radii[4]}px`,
    'font-family': FONTS.complementary,
    height: '40px',
    'min-width': '140px',
    'max-width': '311px',
    'white-space': 'nowrap',
    width: 'fit-content',
    ':hover': {
      'background-color': COLORS['brand-secondary-hover'],
    },
    ':disabled': {
      ':hover': {
        'background-color': COLOR_DERIVATIONS['brand-secondary-disabled'],
      },
    },
  },
  outline: {
    'border-radius': `${radii[4]}px`,
    border: `${borders[1]} ${COLORS.brand}`,
    'font-family': FONTS.complementary,
    height: '40px',
    'min-width': '140px',
    'max-width': '311px',
    'white-space': 'nowrap',
    width: 'fit-content',
    ':hover': {
      border: `${borders[1]} ${COLORS.brand50}`,
      color: COLORS.brand50,
      img: {
        opacity: 0.5,
      },
    },
    ':disabled': {
      border: `${borders[1]} ${COLORS.brand15}`,
      color: COLORS.brand50,
      ':hover': {
        'border-color': COLORS.brand15,
      },
    },
  },
}

const CARD_VARIANTS = {
  white: {
    'border-radius': `${radii[4]}px`,
  },
}

const INPUT_VARIANTS = {
  default: {
    'background-color': COLORS.white,
    border: `${borders[1]} transparent`,
    '::placeholder': {
      color: COLORS.placeholder,
    },
    'border-radius': `${radii[4]}px`,
    ':focus, :hover': {
      border: `${borders[1]} ${COLORS['brand-secondary']}`,
    },
    '&[type=number]::-webkit-outer-spin-button, &[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '&[type=number]': {
      '-moz-appearance': 'textfield',
    },
  },
  error: {
    'background-color': COLORS.white,
    border: `${borders[1]} ${COLORS.error}`,
    'box-shadow': shadows['input-basic'],
    color: COLORS.error,
    '::placeholder': {
      color: COLORS.placeholder,
    },
    ':-webkit-autofill': {
      'background-color': COLORS.error03,
      color: COLORS.error,
    },
    '&[type=number]::-webkit-outer-spin-button, &[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '&[type=number]': {
      '-moz-appearance': 'textfield',
    },
  },
  disabled: {
    'background-color': COLORS.white,
    border: 'none',
    'box-shadow': 'none',
    color: COLORS.brand25,
    cursor: 'not-allowed',
    '::placeholder': {
      color: COLORS.placeholder,
    },
    '&[type=number]::-webkit-outer-spin-button, &[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '&[type=number]': {
      '-moz-appearance': 'textfield',
    },
  },
}

const LANDING_CONTAINER = {
  'max-width': 1080,
}

const TYPOGRAPHY_VARIANTS = {
  h1: {
    'font-family': FONTS.primary,
    'font-weight': `${fontWeights.bold}`,
    'font-size': '48px',
    'line-height': '56px',
  },
  h2: {
    'font-family': FONTS.primary,
    'font-weight': `${fontWeights.bold}`,
    'font-size': '32px',
    'line-height': '40px',
  },
  h3: {
    'font-family': FONTS.primary,
    'font-weight': `${fontWeights.bold}`,
    'font-size': '28px',
    'line-height': '32px',
  },
  sh1: {
    'font-family': FONTS.complementary,
    'font-weight': fontWeights.regular,
    'font-size': '24px',
    'line-height': '32px',
  },
  sh2: {
    'font-family': FONTS.complementary,
    'font-weight': `${fontWeights.regular}`,
    'font-size': '22px',
    'line-height': '24px',
  },
  sh3: {
    'font-family': FONTS.complementary,
    'font-weight': `${fontWeights.regular}`,
    'font-size': '18px',
    'line-height': '24px',
  },
  body: {
    'font-family': FONTS.complementary,
    'font-weight': `${fontWeights.regular}`,
    'font-size': '16px',
    'line-height': '24px',
  },
  'super-title': {
    'font-family': FONTS.complementary,
    'font-weight': `${fontWeights.bold}`,
    'font-size': '14px',
    'line-height': '16px',
  },
  caption: {
    'font-family': FONTS.complementary,
    'font-weight': `${fontWeights.regular}`,
    'font-size': '12px',
    'line-height': '16px',
  },
  textLogoDesktop: {
    'font-family': FONTS.primary,
    'font-weight': `${fontWeights.bold}`,
    'font-size': '26px',
    'line-height': '28px',
  },
  textLogoMobile: {
    'font-family': FONTS.primary,
    'font-weight': `${fontWeights.bold}`,
    'font-size': '20px',
    'line-height': '24px',
  },
  questionnaireTitle: {
    color: COLORS['dark-grey'],
    'font-family': FONTS.primary,
    'font-weight': `${fontWeights.bold}`,
    'font-size': '22px',
    'line-height': '32px',
  },
}

const ANCHOR = {
  color: COLORS['brand-secondary'],
  'font-family': FONTS.complementary,
  '&.anchor-bold': {
    'font-weight': `${fontWeights.bold}`,
    ':hover': {
      'font-weight': `${fontWeights.bold}`,
    },
  },
  ':hover': {
    color: COLORS['brand-secondary-hover'],
  },
  ':active': {
    color: COLORS['brand-secondary-hover'],
  },
}

const QUESTIONNAIRE_OPTION = {
  'min-height': '50px',
  'align-items': 'center',
  border: `1px solid ${COLORS['headerShadow']}`,
  'border-radius': `${radii[4]}px`,
  'box-sizing': 'border-box',
  'flex-direction': 'row',
  'font-weight': `${fontWeights.regular}`,
  'justify-content': 'space-between',
  '&, & *': {
    color: COLORS['dark-grey'],
  },
  '&.selected': {
    'background-color': COLORS['touchableBg'],
    '& *': {
      color: COLORS['brand'],
      'font-weight': `${fontWeights.bold}`,
    },
  },
}

const theme = Object.seal({
  Anchor: ANCHOR,
  QuestionnaireOption: QUESTIONNAIRE_OPTION,
  buttons: BUTTON_VARIANTS,
  cards: CARD_VARIANTS,
  colors: COLORS,
  fonts: FONTS,
  fontWeights: FONT_WEIGHTS,
  LandingContainer: LANDING_CONTAINER,
  inputs: INPUT_VARIANTS,
  typography: TYPOGRAPHY_VARIANTS,

  letterSpacings: {
    tight: '-0.02rem',
    tracked: '0.05rem',
  },
  shadows: {
    'card-simple': `0px 1px 4px ${COLORS.black25}`,
    'card-highlight': `0px 3px 6px ${COLORS['shadow-gray']}, 0px 0px 2px ${COLORS.black15}`,
    'text-editor': `0px -3px 6px ${COLORS['shadow-gray']}, 0px 0px 2px ${COLORS.black15}`,
  },
  textStyles: {
    nowrap: {
      'white-space': 'nowrap',
    },
    underline: {
      'text-decoration': 'underline',
    },
    capitalize: {
      'text-transform': 'capitalize',
    },
  },
})

export default theme
