import React from 'react'
import PropTypes from 'prop-types'
import { Space, Typography } from '@kogaio'

const SectionDescription = ({ boldedText, color, firstRowPrefix, firstRowSuffix, bottomText, ...props }) => (
  <Space mx='auto' px={{ xs: 3, md: 0 }}>
    <Typography
      alignSelf='center'
      color={color}
      display='flex'
      justifyContent='center'
      variant='body'
      width='fit-content'
      {...props}>
      {firstRowPrefix}
      <Typography color={color} fontWeight='bold' height='fit-content' width='fit-content'>
        &nbsp;{boldedText}&nbsp;
      </Typography>
      {firstRowSuffix}
    </Typography>
    <Typography color={color} variant='body' textAlign='center'>
      {bottomText}
    </Typography>
  </Space>
)

SectionDescription.propTypes = {
  bottomText: PropTypes.string,
  boldedText: PropTypes.string,
  color: PropTypes.string,
  firstRowPrefix: PropTypes.string,
  firstRowSuffix: PropTypes.string,
}

export default SectionDescription
