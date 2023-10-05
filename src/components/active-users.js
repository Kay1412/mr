import React from 'react'

import PropTypes from 'prop-types'

import './active-users.css'

const ActiveUsers = (props) => {
  return (
    <div
      className={`active-users-active-users metrics ${props.rootClassName} `}
    >
      <span className="active-users-text">{props.Statistic}</span>
      <span className="active-users-text1">{props.Caption}</span>
    </div>
  )
}

ActiveUsers.defaultProps = {
  rootClassName: '',
  Caption: 'Caption',
  Statistic: 'Description',
}

ActiveUsers.propTypes = {
  rootClassName: PropTypes.string,
  Caption: PropTypes.string,
  Statistic: PropTypes.string,
}

export default ActiveUsers
