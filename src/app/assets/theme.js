import { hexToRgbA } from '@kogaio/assets/helpers'
import { kogaioTheme } from '@kogaio/assets/theme'
const { borders, colors, fontSizes, fontWeights, radii, shadows, space } = kogaioTheme

const PRIMARY_COLORS = {
  active: '#79B738',
  black: '#000000',
  brand: '#363DA0',
  'brand-hover': '#292F7A',
  'dark-grey': '#3C3C3C',
  'feature-bg': '#E1F2F2',
  'brand-secondary': '#93E7ED',
  'brand-tertiary': '#F4B2A7',
  error: '#D00000',
  gunmetal: '#232735',
  'input-bg': '#F3F6F9',
  'skeleton-bg': '#eeeeee',
  'template-card-bg': '#FEFEFE',
  'file-card-bg': '#EFECEF',
  'template-name': '#121232',
  'confirmation-message': '#5D637A',
  success: '#58a87b',
  transparent: 'transparent',
  white: '#FFFFFF',
}

const COLOR_DERIVATIONS = {
  brand07: hexToRgbA(PRIMARY_COLORS.brand, 0.07),
  brand15: hexToRgbA(PRIMARY_COLORS.brand, 0.15),
  brand25: hexToRgbA(PRIMARY_COLORS.brand, 0.25),
  brand35: hexToRgbA(PRIMARY_COLORS.brand, 0.35),
  brand50: hexToRgbA(PRIMARY_COLORS.brand, 0.5),
  'brand-secondary-disabled': hexToRgbA(PRIMARY_COLORS['brand-secondary'], 0.2),
  'brand-secondary-hover': hexToRgbA(PRIMARY_COLORS['brand-secondary'], 0.7),
  'brand-tertiary25': hexToRgbA(PRIMARY_COLORS['brand-tertiary'], 0.25),
  error03: hexToRgbA(PRIMARY_COLORS.error, 0.03),
  'dark-grey40': hexToRgbA(PRIMARY_COLORS['dark-grey'], 0.4),
  'dark-grey60': hexToRgbA(PRIMARY_COLORS['dark-grey'], 0.6),
  'modal-white70': hexToRgbA(PRIMARY_COLORS.white, 0.7),
  'modal-white90': hexToRgbA(PRIMARY_COLORS.white, 0.9),
  'brand07-opaque': '#f1f0f3', // '#f0eff2'
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

const ANCHOR = {
  color: COLORS['brand-secondary'],
  'font-family': FONTS.primary,
  '.anchor-bold': {
    'font-family': FONTS.complementary,
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
    'background-color': COLORS['input-bg'],
    border: `${borders[1]} transparent`,
    '::placeholder': {
      color: COLORS.placeholder,
    },
    'border-radius': `${radii[2]}px`,
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
    'background-color': COLORS['input-bg'],
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
  tagInput: {
    'background-color': COLORS['input-bg'],
    border: 'none',
    color: COLORS.gunmetal,
    'min-height': 'fit-content',
    '::placeholder': {
      colors: COLORS.placeholder,
    },
  },
  white: {
    'background-color': COLORS.white,
    border: `${borders[1]} ${COLORS.brand15}`,
    'border-radius': `${radii[4]}px`,
  },
}

const LANDING_CONTAINER = {
  'max-width': 1080,
}

const TAG_INPUT = {
  border: `${borders[1]} transparent`,
  'background-color': COLORS['input-bg'],
  'border-radius': `${radii[2]}px`,
  'min-height': '40px',
  padding: `0 ${space[1]}px`,
  ':hover, :focus-within': {
    border: `${borders[1]} ${COLORS['brand-secondary']}`,
  },
  tag: {
    'margin-top': `${space[2]}px`,
    'margin-right': `${space[1]}px`,
  },
}

const TEXTAREA = {
  'background-color': COLORS['input-bg'],
  border: `${borders[1]} transparent`,
  'border-radius': `${radii[2]}px`,
  color: COLORS.gunmetal,
  'font-family': FONTS.primary,
  'font-size': fontSizes[1],
  'line-height': '24px',
  resize: 'none',
  '::placeholder': {
    color: COLORS.placeholder,
    'font-family': FONTS.primary,
  },
  ':focus, :hover': {
    border: `${borders[1]} ${COLORS['brand-secondary']}`,
  },
}

const TEXTAREA_VARIANTS = {
  default: TEXTAREA,
  error: {
    ...TEXTAREA,
    'background-color': COLORS.error03,
    border: `${borders[1]} ${COLORS.error}`,
    ':focus, :hover': {
      border: `${borders[1]} ${COLORS.error}`,
    },
  },
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
}

const theme = Object.seal({
  Anchor: ANCHOR,
  buttons: BUTTON_VARIANTS,
  cards: CARD_VARIANTS,
  colors: COLORS,
  fonts: FONTS,
  fontWeights: FONT_WEIGHTS,
  LandingContainer: LANDING_CONTAINER,
  inputs: INPUT_VARIANTS,
  TagInput: TAG_INPUT,
  TextArea: TEXTAREA,
  textareas: TEXTAREA_VARIANTS,
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
