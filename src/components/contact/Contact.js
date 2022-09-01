import React from 'react'
import './Contact.css'
import Section from '../section/Section'
import { Bounce } from 'react-reveal'
import ContactForm from '../contactForm/ContactForm'
import telegram from '../../images/social/telegram.png'
import github from '../../images/social/github.png'
import vk from '../../images/social/vk.png'

const Contact = () => {
  return (
    <Section title="Контакты">
      <ContactForm />
      <Bounce cascade>
        <div className="links">
          <a
            href="https://github.com/SergeiKrk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github Logo" width="40px" />
          </a>
          <a
            href="https://t.me/sergeikrk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={telegram} alt="Telegram Logo" width="40px" />
          </a>

          <a
            href="https://vk.com/id13254986"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={vk} alt="vk Logo" width="40px" />
          </a>
        </div>
      </Bounce>
    </Section>
  )
}

export default Contact
