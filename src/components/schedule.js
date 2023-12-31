import React from 'react'

import PropTypes from 'prop-types'

import './schedule.css'

const Schedule = (props) => {
  return (
    <div className={`schedule-schedule card ${props.rootClassName} `}>
      <img
        alt={props.Icon_alt}
        src={props.Icon_src}
        className="schedule-icon"
      />
      <span className="schedule-text">{props.text}</span>
      <span className="schedule-text1">{props.text1}</span>
      <div className="">Placeholder for widget timer</div>
    </div>
  )
}

Schedule.defaultProps = {
  rootClassName: '',
  text: 'Schedule',
  Icon_src: '/pastedimage-fii6m-200h.png',
  Icon_alt: 'pastedImage',
  text1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
}

Schedule.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  Icon_src: PropTypes.string,
  Icon_alt: PropTypes.string,
  text1: PropTypes.string,
}

export default Schedule
