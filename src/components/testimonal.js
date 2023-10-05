import React from 'react'

import PropTypes from 'prop-types'

import './testimonal.css'

const Testimonal = (props) => {
  return (
    <div className="testimonal-testimonal testimonal">
      <span className="testimonal-text">{props.Quote}</span>
      <div className="testimonal-author">
        <div className="testimonal-avatar"></div>
        <div className="testimonal-user">
          <span className="testimonal-name">{props.Name}</span>
          <span className="testimonal-divider">—</span>
          <span className="testimonal-from">{props.From}</span>
        </div>
      </div>
    </div>
  )
}

Testimonal.defaultProps = {
  From: 'GnW Pictures',
  Name: 'Theo Erneus',
  Quote:
    '"As a small business owner, I handle all my own email marketing campaigns in addition to everything else. Once my list grew to a few thousand contacts, managing sequences and follow ups manually became impossible. It saves me 1 - 2 hours everyday. They said the backend computation costs a little, turns out it is just $3. Haha"',
}

Testimonal.propTypes = {
  From: PropTypes.string,
  Name: PropTypes.string,
  Quote: PropTypes.string,
}

export default Testimonal
