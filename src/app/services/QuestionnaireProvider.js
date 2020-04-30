import React, { useState, createContext } from 'react'
import PropTypes from 'prop-types'

export const QuestionnaireContext = createContext()

class QuestionnaireProgressStorage {
  constructor () {
    this._head = null
    this._current = null
    this._tail = null
  }

  clear = () => {
    this._head = null
    this._current = null
    this._tail = null
  }

  append = data => {
    let node = {
      data,
      next: null,
      previous: null,
    }

    if (!this._head) {
      this._head = node
      this._current = this._head
      this._tail = this._head
    } else {
      this._tail.next = node
      node.previous = this._tail
      this._current = node
      this._tail = node
    }
  }

  branch = data => {
    let node = {
      data,
      next: null,
      previous: null,
    }

    this._current.next = node
    node.previous = this._current
    this._current = node
    this._tail = node
  }

  cut = () => {
    this._current.next = null
    this._tail = this._current
  }

  values = () => {
    let node = this._head
    let output = []

    while (node) {
      output.push(node.data)
      node = node.next
    }

    return output
  }

  buildAnswers = () =>
    this.values().reduce((accumulator, answer) => {
      if (answer.name) {
        accumulator[answer.name] = answer.value
      }
      return accumulator
    }, {})

  seekTo = node => (this._current = node)
  seekForward = () => this.seekTo(this.next())
  seekBackward = () => this.seekTo(this.previous())

  current = () => this._current
  currentValue = () => this.current()?.data

  next = () => this._current?.next
  nextValue = () => this.next()?.data

  previous = () => this._current?.previous
  previousValue = () => this.previous()?.data
}

const QuestionnaireProvider = ({ children }) => {
  const [questionnaireState, setQuestionnaireState] = useState(new QuestionnaireProgressStorage())

  return (
    <QuestionnaireContext.Provider
      value={{
        questionnaireState,
        setQuestionnaireState,
      }}>
      {children}
    </QuestionnaireContext.Provider>
  )
}

QuestionnaireProvider.propTypes = {
  children: PropTypes.node,
}

export default QuestionnaireProvider
