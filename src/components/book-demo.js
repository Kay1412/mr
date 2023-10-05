import React from 'react'

import PropTypes from 'prop-types'

import './book-demo.css'

const BookDemo = (props) => {
  return (
    <div className={`book-demo-get-started ${props.rootClassName} `}>
      <a
        href={props.link_Book_Demo_link}
        target="_blank"
        rel="noreferrer noopener"
        className="book-demo-book-demo-link"
      >
        {props.Book_Demo_link}
      </a>
    </div>
  )
}

BookDemo.defaultProps = {
  rootClassName: '',
  Book_Demo_link: 'Schedule A Demo',
  link_Book_Demo_link: 'https://calendly.com/hello-blc/discovery-call',
}

BookDemo.propTypes = {
  rootClassName: PropTypes.string,
  Book_Demo_link: PropTypes.string,
  link_Book_Demo_link: PropTypes.string,
}

export default BookDemo
