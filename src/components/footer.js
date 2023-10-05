import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-right">
      <div className="footer-category">
        <span className="footer-text">{props.text}</span>
        <div className="footer-links">
          <span className="footer-text01">{props.text3}</span>
          <span className="footer-text02">{props.text4}</span>
          <span className="footer-text03">{props.text5}</span>
          <span className="footer-text04">{props.text6}</span>
          <span className="footer-text05">{props.text7}</span>
        </div>
      </div>
      <div className="footer-category1">
        <span className="footer-text06">{props.text1}</span>
        <div className="footer-links1">
          <span className="footer-text07">{props.text8}</span>
          <span className="footer-text08">{props.text9}</span>
          <span className="footer-text09">{props.text10}</span>
          <span className="footer-text10">{props.text11}</span>
          <span className="footer-text11">{props.text12}</span>
          <span className="footer-text12">{props.text13}</span>
        </div>
      </div>
      <div className="footer-category2">
        <span className="footer-text13">{props.text2}</span>
        <div className="footer-links2">
          <span className="footer-text14">{props.text14}</span>
          <span className="footer-text15">{props.text15}</span>
          <span className="footer-text16">{props.text16}</span>
          <span className="footer-text17">{props.text17}</span>
          <span className="footer-text18">{props.text18}</span>
        </div>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  text3: 'Responsive Web Design',
  text14: 'Twitter',
  text18: 'Facebook',
  text12: 'Careers',
  text15: 'Linkedin',
  text13: 'Press & Media',
  text17: 'Instagram',
  text4: 'Responsive Prototypesv',
  text1: 'Company',
  text11: 'Partners',
  text16: 'Crunchbase',
  text10: 'News',
  text7: 'Static Website Generator',
  text: 'Solutions',
  text5: 'Design to Code',
  text2: 'Solutions',
  text6: 'Static Website Builder',
  text9: 'Team',
  text8: 'About',
}

Footer.propTypes = {
  text3: PropTypes.string,
  text14: PropTypes.string,
  text18: PropTypes.string,
  text12: PropTypes.string,
  text15: PropTypes.string,
  text13: PropTypes.string,
  text17: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
  text11: PropTypes.string,
  text16: PropTypes.string,
  text10: PropTypes.string,
  text7: PropTypes.string,
  text: PropTypes.string,
  text5: PropTypes.string,
  text2: PropTypes.string,
  text6: PropTypes.string,
  text9: PropTypes.string,
  text8: PropTypes.string,
}

export default Footer
