import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
// import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Skills from '../skills/Skills'

const About = () => {
  return (
    <Section title="Обо мне">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>Кто я?</h2>
            <p>
              Я Сергей{' '}
              <span role="img" aria-label="lightning">
                😄
              </span>{' '}
            </p>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              Я инженер-программист, специализирующийся на интерфейсах
              веб-приложениий.
            </p>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              Вы можете застать меня за работой с JavaScript, React, Redux, Next
              и Gatsby, а так же Adobe Illustrator, Photoshop, Figma.
            </p>
            <div className="typewriter">
              <p className="typewriter-start">
                <span role="img" aria-label="lightning">
                  ⚡
                </span>{' '}
                Я люблю
              </p>
              <Typewriter
                options={{
                  strings: [
                    'изучать новое',
                    'статистику',
                    'воплощать задуманное в жизнь',
                    'справляться с задачами',
                    'признавать и исправлять ошибки',
                    'пробовать что-то новое',
                    'сотрудничать с людьми',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p>.</p>
            </div>
            <p>
              С 2008 я пытаюсь разобраться с тем, как работает интернет и
              реклама. Люблю читать книги по социальной психологии, экономике,
              статистике и маркетингу. Кроме frontend-разработки, также
              практикую интернет-маркетинг: SEO-продвижение, создание рекламных
              кампаний в Яндексе, Google, VK.
            </p>
            <div className="location-wrapper">
              <svg
                className="octicon octicon-location"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
              <p>Ульяновск, Россия</p>
            </div>
          </div>
        </Fade>
        <Skills />
      </div>
    </Section>
  )
}

export default About
