import { hexToRgbA } from '@kogaio/assets/helpers'
import { kogaioTheme } from '@kogaio/assets/theme'
const {
  borders,
  colors,
  fontSizes,
  fontWeights,
  radii,
  shadows,
  space,
  textStyles
} = kogaioTheme

const PRIMARY_COLORS = {
  active: '#79B738',
  black: '#000000',
  brand: '#3B2552',
  'brand-hover': '#4C3068',
  'brand-secondary-hover': '#7E6B92',
  'brand-secondary': '#7AACDE',
  'brand-tertiary': '#9ABFD8',
  'collapsible-bg': '#EFECEF',
  'collapsible-border': '#DDDAE0',
  description: '#a1a4b1',
  error: '#D00000',
  gunmetal: '#232735',
  'label-grey': '#8F859A',
  'input-bg': '#F3F6F9',
  'skeleton-bg': '#eeeeee',
  'template-card-bg': '#FEFEFE',
  'file-card-bg': '#EFECEF',
  'template-name': '#121232',
  'confirmation-message': '#5D637A',
  success: '#58a87b',
  transparent: 'transparent',
  white: '#FFFFFF',
  // NEW IMPLEMENTATION
  brand3: '#EFECEF',
  textTertiary: '#A1A4B1',
  brandPrimary: '#3B2552',
  uiWhite: '#FFFFFF'
}

const COLOR_DERIVATIONS = {
  black15: hexToRgbA(PRIMARY_COLORS.black, 0.15),
  black25: hexToRgbA(PRIMARY_COLORS.black, 0.25),
  brand07: hexToRgbA(PRIMARY_COLORS.brand, 0.07),
  brand15: hexToRgbA(PRIMARY_COLORS.brand, 0.15),
  brand25: hexToRgbA(PRIMARY_COLORS.brand, 0.25),
  brand35: hexToRgbA(PRIMARY_COLORS.brand, 0.35),
  brand50: hexToRgbA(PRIMARY_COLORS.brand, 0.5),
  'brand-secondary35': hexToRgbA(PRIMARY_COLORS['brand-secondary'], 0.35),
  'brand-tertiary25': hexToRgbA(PRIMARY_COLORS['brand-tertiary'], 0.25),
  error03: hexToRgbA(PRIMARY_COLORS.error, 0.03),
  'modal-white70': hexToRgbA(PRIMARY_COLORS.white, 0.7),
  'modal-white90': hexToRgbA(PRIMARY_COLORS.white, 0.9),

  'brand07-opaque': '#f1f0f3' // '#f0eff2'
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
  'xls-bg': '#33AB77'
}

const FONTS = {
  primary:
    'Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, sans-serif',
  complementary:
    'Rubik, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, sans-serif'
}

const FONT_WEIGHTS = {
  medium: 500
}

const ANCHOR = {
  color: COLORS['brand-secondary'],
  'font-family': FONTS.primary,
  '.anchor-bold': {
    'font-family': FONTS.complementary,
    'font-weight': `${fontWeights.bold}`,
    ':hover': {
      'font-weight': `${fontWeights.bold}`
    }
  },
  ':hover': {
    color: COLORS['brand-secondary-hover']
  },
  ':active': {
    color: COLORS['brand-secondary-hover']
  }
}

const BUTTON_VARIANTS = {
  primary: {
    'border-radius': `${radii[2]}px`,
    'font-family': FONTS.complementary,
    height: '40px',
    'min-width': '140px',
    'white-space': 'nowrap',
    width: 'fit-content',
    ':disabled': {
      ':hover': {
        'background-color': colors['brand-disabled']
      }
    }
  },
  outline: {
    'border-radius': `${radii[2]}px`,
    border: `${borders[1]} ${COLORS.brand}`,
    'font-family': FONTS.complementary,
    height: '40px',
    'min-width': '140px',
    'white-space': 'nowrap',
    width: 'fit-content',
    ':hover': {
      border: `${borders[1]} ${COLORS.brand50}`,
      color: COLORS.brand50,
      img: {
        opacity: 0.5
      }
    },
    ':disabled': {
      border: `${borders[1]} ${COLORS.brand15}`,
      color: COLORS.brand50,
      ':hover': {
        'border-color': COLORS.brand15
      }
    }
  }
}

