import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Hide, Icon, Space, Touchable, Typography } from '@kogaio'
import { themeGet } from '@kogaio/utils'

const TouchableWithIcon = ({ icon: iconProps, label, onClick }) => (
  <Touchable effect='opacity' onClick={onClick}>
    <Space py={1} pl={3} pr={2}>
      <Container>
        <Icon {...iconProps} />
        <Hide xs sm>
          <Space ml={2}>
            <Typography color='dark-grey' variant='body'>
              {label}
            </Typography>
          </Space>
        </Hide>
      </Container>
    </Space>
  </Touchable>
)

const Container = styled(Flex)`
  align-items: center;
  border-radius: ${themeGet('radii.4')}px;
  :hover,
  :focus {
    color: ${themeGet('colors.dark-grey')};
    background-color: ${themeGet('colors.touchableBg')};
  }
`

TouchableWithIcon.propTypes = {
  icon: PropTypes.shape({
    color: PropTypes.string,
    name: PropTypes.string,
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

TouchableWithIcon.defaultProps = {
  icon: {
    color: 'dark-grey',
  },
}

export default TouchableWithIcon
