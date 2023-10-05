import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import BookDemo from '../components/book-demo'
import Testimonal from '../components/testimonal'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>ReplyMaster</title>
        <meta property="og:title" content="ReplyMaster" />
      </Helmet>
      <section className="home-hero">
        <div className="home-menu">
          <div id="mobile-menu" className="home-mobile-navigation">
            <img
              alt="pastedImage"
              src="/pastedimage-no9b-1500h.png"
              className="home-logo"
            />
            <div className="home-links">
              <span className="Link">Solutions</span>
              <span className="Link">How it works</span>
              <span className="Link">Prices</span>
            </div>
            <div id="close-mobile-menu" className="home-close-mobile-menu">
              <svg viewBox="0 0 804.5714285714286 1024" className="home-icon">
                <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
              </svg>
            </div>
          </div>
          <div className="home-desktop-navigation">
            <nav className="home-centered">
              <div className="home-left">
                <img
                  alt="image"
                  src="/replymaster%20logo-200h.png"
                  className="home-image"
                />
              </div>
              <div className="home-right">
                <BookDemo></BookDemo>
                <div id="open-mobile-menu" className="home-burger-menu">
                  <img
                    alt="pastedImage"
                    src="/pastedimage-yxbd.svg"
                    className="home-mobile-menu-button"
                  />
                </div>
              </div>
            </nav>
          </div>
          <div>
            <div className="home-container02">
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
        <header className="home-header">
          <h1 className="home-text03">
            Automate your Email Campaign workflow even after sending
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h1>
          <p className="home-text04">
            <span>
              With the power of AI, classify the email replies you receive
              avoiding the need to read them all!
            </span>
            <br></br>
          </p>
          <div className="home-get-started template-button">
            <a
              href="https://calendly.com/hello-blc/discovery-call"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link"
            >
              Schedule A Demo
            </a>
          </div>
        </header>
      </section>
      <section className="home-statistics">
        <div className="home-container03">
          <span className="home-text07">
            <span className="home-text08">10k+</span>
            <br className="home-text09"></br>
            <span className="home-text10">
              Emails
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text11">Handled / Day</span>
            <br></br>
          </span>
          <span className="home-text13">
            <span className="home-text14">10+</span>
            <br className="home-text15"></br>
            <span className="home-text16"> Accounts</span>
            <span className="home-text17"> Managed</span>
            <br></br>
          </span>
          <span className="home-text19">
            <span className="home-text20">1000+</span>
            <br className="home-text21"></br>
            <span className="home-text22"> Possible Customizations</span>
            <br></br>
          </span>
        </div>
      </section>
      <section className="home-banners">
        <div className="home-lead-management">
          <div className="home-container04">
            <div className="home-image-container">
              <img
                alt="pastedImage"
                src="/pastedimage-wvmq%201-1200w.png"
                className="home-cards-image"
              />
            </div>
            <div className="home-left1">
              <span className="home-text24 sub-title">Lead Management</span>
              <span className="home-text25 title">
                <span className="home-text26">
                  Classify, create and manage all nurtured leads in one place,
                </span>
                <br></br>
                <span>Automagically!</span>
                <br></br>
              </span>
              <span className="home-text30">
                <span className="home-text31">
                  Automatically create new  lead / contact pages in your CRM
                  when a positive reply is detected. Or just label them in your
                  inbox.
                </span>
                <br></br>
              </span>
              <BookDemo rootClassName="book-demo-root-class-name1"></BookDemo>
            </div>
          </div>
        </div>
        <div className="home-automation-notification">
          <div className="home-container05">
            <div className="home-left2">
              <span className="home-text33 sub-title">
                Workflow Automation &amp; Notification
              </span>
              <h2 className="home-text34 title">
                Never miss anything Important, ever
              </h2>
              <span className="home-text35">
                <span>
                  Assign team members and get notifications when new
                  leads/contacts are created.
                </span>
                <br></br>
              </span>
              <BookDemo rootClassName="book-demo-root-class-name2"></BookDemo>
            </div>
            <div className="home-image-container1">
              <img
                alt="pastedImage"
                src="/83d913a38a75e38d7cef4fea757ed7ed-1200w.png"
                className="home-cards-image1"
              />
            </div>
          </div>
        </div>
        <div className="home-ease-of-use">
          <div className="home-centered-container">
            <div className="home-image-container2">
              <img
                alt="pastedImage"
                src="/test-1200w.png"
                className="home-cards-image2"
              />
            </div>
            <div className="home-right1">
              <span className="home-text38 sub-title">Ease of Use</span>
              <h2 className="home-text39 title">
                Set it up once and forget it!
              </h2>
              <div className="home-category">
                <span className="home-text40">
                  No extra accounts or downloads required. ReplyMaster
                  integrates seamlessly in the background . Clutterfree and
                  truly invisible ensuring automated workflow. 
                </span>
              </div>
              <BookDemo rootClassName="book-demo-root-class-name3"></BookDemo>
            </div>
          </div>
        </div>
      </section>
      <section className="home-integrations">
        <div className="home-centered-container1">
          <div className="home-heading">
            <span className="home-text41">Integrations</span>
            <span className="home-text42 title">
              ReplyMaster integrates with all the major CRMs, email automation
              tools, and Email providers
            </span>
          </div>
          <div className="home-pills">
            <div className="home-container06">
              <img
                alt="image"
                src="/integ/l1-1-800h.webp"
                className="home-image1"
              />
              <img
                alt="image"
                src="/integ/l1-1-copy-800h.webp"
                className="home-image2"
              />
              <img
                alt="image"
                src="/integ/l1-1-copy-_2_-800h.webp"
                className="home-image3"
              />
            </div>
            <div className="home-container07">
              <img
                alt="image"
                src="/integ/l2-800h.webp"
                className="home-image4"
              />
              <img
                alt="image"
                src="/integ/l2-copy-800h.webp"
                className="home-image5"
              />
              <img
                alt="image"
                src="/integ/l2-copy-_2_-800h.webp"
                className="home-image6"
              />
              <img
                alt="image"
                src="/integ/l2-copy-_3_-800h.webp"
                className="home-image7"
              />
            </div>
          </div>
          <span className="home-text43 title">
            Contact us for more customization options
          </span>
        </div>
      </section>
      <section className="home-process">
        <div className="home-centered-container2">
          <div className="home-heading1">
            <span className="home-text44 title">
              Our 3 Step Effortless Onboarding for Marketing Automation
            </span>
          </div>
          <div className="home-cards">
            <div className="home-card">
              <span className="home-text45">Step 1</span>
              <span className="home-text46">Initial Custom Configuration</span>
              <span className="home-text47">
                We fully customize ReplyMaster specifically for your unique tech
                stack, workflows and automation needs during initial onboarding.
                Connect your CRM, email platform, and other tools for seamless
                integration. Define your specific automation rules, sequences,
                notifications, and more.
              </span>
            </div>
            <div className="home-card1">
              <span className="home-text48">Step 2</span>
              <span className="home-text49">Tweak It For Each Client</span>
              <span className="home-text50">
                <span>
                  Just like you tailor email content and audiences for each new
                  client, we tweak ReplyMaster to match that client&apos;s
                  specific requirements while retaining your workflows. This
                  intermediary step aligns with the client&apos;s needs and fits
                  your processes.
                </span>
                <br></br>
                <br></br>
                <span>
                  Once set up, you never worry about that client&apos;s campaign
                  again. For the lifetime of your relationship with the client,
                  ReplyMaster keeps working automatically with no added fees.
                </span>
              </span>
            </div>
            <div className="home-card2">
              <span className="home-text55">Step 3</span>
              <span className="home-text56">Forget It. Forget Us.</span>
              <span className="home-text57">
                With ReplyMaster customized for you and each client, you&apos;re
                all set. Our solution runs seamlessly in the background with no
                need for ongoing login or monitoring. No recurring invoices -
                customize once then automate workflows forever per client.
              </span>
            </div>
          </div>
        </div>
        <div className="home-get-started1 template-button">
          <a
            href="https://calendly.com/hello-blc/discovery-call"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link1"
          >
            Talk to Us
          </a>
        </div>
      </section>
      <section className="home-testimonals">
        <div className="home-container08">
          <div className="home-left3">
            <span className="home-text58">Testimonials</span>
            <span className="home-text59 title">
              What people say about ReplyMaster
            </span>
          </div>
          <div className="home-right2">
            <div className="home-column">
              <Testimonal
                Quote='"As a small business owner, I handle all my own email marketing campaigns in addition to everything else. Once my list grew to a few thousand contacts, managing sequences and follow ups manually became impossible. It saves me 1 - 2 hours everyday. They said the backend computation costs a little, turns out it is just $3."'
                Avatar_src="/image552912-e3yq-200h.png"
              ></Testimonal>
            </div>
            <div className="home-column1">
              <Testimonal
                From="DJ Marketing"
                Name="Charlie"
                Quote='"ReplyMaster has become a part of our client onboarding process. The ability to customize automation with our workflows for each client makes our campaigns even more streamlined. The integration was smooth and the ReplyMaster team is very responsive whenever we need support. One of the biggest benefits is how ReplyMaster automatically detects out of office replies and pauses sequences - something our previous automation tool often missed."'
                Avatar_src="/image572912-0d3-200h.png"
              ></Testimonal>
            </div>
          </div>
        </div>
        <span className="home-text60">
          <span>Show more</span>
          <br></br>
        </span>
      </section>
      <div className="home-banner-demo">
        <div className="home-centered-container3">
          <div className="home-container09">
            <span className="home-text63 title">
              <span>Product demo</span>
              <br></br>
            </span>
            <iframe
              src="https://www.youtube.com/embed/Cc-6HWZmgv8?si=aEvm5a9DjQcMAQAp"
              allow="accelerometer, autoplay, mute"
              className="home-iframe"
            ></iframe>
          </div>
        </div>
      </div>
      <section className="home-faq">
        <div className="home-heading2">
          <span className="home-text66 title">Frequently asked questions</span>
        </div>
        <div className="home-accordion">
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header1">
              <span className="home-text67">
                <span>How much does it cost?</span>
                <br></br>
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text70">
                <span>
                  Since it is a fully customizable solution for your tech stack
                  and workflow, we offer customized pricing. Book a call with us
                  to know more
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header2">
              <span className="home-text73">
                Should Only marketing agencies use this?
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text74">
                <span>
                  No, any company that runs their own email automation
                  sequencing internally can also benefit from this. And you
                  actually pay once and use it for lifetime.
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="accordionContainer">
            <div className="home-header3">
              <span className="home-text77">
                Is it really free for lifetime?
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text78">
                <span>
                  Short answer: YES.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Long answer:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  - We don&apos;t charge you anything after we set it up.
                  However, you need to pay for the backend computation to OpenAI
                  and AWS.
                </span>
                <br></br>
                <span>
                  - Since this uses 3rd party integrations, if any of them makes
                  a change to their software, we will make those changes to you
                  for a small fee. 
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="accordionContainer">
            <div className="home-header4">
              <span className="home-text87">
                Does it look out for Keyword and sort?
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text88">
                <span>
                  - ReplyMaster understands the sementic meaning of the email to
                  understand what is written to make a decision. We leave the
                  keyword search for WindowsXP users. 
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header5">
              <span className="home-text91">
                But we&apos;re doing fine without it right now as we are
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text92">
                - People thought they were doing fine before the Internet.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="home-container11">
            <Script
              html={`<script>
// Accordion - Code Embed

const accordionContainers = document.querySelectorAll(".accordionContainer"); // All accordion containers
const accordionContents = document.querySelectorAll(".accordionContent"); // All accordion content
const accordionIcons = document.querySelectorAll(".accordionIcon"); // All accordion icons

accordionContents.forEach((accordionContent) => {
    accordionContent.style.display = "none"; //Hides all accordion contents
});

accordionContainers.forEach((accordionContainer, index) => {
    accordionContainer.addEventListener("click", () => {
        accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
        });

        accordionIcons.forEach((accordionIcon) => {
            accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
        });

        if (accordionContainer.classList.contains("accordion-open")) { // Checks if this container has class "accordion-open"
            accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open"
        } else {
            accordionContainers.forEach((accordionContainer) => {
                accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open" from all containers
            });

            accordionContainer.classList.add("accordion-open"); // Adds class "accordion-open" to this container
            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        }
    });
});

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
            ></Script>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-top">
          <div className="home-left4">
            <span className="home-text93">Wanna know more?</span>
            <div className="home-get-started2 template-button">
              <a
                href="https://calendly.com/hello-blc/discovery-call"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
        <div className="home-bottom">
          <div className="home-container12">
            <div className="home-container13">
              <img
                alt="image"
                src="/logos/reply%20master%20logo%20white%20cropped-200h.png"
                className="home-image8"
              />
              <span className="home-text94">A product of Veteris</span>
            </div>
          </div>
          <span className="home-text95">
            All Copyrights reserved © Veteris- 2023
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Home
