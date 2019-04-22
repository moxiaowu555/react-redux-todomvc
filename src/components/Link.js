import React from 'react'
import classnames from 'classnames'

const Link = ({ children, active, setFilter }) => (
  <a
    className={classnames({
      selected: active
    })}
    onClick={ setFilter }
    href="#/">
    { children }
  </a>
)

export default Link