const CARD_VARIANTS = {
  dataroom: {
    'background-color': COLORS.white,
    border: `${borders[1]} ${COLORS.brand07}`,
    'border-radius': `${radii[2]}px`,
    'box-shadow': '0px 2px 2px #D5DEE4'
  },
  light: {
    'background-color': 'rgba(216, 243, 255, 0.1)',
    'border-radius': '0px 2px 2px 0px'
  },
  white: {
    'border-radius': `${radii[2]}px`
  }
}

const DROPDOWN_VARIANTS = {
  brand: {
    'background-color': COLORS.white,
    'min-width': '168px',
    '.dropdown-item': {
      'min-height': '40px',
      ':hover': {
        'background-color': COLORS['input-bg']
      },
      '&.selected': {
        'background-color': COLORS.brand07
      }
    },
    '.dropdown-placeholder': {
      color: COLORS.white,
      'font-weight': `${fontWeights.bold}`,
      'text-transform': 'uppercase'
    },
    '&.dropdown-selected': {
      'background-color': COLORS.brand,
      'border-radius': `${radii[4]}px`,
      border: `${borders[1]} ${COLORS.brand15}`,
      '.dropdown-text:not(.dropdown-chevron)': {
        'font-family': FONTS.complementary,
        'font-size': fontSizes[0],
        'font-weight': `${fontWeights.bold}`,
        'text-transform': 'uppercase'
      },
      '.dropdown-text, .dropdown-chevron': {
        color: COLORS.white
      },
      ':hover': {
        'background-color': COLORS['brand-hover']
      }
    },
    '&.dropdown-active': {
      'border-radius': `${radii[4]}px ${radii[4]}px ${radii.none}px ${radii.none}px`
    }
  },
  default: {
    'background-color': COLORS['input-bg'],
    'min-width': '168px',
    '&.dropdown-placeholder': {
      color: COLORS.placeholder
    },
    '&.dropdown-active': {
      'border-color': COLORS['brand-secondary']
    },
    '&.dropdown-selected': {
      border: `${borders[1]} transparent`,
      ':active, :hover': {
        border: `${borders[1]} ${COLORS['brand-secondary']}`
      }
    },
    '.dropdown-text': {
      color: COLORS.gunmetal
    },
    '.dropdown-item': {
      'min-height': '40px',
      ':hover': {
        'background-color': COLORS.brand07
      },
      ':nth-of-type(n + 2)': {
        'border-top': 'none'
      },
      '&.selected': {
        'background-color': COLORS.brand07
      }
    }
  },
  disabled: {
    'min-width': '168px',
    '&.dropdown-selected': {
      border: `${borders[1]} transparent`,
      ':hover': {
        border: `${borders[1]} transparent`
      }
    },
    '&.dropdown-text': {
      color: COLORS.placeholder
    }
  },
  error: {
    'background-color': COLORS['input-bg'],
    'min-width': '168px',
    '&.dropdown-placeholder': {
      color: COLORS.placeholder
    },
    '&.dropdown-selected': {
      'background-color': COLORS.error03
    }
  },
  white: {
    'background-color': COLORS.white,
    'min-width': '168px',
    '.dropdown-item': {
      'min-height': '40px',
      ':hover': {
        background: COLORS['input-bg']
      }
    },
    '&.dropdown-placeholder': {
      color: COLORS.placeholder
    },
    '&.dropdown-selected': {
      'background-color': COLORS.white,
      'border-radius': `${radii[4]}px`,
      border: `${borders[1]} ${COLORS.brand15}`,
      ':hover': {
        border: `${borders[1]} ${COLORS['brand-secondary']}`
      }
    },
    '&.dropdown-active': {
      'border-radius': `${radii[4]}px ${radii[4]}px ${radii.none}px ${radii.none}px`,
      border: `${borders[1]} ${COLORS['brand-secondary']}`
    }
  }
}

