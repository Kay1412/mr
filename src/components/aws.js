import React from 'react'

import PropTypes from 'prop-types'

import './aws.css'

const Aws = (props) => {
  return (
    <div className={`aws-you-tube ${props.rootClassName} `}>
      <img
        alt={props.image_alt1}
        src={props.image_src1}
        className="aws-image"
      />
    </div>
  )
}

Aws.defaultProps = {
  pastedImage_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/39622a11-b838-43d2-9bdc-3ba79420cf0d/128f45a2-cd39-4279-86c4-c1790c4a9f30?org_if_sml=15208',
  image_src: 'd510a1d5-683a-456b-acd0-31732ff5551b',
  image_alt1: 'image',
  image_alt: 'image',
  image_src1: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  rootClassName: '',
  pastedImage_alt: 'pastedImage',
}

Aws.propTypes = {
  pastedImage_src: PropTypes.string,
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  pastedImage_alt: PropTypes.string,
}

export default Aws
