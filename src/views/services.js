import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import BookDemo from '../components/book-demo'
import './services.css'

const Services = (props) => {
  return (
    <div className="services-container">
      <Helmet>
        <title>Services - ReplyMaster</title>
        <meta property="og:title" content="Services - ReplyMaster" />
      </Helmet>
      <section className="services-hero">
        <div className="services-menu">
          <div id="mobile-menu" className="services-mobile-navigation">
            <img
              alt="pastedImage"
              src="/pastedimage-no9b-1500h.png"
              className="services-logo"
            />
            <div className="services-links">
              <span className="Link">Solutions</span>
              <span className="Link">How it works</span>
              <span className="Link">Prices</span>
            </div>
            <div id="close-mobile-menu" className="services-close-mobile-menu">
              <svg
                viewBox="0 0 804.5714285714286 1024"
                className="services-icon"
              >
                <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
              </svg>
            </div>
          </div>
          <div className="services-desktop-navigation">
            <nav className="services-centered">
              <div className="services-left">
                <img
                  alt="image"
                  src="/replymaster%20logo-200h.png"
                  className="services-image"
                />
                <div className="services-links1">
                  <span className="services-text03 Link">Solutions</span>
                </div>
              </div>
              <div className="services-right">
                <BookDemo></BookDemo>
                <div id="open-mobile-menu" className="services-burger-menu">
                  <img
                    alt="pastedImage"
                    src="/pastedimage-yxbd.svg"
                    className="services-mobile-menu-button"
                  />
                </div>
              </div>
            </nav>
          </div>
          <div>
            <div className="services-container2">
              <Script
                html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
              ></Script>
            </div>
          </div>
        </div>
        <header className="services-header">
          <h1 className="services-text04">
            Automate your Email Campaign workflow even after sending
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h1>
          <p className="services-text05">
            <span>
              With the power of AI, classify the email replies you receive
              avoiding the need to read them all!
            </span>
            <br></br>
          </p>
          <div className="services-get-started template-button">
            <a
              href="https://calendly.com/hello-blc/discovery-call"
              target="_blank"
              rel="noreferrer noopener"
              className="services-link"
            >
              Schedule A Demo
            </a>
          </div>
        </header>
      </section>
      <section className="services-banners">
        <div className="services-lead-management">
          <div className="services-container3">
            <div className="services-image-container">
              <img
                alt="pastedImage"
                src="/pastedimage-wvmq%201-1200w.png"
                className="services-cards-image"
              />
            </div>
            <div className="services-left1">
              <span className="services-text08 sub-title">Lead Management</span>
              <span className="services-text09 title">
                <span className="services-text10">
                  Classify, create and manage all nurtured leads in one place,
                </span>
                <br></br>
                <span>Automagically!</span>
                <br></br>
              </span>
              <span className="services-text14">
                <span className="services-text15">
                  Automatically create new  lead / contact pages in your CRM
                  when a positive reply is detected. Or just label them in your
                  inbox.
                </span>
                <br></br>
              </span>
              <BookDemo rootClassName="book-demo-root-class-name4"></BookDemo>
            </div>
          </div>
        </div>
        <div className="services-automation-notification">
          <div className="services-container4">
            <div className="services-left2">
              <span className="services-text17 sub-title">
                Workflow Automation &amp; Notification
              </span>
              <h2 className="services-text18 title">
                Never miss anything Important, ever
              </h2>
              <span className="services-text19">
                <span>
                  Assign team members and get notifications when new
                  leads/contacts are created.
                </span>
                <br></br>
              </span>
              <BookDemo rootClassName="book-demo-root-class-name5"></BookDemo>
            </div>
            <div className="services-image-container1">
              <img
                alt="pastedImage"
                src="/83d913a38a75e38d7cef4fea757ed7ed-1200w.png"
                className="services-cards-image1"
              />
            </div>
          </div>
        </div>
        <div className="services-ease-of-use">
          <div className="services-centered-container">
            <div className="services-image-container2">
              <img
                alt="pastedImage"
                src="/test-1200w.png"
                className="services-cards-image2"
              />
            </div>
            <div className="services-right1">
              <span className="services-text22 sub-title">Ease of Use</span>
              <h2 className="services-text23 title">
                Set it up once and forget it!
              </h2>
              <div className="services-category">
                <span className="services-text24">
                  No extra accounts or downloads required. ReplyMaster
                  integrates seamlessly in the background . Clutterfree and
                  truly invisible ensuring automated workflow. 
                </span>
              </div>
              <BookDemo rootClassName="book-demo-root-class-name6"></BookDemo>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