const INPUT_VARIANTS = {
  default: {
    'background-color': COLORS['input-bg'],
    border: `${borders[1]} transparent`,
    '::placeholder': {
      color: COLORS.placeholder
    },
    'border-radius': `${radii[2]}px`,
    ':focus, :hover': {
      border: `${borders[1]} ${COLORS['brand-secondary']}`
    },
    '&[type=number]::-webkit-outer-spin-button, &[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    '&[type=number]': {
      '-moz-appearance': 'textfield'
    }
  },
  error: {
    'background-color': COLORS.error03,
    border: `${borders[1]} ${COLORS.error}`,
    'box-shadow': shadows['input-basic'],
    color: COLORS.error,
    '::placeholder': {
      color: COLORS.placeholder
    },
    ':-webkit-autofill': {
      'background-color': COLORS.error03,
      color: COLORS.error
    },
    '&[type=number]::-webkit-outer-spin-button, &[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    '&[type=number]': {
      '-moz-appearance': 'textfield'
    }
  },
  disabled: {
    'background-color': COLORS['input-bg'],
    border: 'none',
    'box-shadow': 'none',
    color: COLORS.brand25,
    cursor: 'not-allowed',
    '::placeholder': {
      color: COLORS.placeholder
    },
    '&[type=number]::-webkit-outer-spin-button, &[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    '&[type=number]': {
      '-moz-appearance': 'textfield'
    }
  },
  tagInput: {
    'background-color': COLORS['input-bg'],
    border: 'none',
    color: COLORS.gunmetal,
    'min-height': 'fit-content',
    '::placeholder': {
      colors: COLORS.placeholder
    }
  },
  white: {
    'background-color': COLORS.white,
    border: `${borders[1]} ${COLORS.brand15}`,
    'border-radius': `${radii[4]}px`
  }
}

const GRID_CONTAINER = {
  '& > div': {
    ':nth-of-type(3)': {
      'margin-top': `${space[6]}px`,
      'border-bottom': 'none',
      'border-radius': `${radii[4]}px ${radii[4]}px ${radii.none}px ${radii.none}px`
    },
    ':last-of-type': {
      'border-radius': `${radii.none}px ${radii.none}px ${radii[4]}px ${radii[4]}px`
    },
    ':nth-of-type(n + 4):not(:last-of-type)': {
      'border-bottom': 'none'
    }
  }
}

const TAG_INPUT = {
  border: `${borders[1]} transparent`,
  'background-color': COLORS['input-bg'],
  'border-radius': `${radii[2]}px`,
  'min-height': '40px',
  padding: `0 ${space[1]}px`,
  ':hover, :focus-within': {
    border: `${borders[1]} ${COLORS['brand-secondary']}`
  },
  tag: {
    'margin-top': `${space[2]}px`,
    'margin-right': `${space[1]}px`
  }
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
    'font-family': FONTS.primary
  },
  ':focus, :hover': {
    border: `${borders[1]} ${COLORS['brand-secondary']}`
  }
}

const TEXTAREA_VARIANTS = {
  default: TEXTAREA,
  error: {
    ...TEXTAREA,
    'background-color': COLORS.error03,
    border: `${borders[1]} ${COLORS.error}`,
    ':focus, :hover': {
      border: `${borders[1]} ${COLORS.error}`
    }
  }
}

const TOPBAR = {
  border: `${borders[1]} ${COLORS.brand15}`,
  'background-color': COLORS['background-01'],
  height: '64px',
  position: 'sticky',
  top: 0,
  'z-index': '10'
}

const SKELETON = {
  background: COLORS['skeleton-bg'],
  highlight: COLORS['input-bg']
}

