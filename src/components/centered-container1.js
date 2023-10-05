import React from 'react'

import PropTypes from 'prop-types'

import './centered-container1.css'

const CenteredContainer1 = (props) => {
  return (
    <div
      className={`centered-container1-centered-container ${props.rootClassName} `}
    >
      <div className="centered-container1-heading">
        <span className="centered-container1-text sub-title">{props.text}</span>
        <span className="centered-container1-text1 title">{props.text1}</span>
      </div>
      <div className="centered-container1-pills-container">
        <div className="centered-container1-pills">
          <div className="centered-container1-container">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="centered-container1-image"
            />
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="centered-container1-image1"
            />
            <img
              alt={props.image_alt2}
              src={props.image_src2}
              className="centered-container1-image2"
            />
          </div>
          <div className="centered-container1-container1">
            <img
              alt={props.image_alt3}
              src={props.image_src3}
              className="centered-container1-image3"
            />
            <img
              alt={props.image_alt4}
              src={props.image_src4}
              className="centered-container1-image4"
            />
            <img
              alt={props.image_alt5}
              src={props.image_src5}
              className="centered-container1-image5"
            />
            <img
              alt={props.image_alt6}
              src={props.image_src6}
              className="centered-container1-image6"
            />
          </div>
        </div>
        <span className="centered-container1-text2 title">{props.text2}</span>
      </div>
    </div>
  )
}

CenteredContainer1.defaultProps = {
  rootClassName: '',
  image_src2: '/integ/l1-1-copy-_2_-200h.webp',
  image_alt2: 'image',
  image_alt6: 'image',
  image_src3: '/integ/l2-200h.webp',
  text1:
    'ReplyMaster integrates with all the major CRMs, email automation tools, and Email providers',
  image_alt: 'image',
  text2: 'Contact us for more customization options',
  image_src5: '/integ/l2-copy-_2_-200h.webp',
  image_alt3: 'image',
  image_src6: '/integ/l2-copy-_3_-200h.webp',
  image_alt5: 'image',
  image_alt4: 'image',
  text: 'Integrations',
  image_src4: '/integ/l2-copy-200h.webp',
  image_src: '/integ/l1-1-200h.webp',
  image_alt1: 'image',
  image_src1: '/integ/l1-1-copy-200h.webp',
}

CenteredContainer1.propTypes = {
  rootClassName: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt6: PropTypes.string,
  image_src3: PropTypes.string,
  text1: PropTypes.string,
  image_alt: PropTypes.string,
  text2: PropTypes.string,
  image_src5: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src6: PropTypes.string,
  image_alt5: PropTypes.string,
  image_alt4: PropTypes.string,
  text: PropTypes.string,
  image_src4: PropTypes.string,
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
}

export default CenteredContainer1
