import React from 'react'
import styled from 'styled-components'
import { Flex, Space } from '@kogaio'

const HEADER_HEIGHT_MD = 60

const QuestionnaireQuestions = () => (
  <Space mx={{ xs: 2, md: -4 }} mt='1px'>
    <Wrapper justifyContent='center' bg={{ xs: 'white', md: 'questionnaireBg' }} height={{ md: `calc(100vh - ${HEADER_HEIGHT_MD}px)` }}>
      <Space mx={{ md: 4 }} mt={{ md: 10 }} pb={{ md: 10 }} pt={{ md: 14 }} px={{ md: 24 }}>
        <Container
          bg='white'
          borderColor='headerShadow'
          borderWidth={{ xs: 0, md: 1 }}
          borderStyle='solid'
          borderRadius={4}
          flexDirection='column'
          height='fit-content'
          width={1}
          maxWidth={{md: '950px'}}>
          Content
        </Container>
      </Space>
    </Wrapper>
  </Space>
)

const Wrapper = styled(Flex)``

const Container = styled(Flex)``

export default QuestionnaireQuestions