const TYPOGRAPHY_VARIANTS = {
  actionBtn: {
    ...textStyles.caps,
    'font-family': FONTS.complementary,
    'font-size': fontSizes[0],
    'font-weight': `${fontWeights.bold}`
  },
  description: {
    color: COLORS.description,
    'font-family': FONTS.primary,
    'font-size': fontSizes[1],
    'line-height': '24px'
  },
  titleLight: {
    color: COLORS.placeholder,
    'font-family': FONTS.complementary,
    'font-size': fontSizes[2],
    'font-weight': `${fontWeights.lighter}`,
    '&.title-light-brand': {
      color: COLORS['progress-bar-bg']
    }
  },
  inputLabel: {
    color: COLORS.gunmetal,
    'font-family': FONTS.primary,
    fontWeight: FONT_WEIGHTS.medium,
    'padding-bottom': `${space[2]}px`
  },
  link: {
    color: COLORS['brand-secondary'],
    'font-weight': `${FONT_WEIGHTS.medium}`
  },
  screenTitle: {
    color: COLORS.brand,
    'font-family': FONTS.complementary,
    'font-size': '18px',
    'font-weight': `${fontWeights.lighter}`
  },
  status: {
    ...textStyles.caps,
    color: COLORS.placeholder,
    'font-size': fontSizes[0]
  },
  subscriptionTitle: {
    color: COLORS.brand,
    'font-family': FONTS.complementary,
    'font-size': fontSizes[1],
    'font-weight': `${fontWeights.bold}`,
    ...textStyles.caps
  },
  searchResult: {
    description: {
      color: COLORS.black,
      'font-family': FONTS.primary,
      'font-size': fontSizes[1],
      'font-weight': `${fontWeights.regular}`,
      'line-height': '24px'
    },
    title: {
      color: COLORS.black,
      'font-family': FONTS.primary,
      'font-size': fontSizes[1],
      'font-weight': `${FONT_WEIGHTS.medium}`
    }
  },
  modalTitle: {
    color: COLORS.black,
    'font-family': FONTS.complementary,
    'font-size': fontSizes[3],
    'font-weight': `${FONT_WEIGHTS.lighter}`
  },
  avatar: {
    small: {
      'font-size': fontSizes[0],
      'font-weight': `${FONT_WEIGHTS.bold}`
    },
    large: {
      'font-size': fontSizes[2],
      'font-weight': `${FONT_WEIGHTS.bold}`
    },
    xLarge: {
      'font-size': fontSizes[5],
      'font-weight': `${FONT_WEIGHTS.bold}`
    }
  },
  subtitle: {
    color: COLORS['confirmation-message'],
    'font-family': FONTS.primary,
    'font-size': fontSizes[1],
    'line-height': '24px'
  }
}

const TABS = {
  'align-items': 'center',
  Link: {
    'align-items': 'center',
    'background-color': COLORS.white,
    border: `${borders[1]} transparent`,
    'border-bottom': `${borders[1]} ${COLORS.brand15}`,
    'border-radius': `${radii[2]}px ${radii[2]}px 0 0`,
    color: COLORS.brand25,
    'font-family': FONTS.complementary,
    'font-size': `${fontSizes[0]}`,
    'font-weight': `${fontWeights.bold}`,
    'justify-content': 'center',
    'margin-bottom': '-1px',
    'min-width': '160px',
    padding: `${space[3]}px`,
    position: 'relative',
    'text-transform': 'uppercase',
    ':first-of-type': {
      'margin-left': `${space[6]}px`
    },
    '&[aria-selected="true"]': {
      border: `${borders[1]} ${COLORS.brand15}`,
      'border-bottom': `${borders[1]} ${COLORS.white}`,
      color: COLORS.brand
    },
    ':hover:not(:disabled)': {
      color: COLORS.brand
    }
  },
  Panel: {
    'border-top': `${borders[1]} ${COLORS.brand15}`
  }
}

const theme = Object.seal({
  Anchor: ANCHOR,
  buttons: BUTTON_VARIANTS,
  cards: CARD_VARIANTS,
  colors: COLORS,
  dropdowns: DROPDOWN_VARIANTS,
  fonts: FONTS,
  fontWeights: FONT_WEIGHTS,
  GridContainer: GRID_CONTAINER,
  inputs: INPUT_VARIANTS,
  Skeleton: SKELETON,
  TagInput: TAG_INPUT,
  TextArea: TEXTAREA,
  textareas: TEXTAREA_VARIANTS,
  TopBar: TOPBAR,
  typography: TYPOGRAPHY_VARIANTS,
  Tabs: TABS,

  letterSpacings: {
    tight: '-0.02rem',
    tracked: '0.05rem'
  },
  shadows: {
    'card-simple': `0px 1px 4px ${COLORS.black25}`,
    'card-highlight': `0px 3px 6px ${COLORS['shadow-gray']}, 0px 0px 2px ${COLORS.black15}`,
    'text-editor': `0px -3px 6px ${COLORS['shadow-gray']}, 0px 0px 2px ${COLORS.black15}`
  },
  textStyles: {
    nowrap: {
      'white-space': 'nowrap'
    },
    underline: {
      'text-decoration': 'underline'
    },
    capitalize: {
      'text-transform': 'capitalize'
    }
  }
})

export default theme
